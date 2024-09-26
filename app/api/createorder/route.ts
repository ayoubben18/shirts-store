import logger from "@/lib/logger";
import { NextRequest, NextResponse } from "next/server";
import paypal from "@paypal/checkout-server-sdk";
import { paypalClient } from "@/utils/paypal";
import { ServerEnv } from "@/lib/env-server";

export const revalidate = 0;

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { price, id, products } = body;
  try {
    const paypalReq = new paypal.orders.OrdersCreateRequest();
    paypalReq.requestBody({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: price,
            breakdown: {
              item_total: {
                currency_code: "USD",
                value: price,
              },
              shipping: {
                currency_code: "USD",
                value: "0",
              },
              tax_total: {
                currency_code: "USD",
                value: "0",
              },
              discount: {
                currency_code: "USD",
                value: "0",
              },
              handling: {
                currency_code: "USD",
                value: "0",
              },
              insurance: {
                currency_code: "USD",
                value: "0",
              },
              shipping_discount: {
                currency_code: "USD",
                value: "0",
              },
            },
          },
          items: products.map((product: { name: string; price: string }) => ({
            name: product.name,
            quantity: "1",
            unit_amount: {
              currency_code: "USD",
              value: product.price,
            },
            category: "DIGITAL_GOODS",
          })),
          description:
            products.join(", ") +
            " - " +
            price +
            "$" +
            "\ndigital products which means no shipping",
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
