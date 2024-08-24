"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Download, Home, Mail } from "lucide-react";
import { useQueryState } from "nuqs";
import { getOrderById } from "@/db/data/subscriptions-data";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "../ui/skeleton";
import { format } from "date-fns";
import { useRouter } from "next/navigation";

export default function PayementSuccessfulComp() {
  const { push } = useRouter();
  const [id] = useQueryState("id");
  const { data, isLoading } = useQuery({
    queryKey: ["checkout"],
    queryFn: () => getOrderById(id!),
    enabled: !!id,
  });

  if (isLoading) {
    return <Skeleton className="h-40 max-w-96" />;
  }

  if (!data) {
    return <div>No Order found</div>;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
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
            <span>$ {data.price}</span>
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
          <Button className="w-full">
            <Download className="mr-2 h-4 w-4" /> Download Receipt
          </Button>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => push("https://ronotv.com")}
          >
            <Home className="mr-2 h-4 w-4" /> Return to Homepage
          </Button>
          <div className="mt-4 text-center text-sm text-muted-foreground">
            <p>If you have any questions, please contact our support team.</p>
            <a
              href="mailto:contact@ronotv.com"
              className="mt-1 flex items-center justify-center text-primary hover:underline"
            >
              <Mail className="mr-1 h-4 w-4" /> contact@ronotv.com
            </a>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
