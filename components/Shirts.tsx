"use client";
import PageWrapper from "@/components/PageWrapper";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { shirts as DataShirts } from "@/constants/shirts";
import { cn } from "@/lib/utils";
import { Language, useShirtStore } from "@/stores/useShirtsStore";
import {
  CheckCircleIcon,
  FileTextIcon,
  LockIcon,
  MinusIcon,
  PlusIcon,
  ShoppingCartIcon,
  TruckIcon,
} from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useMemo, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { toast } from "sonner";

function Shirts({ id }: { id: string }) {
  const shirt = DataShirts.find((shirt) => shirt.id === Number(id));
  const [language, setLanguage] = useState<Language>(Language.EN);
  const { shirts, addShirt, removeShirt } = useShirtStore();
  const shirtsInCart = useMemo(
    () => shirts.filter((s) => s.id === shirt?.id),
    [shirts, shirt?.id],
  );
  if (!shirt) return notFound();

  const handleAddToCart = () => {
    addShirt(shirt.id, language);
    toast.success(`Shirt added to cart - ${language}`, {
      action: {
        label: "Undo",
        onClick: removeFromCart,
      },
    });
  };

  const removeFromCart = () => {
    removeShirt(shirt.id, language);
  };

  return (
    <PageWrapper className="gap-8">
      <Card className="mx-auto h-full w-full max-w-4xl">
        <CardContent className="h-full p-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="relative h-[500px] w-full">
              <Image
                src={shirt.image}
                alt={shirt.name}
                fill
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <CardTitle className="mb-2 text-3xl font-bold">
                  {shirt.name}
                </CardTitle>
                <CardDescription className="mb-4 text-lg">
                  {shirt.description}
                </CardDescription>
                <div className="mb-6 flex flex-col space-y-2">
                  <div className="flex items-center space-x-2">
                    <LockIcon className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium">SECURE PAYMENT</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircleIcon className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium">100% GUARANTEED</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FileTextIcon className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium">PDF Content</span>
                  </div>
                </div>
                <div className="mb-6">
                  <span className="text-sm font-medium">Category: </span>
                  <span className="text-sm font-bold text-green-500">
                    {shirt.categories?.join(", ") || "N/A"}
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <p className="mb-6 text-2xl font-semibold">${shirt.price}</p>

                <div className="flex items-center space-x-2">
                  <Tabs
                    value={language}
                    onValueChange={(value) => setLanguage(value as Language)}
                  >
                    <TabsList className="grid grid-cols-2">
                      <TabsTrigger value={Language.EN}>
                        PDF {Language.EN}
                      </TabsTrigger>
                      <TabsTrigger value={Language.AR}>
                        PDF {Language.AR}
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
                <Button
                  className="w-full"
                  onClick={handleAddToCart}
                  disabled={shirtsInCart.length === 2}
                >
                  <ShoppingCartIcon className="mr-2 h-4 w-4" /> Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle className="text-3xl">Product Details</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="text-lg">
            {shirt.details.map((detail, index) => (
              <li key={index} className="mb-2 flex items-center">
                <CheckCircleIcon className="mr-3 h-6 w-6 text-green-500" />
                {detail}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </PageWrapper>
  );
}

export default Shirts;
