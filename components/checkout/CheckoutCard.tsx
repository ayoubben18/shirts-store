"use client";

import { getOrderById } from "@/db/data/subscriptions-data";
import { useQuery } from "@tanstack/react-query";
import { useQueryState } from "nuqs";
import { Skeleton } from "../ui/skeleton";
import { useShirtStore } from "@/stores/useShirtsStore";
import OrderSummary from "./OrderSummary";
import { nanoid } from "nanoid";
import Ronotv from "./Ronotv";
import { StatusEnum } from "@/types/tableTypes";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { getBookShirtById } from "@/db/services/redis-service";

const CheckoutCard = () => {
  const router = useRouter();
  const [id] = useQueryState("id");
  const { data, isLoading } = useQuery({
    queryKey: ["checkout"],
    queryFn: () => getOrderById(id!),
    enabled: !!id,
  });

  const { shirts, user, nanoId } = useShirtStore();

  const { data: bookShirt, isLoading: isBookShirtLoading } = useQuery({
    queryKey: ["book-shirt"],
    queryFn: () => getBookShirtById(nanoId),
    enabled: !id,
  });
  if (isLoading || isBookShirtLoading) {
    return <Skeleton className="h-96 w-72" />;
  }

  if (data) {
    if (data.status !== StatusEnum.Draft) {
      router.push(`/success?id=${data.id}`);
    } else {
      return (
        <div className="flex flex-col items-center gap-7">
          <Ronotv finish={false} />
          <OrderSummary data={data} />
        </div>
      );
    }
  } else if (shirts.length > 0 || bookShirt) {
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
          order_number: nanoId,
          price: Number(
            shirts
              .reduce((acc, shirt) => acc + Number(shirt.price), 0)
              .toFixed(2),
          ),
          plan: "monthly",
          connections: "10",
          adult_content: false,
          quick_delivery: user.quickDelivery,
          vod: false,
        }}
      />
    );
  } else {
    toast.error("No shirts in cart");
    router.push("/");
  }
};

export default CheckoutCard;
