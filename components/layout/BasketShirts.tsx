import { useShirtStore } from "@/stores/useShirtsStore";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { ShoppingBasket, TrashIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const BasketShirts = () => {
  const router = useRouter();

  const { shirts, removeShirt } = useShirtStore();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="flex items-center gap-2">
          Cart <ShoppingBasket className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
          <SheetDescription>
            {shirts.length > 0 ? (
              <span>{shirts.length} items</span>
            ) : (
              <span>Your cart is empty</span>
            )}
          </SheetDescription>
        </SheetHeader>
        <div className="mt-10 flex w-full flex-col space-y-4">
          {shirts.map((shirt) => (
            <div key={shirt.id} className="flex items-center gap-4">
              <div className="relative aspect-square h-full w-1/3">
                <Image
                  src={shirt.image}
                  alt={shirt.name}
                  width={100}
                  height={100}
                  className="h-full w-full rounded-md object-cover"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center justify-between">
                  <span>{shirt.name}</span>
                  <Button
                    size="icon"
                    className="text-red-500"
                    variant="ghost"
                    onClick={() => {
                      removeShirt(shirt.id, shirt.language);
                    }}
                  >
                    <TrashIcon className="h-5 w-5" />
                  </Button>
                </div>
                <span className="text-muted-foreground">{shirt.language}</span>
                <span>{shirt.price} </span>
              </div>
            </div>
          ))}
        </div>
        <SheetFooter className="mt-10">
          <Button
            onClick={() => router.push("/informations")}
            className="w-full"
            disabled={shirts.length === 0}
          >
            Checkout
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default BasketShirts;
