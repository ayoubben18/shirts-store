import { useShirtStore } from "@/stores/useShirtsStore";
import React, { useMemo } from "react";
import {
  Sheet,
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
import Link from "next/link";
import { ScrollArea } from "../ui/scroll-area";

const BasketShirts = () => {
  const router = useRouter();

  const { shirts, removeShirt } = useShirtStore();
  const totalPrice = useMemo(
    () =>
      shirts.reduce((acc, shirt) => acc + Number(shirt.price), 0).toFixed(2),
    [shirts],
  );
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="flex items-center gap-2">
          Cart <ShoppingBasket className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
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
        <div className="mt-10 flex-grow overflow-y-auto">
          <ScrollArea className="flex h-full w-full flex-col space-y-4">
            {shirts.map((shirt) => (
              <div key={shirt.id} className="flex items-center gap-4">
                <Link
                  href={`/shirt/${shirt.id}`}
                  className="relative aspect-square h-full w-1/3"
                >
                  <Image
                    src={shirt.image}
                    alt={shirt.name}
                    width={100}
                    height={100}
                    className="h-full w-full rounded-md object-cover"
                  />
                </Link>
                <div className="flex w-full flex-col">
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
                  <span className="text-muted-foreground">
                    {shirt.language}
                  </span>
                  <span>{shirt.price} $</span>
                </div>
              </div>
            ))}
          </ScrollArea>
        </div>
        <div className="mt-auto">
          <h1 className="mb-4 text-center font-semibold">
            Total: ${totalPrice}
          </h1>
          <SheetFooter>
            <Button
              onClick={() => router.push("/informations")}
              className="w-full"
              disabled={shirts.length === 0}
            >
              Checkout
            </Button>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default BasketShirts;
