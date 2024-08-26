import { updateSubscription } from "@/db/data/subscriptions-data";
import logger from "@/lib/logger";
import { Subscriptions } from "@/types/tableTypes";
import { verifySignatureAppRouter } from "@upstash/qstash/nextjs";
import { NextResponse } from "next/server";

export const POST = verifySignatureAppRouter(async (req: Request) => {
  const body = await req.json();
  const { id, updateObject } = body as {
    id: string;
    updateObject: Partial<Subscriptions>;
  };

  logger.warn(
    `Subscription paid but not confirmed id=${id}, order_id:${updateObject.payement_order_id}`,
    {
      id,
      updateObject,
    },
  );

  await updateSubscription(id, updateObject);

  return NextResponse.json({ message: "Subscription updated" });
});
