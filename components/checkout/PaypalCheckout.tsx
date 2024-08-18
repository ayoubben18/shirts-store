"use client";

import { usePlanStore, plans } from "@/stores/usePlanStore";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { toast } from "sonner";
import { Skeleton } from "../ui/skeleton";
import { redirect, RedirectType, useRouter } from "next/navigation";
import { useQueryState } from "nuqs";

export default function PayPalCheckout() {
  const [{ isPending }] = usePayPalScriptReducer();
  const { push } = useRouter();

  const [plan] = useQueryState("plan");

  const createOrder = async () => {
    const reqBodyJson = {
      plan: plan,
      price: plans.find((p) => p.name === plan)?.price,
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
      body: JSON.stringify({ orderID: data.orderID }),
      next: {
        revalidate: 0,
      },
    });

    const orderData = await response.json();
    if (response.ok) {
      toast.success("Payment successful!");
      push("https://ronotv.com/profile");
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
          className="z-0 w-full"
          style={{
            layout: "vertical",
            shape: "rect",
            label: "paypal",
            height: 55,
            tagline: false,
            color: "silver",
          }}
          forceReRender={[plan]}
          createOrder={createOrder}
          onApprove={onApprove}
          onCancel={() => {
            toast.info("Payment cancelled.");
          }}
          onError={(err) => {
            console.log(err);

            toast.error("An error occurred. Please try again.");
          }}
        />
      )}
    </>
  );
}
