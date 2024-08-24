import { updateSubscription } from "@/db/data/subscriptions-data";
import logger from "@/lib/logger";
import { Subscription } from "@supabase/supabase-js";
import { verifySignatureAppRouter } from "@upstash/qstash/nextjs";
import { NextResponse } from "next/server";

export const POST = verifySignatureAppRouter(async (req: Request) => {
  const body = await req.json();
  const { id, updateObject } = body as {
    id: string;
    updateObject: Partial<Subscription>;
  };

  logger.warn(`Subscription paid but not confirmed id=${id}`, {
    id,
    updateObject,
  });

  await updateSubscription(id, updateObject);

  return NextResponse.json({ message: "Subscription updated" });
});
