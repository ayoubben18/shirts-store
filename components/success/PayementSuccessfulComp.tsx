"use client";

import { getOrderById } from "@/db/data/subscriptions-data";
import { useQuery } from "@tanstack/react-query";
import { useQueryState } from "nuqs";
import { Skeleton } from "../ui/skeleton";
import SuccessCard from "./SuccessCard";
import { useShirtStore } from "@/stores/useShirtsStore";
import { nanoid } from "nanoid";
import Ronotv from "../checkout/Ronotv";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { getBookShirtById } from "@/db/services/redis-service";
import Script from "next/script";

export default function PayementSuccessfulComp() {
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
    return <Skeleton className="h-40 max-w-96" />;
  }

  if (data) {
    return (
      <div className="flex w-full flex-col items-center gap-7 p-4">
        <Script id="google-analytics-conversion" strategy="afterInteractive">
          {`
          gtag('event', 'conversion', {
            'send_to': 'AW-11019862715/lVjCCNGRj9cZELuF14Yp',
            'transaction_id': ''
          });
        `}
        </Script>
        <Ronotv finish />
        <SuccessCard data={data} />
      </div>
    );
  } else if (shirts.length > 0) {
    return (
      <div className="flex items-center p-4">
        <SuccessCard
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
      </div>
    );
  } else {
    toast.error("You should create an order first!");
    router.push("/");
  }
}
