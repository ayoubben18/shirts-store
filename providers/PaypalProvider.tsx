"use client";

import { ClientEnv } from "@/lib/env-client";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { ReactNode } from "react";

export function PaypalProvider({ children }: { children: ReactNode }) {
  return (
    <PayPalScriptProvider
      options={{
        clientId:
          process.env.NODE_ENV === "development"
            ? ClientEnv.NEXT_PUBLIC_PAYPAL_SANDBOX_ID
            : ClientEnv.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
      }}
    >
      {children}
    </PayPalScriptProvider>
  );
}
