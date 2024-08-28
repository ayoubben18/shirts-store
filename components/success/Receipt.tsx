import React, { useRef } from "react";
import {
  Card,
  CardContent,
  CardFooter,
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
import { Subscriptions, Devices } from "@/types/tableTypes";
import Image from "next/image";

export default function Receipt({
  id,
  order_number,
  devices,
  user_email,
  user_name,
  user_phone,
  quick_delivery,
  vod,
  price,
  plan,
  payement_order_id,
  created_at,
  adult_content,
}: Subscriptions & {
  devices: Devices[];
}) {
  return (
    <Card className="w-full bg-white text-black">
      <CardHeader>
        <CardTitle>Receipt</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold">{user_name}</h2>
            <p>{user_email}</p>
            <p>{user_phone}</p>
          </div>
          <div>
            <p>
              <strong>Order Number:</strong> {order_number}
            </p>
            <p>
              <strong>Order ID:</strong> {id}
            </p>
            <p>
              <strong>Payment Date:</strong> {created_at}
            </p>
            <p>
              <strong>Plan:</strong> {plan}
            </p>
            <p>
              <strong>Price:</strong> {price} $
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Connections</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Device Type</TableHead>
                  <TableHead>MAC Address</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {devices.length > 0 &&
                  devices.map((device, index) => (
                    <TableRow key={index}>
                      <TableCell>{device.device_type}</TableCell>
                      <TableCell>{device.mac_address}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
          <div>
            <p>
              <strong>Quick Delivery:</strong> {quick_delivery ? "Yes" : "No"}
            </p>
            <p>
              <strong>VOD:</strong> {vod ? "Yes" : "No"}
            </p>
            <p>
              <strong>Adult Content:</strong> {adult_content ? "Yes" : "No"}
            </p>
            <p>
              <strong>PayPal Order ID:</strong> {payement_order_id}
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Image
          src={`/ronotv.png`}
          width={120}
          height={120}
          alt="Ronotv"
          className="mx-auto"
        />
      </CardFooter>
    </Card>
  );
}
