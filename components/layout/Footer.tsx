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
import Image from "next/image";
const footerMenuItems = [
  {
    title: "Company",
    items: [{ name: "Ebook Collections", link: "/#collections" }],
  },
  {
    title: "Customer Care",
    items: [
      {
        name: "Returns & Refunds",
        content: {
          title: "Returns & Refunds Policy",
          description: [
            {
              title: "14-Day Refund Policy",
              text: "We offer a 14-day refund policy for all ebook purchases. If you're unsatisfied with your ebook, please contact our customer service team for assistance.",
            },
            {
              title: "Refund Process",
              text: "To request a refund, please email us with your order number and reason for the refund. We'll review your request and process it within 3-5 business days.",
            },
            {
              title: "Refund Timeline",
              text: "Refunds are typically processed within 5-7 business days after approval. The amount will be credited back to the original payment method used for the purchase.",
            },
          ],
        },
      },
      {
        name: "Download Information",
        content: {
          title: "Download Information",
          description: [
            {
              title: "Instant Download",
              text: "After your order is processed, you'll receive an email containing your ebook(s). Please allow a short processing time before the delivery email arrives.",
            },
            {
              title: "Compatible Devices",
              text: "Our ebooks are available in PDF format, compatible with most e-readers, tablets, smartphones, and computers. For the best experience, we recommend using Adobe Acrobat Reader.",
            },
          ],
        },
      },
      {
        name: "Ebook Guide",
        content: {
          title: "Ebook Content Guide",
          description: [
            {
              title: "Skill Levels",
              text: "Our ebooks cater to various skill levels, from beginner to advanced. Each ebook description includes the recommended skill level to help you choose the right guide for your needs.",
            },
            {
              title: "Content Overview",
              text: "Each ebook includes detailed instructions, high-quality images, printable patterns, and tips for successful garment creation. Some advanced guides may also include video tutorials accessible via QR codes.",
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
          <div className="relative aspect-video">
            <Image
              src="/logo.png"
              width={100}
              height={100}
              alt="Pattern Crafter Online"
              className="w-full object-cover"
            />
          </div>
          <div className="flex gap-6">
            <Link
              href="mailto:contact@patterncrafteronline.com"
              aria-label="Email us"
            >
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
