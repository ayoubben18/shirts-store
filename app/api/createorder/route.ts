import logger from "@/lib/logger";
import { NextRequest, NextResponse } from "next/server";
import paypal from "@paypal/checkout-server-sdk";
import { paypalClient } from "@/utils/paypal";
import { ServerEnv } from "@/lib/env-server";

export const revalidate = 0;

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { price, id } = body;
  try {
    const paypalReq = new paypal.orders.OrdersCreateRequest();
    paypalReq.requestBody({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: price,
          },
        },
      ],
    });

    const response = await paypalClient.execute(paypalReq);

    logger.info(
      {
        response,
        price,
        id,
      },
      `Create order response order_id:${response.result.id}, id:${id}`,
    );

    return NextResponse.json({ orderID: response.result.id }, { status: 201 });
  } catch (error: any) {
    logger.error({ error, body }, "Error creating order:");
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
