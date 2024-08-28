"use server";

import { supabase } from "@/clients/supabaseCLient";
import { handleStatus } from "@/lib/handleStatus";
import { Devices } from "@/types/tableTypes";

const getDevices = async (subId: string) => {
  const { data, error, status } = await supabase
    .from("devices")
    .select("*")
    .eq("subscription_id", subId);

  console.log(data);

  return handleStatus(status, data, error) as Devices[];
};

export { getDevices };
