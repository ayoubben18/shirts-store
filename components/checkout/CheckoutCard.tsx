"use client";

import { getOrderById } from "@/db/data/subscriptions-data";
import { useQuery } from "@tanstack/react-query";
import { useQueryState } from "nuqs";
import { Skeleton } from "../ui/skeleton";
import { useShirtStore } from "@/stores/useShirtsStore";
import OrderSummary from "./OrderSummary";
import { nanoid } from "nanoid";

const CheckoutCard = () => {
  const [id] = useQueryState("id");
  const { data, isLoading } = useQuery({
    queryKey: ["checkout"],
    queryFn: () => getOrderById(id!),
    enabled: !!id,
  });
  const { shirts, user } = useShirtStore();

  if (isLoading) {
    return <Skeleton className="h-40 w-full" />;
  }

  if (data) {
    return <OrderSummary data={data} />;
  } else if (shirts.length > 0) {
    return (
      <OrderSummary
        data={{
          id: nanoid(),
          country_code: "US",
          created_at: new Date().toISOString(),
          payement_email: "teset@mail.com",
          payement_full_name: "test",
          payement_order_id: "1234567890",
          //@ts-ignore
          payement_phone: "+6567",
          order_number: Math.floor(Math.random() * 1000000) + 1,
          price:
            shirts.reduce((acc, curr) => acc + Number(curr.price), 0) +
            (user.quickDelivery ? 1.99 : 0),
          plan: "monthly",
          connections: "10",
          adult_content: false,
          quick_delivery: user.quickDelivery,
          vod: false,
        }}
      />
    );
  }

  return <h1>No order found</h1>;
};

export default CheckoutCard;
