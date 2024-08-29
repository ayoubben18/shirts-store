"use client";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { Separator } from "../ui/separator";

const footerMenuItems = [
  {
    title: "Company",
    items: [{ name: "Collections", link: "/#head" }],
  },
  {
    title: "Customer Care",
    items: [
      {
        name: "Returns & Exchanges",
        content: {
          title: "Returns & Exchanges Policy",
          description: [
            {
              title: "30-Day Return Policy",
              text: "We offer a 30-day return policy for all unworn, unwashed t-shirts with original tags attached. Customer is responsible for return shipping costs unless the item is defective.",
            },
            {
              title: "Exchange Process",
              text: "To exchange a t-shirt for a different size or color, please initiate the return process and place a new order for the desired item. We'll process your refund once we receive the original item.",
            },
            {
              title: "Refund Timeline",
              text: "Refunds are typically processed within 5-7 business days after we receive your return. The amount will be credited back to the original payment method used for the purchase.",
            },
          ],
        },
      },
      {
        name: "Shipping Information",
        content: {
          title: "Shipping Information",
          description: [
            {
              title: "Domestic Shipping",
              text: "We offer free standard shipping on all orders over $50. Orders typically arrive within 3-5 business days. Expedited shipping options are available at checkout for an additional fee.",
            },
            {
              title: "International Shipping",
              text: "We ship to select countries worldwide. International shipping rates and delivery times vary based on destination. Please note that customers are responsible for any import duties or taxes.",
            },
          ],
        },
      },
      {
        name: "Size Guide",
        content: {
          title: "T-Shirt Size Guide",
          description: [
            {
              title: "Measurements",
              text: "Our size guide provides detailed measurements for chest width, body length, and sleeve length for each size from XS to XXL. Please refer to this guide to ensure the best fit.",
            },
            {
              title: "Fit Recommendations",
              text: "Our t-shirts are designed for a comfortable, regular fit. If you prefer a looser fit, we recommend sizing up. For a more fitted look, consider sizing down.",
            },
          ],
        },
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className="flex w-full flex-col gap-8 py-10">
      <Separator />
      <div className="container mx-auto">
        <div className="mt-7 flex items-center justify-between">
          <h1 className="text-2xl font-black">RONOTV SHOP</h1>
          <div className="flex gap-6">
            <Link href="tel:+1234567890" aria-label="Call us">
              <Phone className="h-6 w-6" />
            </Link>
            <Link href="mailto:order@ronotv.shop" aria-label="Email us">
              <Mail className="h-6 w-6" />
            </Link>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

const Menu = () => {
  return (
    <div className="mt-4 grid grid-cols-2">
      {footerMenuItems.map((menu, index) => (
        <div key={index} className="flex flex-col gap-2">
          <h1 className="text-lg font-bold">{menu.title}</h1>
          <ul className="flex flex-col gap-2">
            {menu.items.map((item, itemIndex) => (
              <li key={itemIndex} className="text-sm font-light">
                {menu.title === "Company" ? (
                  <Link href={(item as { link: string }).link}>
                    {item.name}
                  </Link>
                ) : (
                  <Drawer>
                    <DrawerTrigger asChild>
                      <Button
                        variant="link"
                        className="p-0 text-sm font-light text-white"
                      >
                        {item.name}
                      </Button>
                    </DrawerTrigger>
                    <DrawerContent className="px-4">
                      <DrawerHeader>
                        <DrawerTitle className="text-3xl">
                          {
                            (item as { content: { title: string } }).content
                              .title
                          }
                        </DrawerTitle>
                      </DrawerHeader>
                      <DrawerDescription>
                        {(
                          item as {
                            content: {
                              description: Array<{
                                title: string;
                                text: string;
                              }>;
                            };
                          }
                        ).content.description.map((paragraph, index) => (
                          <div key={index} className="mb-4">
                            <h3 className="mb-2 text-lg font-semibold">
                              ● {paragraph.title}
                            </h3>
                            <p>{paragraph.text}</p>
                          </div>
                        ))}
                      </DrawerDescription>
                      <DrawerFooter>
                        <DrawerClose asChild>
                          <Button variant="outline">Close</Button>
                        </DrawerClose>
                      </DrawerFooter>
                    </DrawerContent>
                  </Drawer>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Footer;
