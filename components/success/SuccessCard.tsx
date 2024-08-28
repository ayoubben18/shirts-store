"use client";
import { Subscriptions } from "@/types/tableTypes";
import { CheckCircle, Download, Home, Mail } from "lucide-react";
import { format } from "date-fns";
import React, { useRef } from "react";
import generatePDF, { Resolution, Margin, Options } from "react-to-pdf";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useShirtStore } from "@/stores/useShirtsStore";
import { useQuery } from "@tanstack/react-query";
import { getDevices } from "@/db/data/devices-data";
import Receipt from "./Receipt";

type Props = {
  data: Subscriptions;
};

const SuccessCard = ({ data }: Props) => {
  const options: Options = {
    filename: `receipt-${data.order_number}.pdf`,
    method: "save",

    resolution: Resolution.LOW,
    page: {
      margin: Margin.SMALL,
      orientation: "portrait",
    },
    canvas: {
      mimeType: "image/png",
      qualityRatio: 1,
    },

    overrides: {
      pdf: {
        compress: true,
      },
      canvas: {
        useCORS: true,
        scale: 1.8,
      },
    },
  };
  const { clearShirts, clearUser } = useShirtStore();
  const router = useRouter();
  const { data: devices, isLoading } = useQuery({
    queryKey: ["devices"],
    queryFn: () => getDevices(data.id),
    retry: true,
    enabled: data.connections !== "10",
  });
  console.log({ devices, data });
  const targetRef = useRef<HTMLDivElement>(null);

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle className="h-10 w-10 text-primary" />
        </div>
        <CardTitle className="text-2xl font-bold">
          Payment Successful!
        </CardTitle>
        <CardDescription>
          Thank you for your purchase. Your order has been processed
          successfully.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between">
          <span className="font-medium">Order Number:</span>
          <span>#{data.order_number}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Amount Paid:</span>
          <span>$ {data.price.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Payment Method:</span>
          <span>PayPal</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Date:</span>
          <span>
            {data.created_at
              ? format(new Date(data.created_at), "dd/MM/yyyy")
              : "N/A"}
          </span>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        {" "}
        <Button
          variant="outline"
          className="w-full"
          onClick={() => {
            clearUser();
            clearShirts();
            router.push(
              data.connections === "10" ? "/" : "https://www.ronotv.com",
            );
          }}
        >
          <Home className="mr-2 h-4 w-4" /> Return to Homepage
        </Button>
        {data.connections !== "10" && (
          <div className="flex w-full flex-col gap-2">
            <Button
              className="w-full"
              disabled={isLoading}
              onClick={() => generatePDF(targetRef, options)}
            >
              <Download className="mr-2 h-4 w-4" /> Download Receipt
            </Button>
            <div ref={targetRef} className="w-full">
              <Receipt {...data} devices={devices ? devices : []} />
            </div>
          </div>
        )}
        <div className="mt-4 text-center text-sm text-muted-foreground">
          <p>If you have any questions, please contact our support team.</p>
          <a
            href="mailto:contact@ronotv.com"
            className="mt-1 flex items-center justify-center text-primary hover:underline"
          >
            <Mail className="mr-1 h-4 w-4" />{" "}
            {data.connections === "10"
              ? "contact@ronotv.shop"
              : "contact@ronotv.com"}
          </a>
        </div>
      </CardFooter>
    </Card>
  );
};

export default SuccessCard;
