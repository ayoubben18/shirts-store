"use server";

import { supabase } from "@/clients/supabaseCLient";
import { handleStatus } from "@/lib/handleStatus";
import { Subscriptions } from "@/types/tableTypes";

const getOrderById = async (orderId: string) => {
  const { data, error, status } = await supabase
    .from("subscriptions")
    .select("*")
    .eq("id", orderId)
    .single();
  console.log(data);

  return handleStatus(status, data, error) as Subscriptions;
};

const updateSubscription = async (
  id: string,
  props: Partial<Subscriptions>,
) => {
  const { data, error, status } = await supabase
    .from("subscriptions")
    //@ts-ignore
    .update(props)
    .eq("id", id)
    .select("*")
    .single();
  return handleStatus(status, data, error) as Subscriptions;
};

export { getOrderById, updateSubscription };
