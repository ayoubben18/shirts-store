"use client";

import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Skeleton } from "../ui/skeleton";
import { useQueryClient } from "@tanstack/react-query";
import confetti from "canvas-confetti";
interface PayPalCheckoutProps {
  price: string;
  id: string;
  mock: boolean;
}

export default function PayPalCheckout({
  price,
  id,
  mock,
}: PayPalCheckoutProps) {
  const [{ isPending }] = usePayPalScriptReducer();
  const { push } = useRouter();
  const queryClient = useQueryClient();

  const handleClick = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  const createOrder = async () => {
    const reqBodyJson = {
      id: id,
      price: price,
    };
    const response = await fetch("/api/createorder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBodyJson),
      next: {
        revalidate: 0,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || "Failed to create order");
    }

    const orderData = (await response.json()) as { orderID: string };

    return orderData.orderID;
  };

  const onApprove = async (data: any) => {
    const response = await fetch("/api/captureorder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ orderID: data.orderID, id: id, mock }),
      next: {
        revalidate: 0,
      },
    });

    const orderData = await response.json();
    if (response.ok) {
      toast.success("Payment successful!");
      handleClick();
      queryClient.invalidateQueries({ queryKey: ["checkout"] });
      push(mock ? `/success` : `/success?id=${id}`);
    } else {
      throw new Error(orderData.error || "Failed to capture order");
    }
  };

  return (
    <>
      {" "}
      {isPending ? (
        <Skeleton className="h-40 w-full" />
      ) : (
        <PayPalButtons
          className="relative z-0 w-full"
          style={{
            layout: "vertical",
            shape: "rect",
            label: "paypal",
            height: 55,
            tagline: false,
            color: "silver",
          }}
          createOrder={createOrder}
          onApprove={onApprove}
          onCancel={() => {
            toast.info("Payment cancelled.");
          }}
          onError={(err) => {
            toast.error("An error occurred. Please try again.");
          }}
        />
      )}
    </>
  );
}
