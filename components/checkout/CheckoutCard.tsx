"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";
import { useQueryState } from "nuqs";
import { getOrderById } from "@/db/data/subscriptions-data";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "../ui/skeleton";
import PayPalCheckout from "./PaypalCheckout";
import { PaypalProvider } from "@/providers/PaypalProvider";

const CheckoutCard = () => {
  const [id] = useQueryState("id");
  const { data, isLoading } = useQuery({
    queryKey: ["checkout"],
    queryFn: () => getOrderById(id!),
    enabled: !!id,
  });

  if (isLoading) {
    return <Skeleton className="h-40 w-full" />;
  }

  if (!data) {
    return <div>No Order found</div>;
  }
  return (
    <div className="mx-auto max-w-md rounded-lg bg-primary/5 p-6">
      <h1 className="mb-6 text-center text-3xl font-bold">
        YOUR ORDER N°{data.order_number}
      </h1>

      <Card>
        <CardHeader>
          <CardTitle>Order Summary</CardTitle>
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
              <TableRow>
                <TableCell>Connections</TableCell>
                <TableCell className="text-right">{data.connections}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>6 Months</TableCell>
                <TableCell className="text-right">$ {data.price}</TableCell>
              </TableRow>
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
                {data?.price}$
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
            <PayPalCheckout price={data.price.toString()} id={id!} />
          </PaypalProvider>
        </CardContent>
      </Card>
    </div>
  );
};

export default CheckoutCard;
