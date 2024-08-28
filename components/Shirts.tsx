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
import { useShirtStore } from "@/stores/useShirtsStore";
import {
  CheckCircleIcon,
  LockIcon,
  MinusIcon,
  PlusIcon,
  ShoppingCartIcon,
  TruckIcon,
} from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useMemo, useState } from "react";

function Shirts({ id }: { id: string }) {
  const shirt = DataShirts.find((shirt) => shirt.id === Number(id));
  const { shirts, addShirt, removeShirt } = useShirtStore();
  const shirtInCart = useMemo(
    () => shirts.find((s) => s.id === shirt?.id),
    [shirts, shirt?.id],
  );
  const [quantity, setQuantity] = useState(shirtInCart?.quantity || 1);
  if (!shirt) return notFound();

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    addShirt(shirt.id, quantity);
  };

  const removeFromCart = () => {
    removeShirt(shirt.id);
    setQuantity(1);
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
                className="rounded-lg"
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
                    <TruckIcon className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium">FREE SHIPPING</span>
                  </div>
                </div>
                <div className="mb-6">
                  <span className="text-sm font-medium">Category: </span>
                  <span className="text-sm font-bold text-green-500">MEN</span>
                </div>
              </div>
              <div className="space-y-4">
                <p className={cn(shirtInCart && "text-green-500")}>
                  {shirtInCart && (
                    <div className="flex items-center space-x-2">
                      <span>You already have this shirt in your cart</span>
                      <Button
                        variant={"link"}
                        className="text-red-500"
                        onClick={removeFromCart}
                      >
                        Remove
                      </Button>
                    </div>
                  )}
                </p>
                <p className="mb-6 text-2xl font-semibold">${shirt.price}</p>

                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={decrementQuantity}
                  >
                    <MinusIcon className="h-4 w-4" />
                  </Button>
                  <Input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                    }
                    className="w-20 text-center"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={incrementQuantity}
                  >
                    <PlusIcon className="h-4 w-4" />
                  </Button>
                </div>
                <Button className="w-full" onClick={handleAddToCart}>
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
