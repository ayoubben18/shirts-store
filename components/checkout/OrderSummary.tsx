import { SubscriptionPlan, Subscriptions } from "@/types/tableTypes";
import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PayPalCheckout from "./PaypalCheckout";
import { PaypalProvider } from "@/providers/PaypalProvider";
import { useShirtStore } from "@/stores/useShirtsStore";

interface Props {
  data: Subscriptions;
}

const getAmountOfMonths = (plan: SubscriptionPlan) => {
  let months: number;
  switch (plan) {
    case SubscriptionPlan.Monthly:
      months = 1;
      break;
    case SubscriptionPlan.Quarterly:
      months = 3;
      break;
    case SubscriptionPlan.SemiAnnual:
      months = 6;
      break;
    case SubscriptionPlan.Annual:
      months = 12;
      break;
    default:
      months = 0;
      break;
  }
  return months;
};

const OrderSummary = ({ data }: Props) => {
  const { shirts } = useShirtStore();
  return (
    <div className="mx-auto max-w-md rounded-lg bg-primary/5 p-6">
      <h1 className="mb-6 text-center text-3xl font-bold">
        YOUR ORDER N°{data.order_number}
      </h1>

      <Card>
        <CardHeader>
          <CardTitle>Order Summary</CardTitle>
          {data.connections === "10" && (
            <CardDescription>
              <ul className="flex flex-col gap-2">
                {shirts.map((shirt) => (
                  <li key={shirt.id} className="flex flex-col">
                    <span>{shirt.name}</span>
                    <span>
                      {shirt.price}$ x {shirt.quantity}
                    </span>
                  </li>
                ))}
              </ul>
            </CardDescription>
          )}
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead className="text-right">SubTotal</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.connections === "10" ? (
                <TableRow>
                  <TableCell>Shirts</TableCell>
                  <TableCell className="text-right">{data.price}$</TableCell>
                </TableRow>
              ) : (
                <TableRow>
                  <TableCell>Connections</TableCell>
                  <TableCell className="text-right">
                    {data.connections}
                  </TableCell>
                </TableRow>
              )}
              {data.connections !== "10" && (
                <TableRow>
                  <TableCell>
                    {getAmountOfMonths(data.plan as SubscriptionPlan)} Months
                  </TableCell>
                  <TableCell className="text-right">$ {data.price}</TableCell>
                </TableRow>
              )}
              {data.vod && (
                <TableRow>
                  <TableCell>VOD ( Movies && Series )</TableCell>
                  <TableCell className="text-right">0$</TableCell>
                </TableRow>
              )}
              {data.adult_content && (
                <TableRow>
                  <TableCell>Adult Content</TableCell>
                  <TableCell className="text-right">0$</TableCell>
                </TableRow>
              )}
              {data.quick_delivery && (
                <TableRow>
                  <TableCell>Quick Delivery</TableCell>
                  <TableCell className="text-right">1.99$</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>

          <div className="mt-4 rounded-md bg-primary/10 p-4">
            <div className="flex items-center justify-between">
              <span className="font-semibold">TOTAL</span>
              <span className="text-2xl font-bold text-primary">
                {data?.price.toFixed(2)}$
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>PayPal ( Debit / Credit Cards )</CardTitle>
        </CardHeader>
        <CardContent
          className="w-full"
          style={{
            colorScheme: "none",
          }}
        >
          <PaypalProvider>
            <PayPalCheckout
              price={data.price.toFixed(2).toString()}
              id={data.id!}
              mock={data.connections === "10" ? true : false}
            />
          </PaypalProvider>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderSummary;
