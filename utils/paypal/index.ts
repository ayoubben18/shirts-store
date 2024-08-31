import { ServerEnv } from "@/lib/env-server";
import paypal from "@paypal/checkout-server-sdk";

let envirenement;

if (process.env.NODE_ENV === "development") {
  envirenement = new paypal.core.SandboxEnvironment(
    ServerEnv.PAYPAL_SANDBOX_ID,
    ServerEnv.PAYPAL_SANDBOX_SECRET,
  );
} else {
  envirenement = new paypal.core.LiveEnvironment(
    ServerEnv.PAYPAL_CLIENT_ID,
    ServerEnv.PAYPAL_CLIENT_SECRET,
  );
}

const paypalClient = new paypal.core.PayPalHttpClient(envirenement);

export { paypalClient };
