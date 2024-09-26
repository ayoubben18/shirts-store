"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Shirt, shirts as shirtsData } from "@/constants/shirts";
import { Language, useShirtStore } from "@/stores/useShirtsStore";
import Link from "next/link";
import { Input } from "../ui/input";
import { SearchIcon } from "lucide-react";

const PaginatedCards = () => {
  const [shirts, setShirts] = useState(shirtsData);

  return (
    <>
      <div className="relative w-full">
        <SearchIcon className="absolute left-2 top-5 size-4 -translate-y-1/2 transform" />
        <Input
          className="w-full pl-7"
          type="text"
          placeholder="Search"
          onChange={(e) =>
            setShirts(
              shirtsData.filter((shirt) =>
                shirt.name.toLowerCase().includes(e.target.value),
              ),
            )
          }
        />
      </div>
      <div className="mx-auto grid grid-cols-1 gap-6 px-4 py-12 sm:grid-cols-3 xl:grid-cols-5">
        {shirts.map((shirt, index) => {
          return <ShirtsCard key={index} {...shirt} />;
        })}
      </div>
    </>
  );
};

export const ShirtsCard = ({ id, name, description, price, image }: Shirt) => {
  const router = useRouter();
  const handleClick = () => {
    if (isInCart) {
      removeShirt(id, Language.EN);
    } else {
      addShirt(id, Language.EN);
    }
  };

  const handleBuyNow = () => {
    addShirt(id, Language.EN);
    router.push(`/informations`);
  };

  const { addShirt, removeShirt, shirts } = useShirtStore();
  const isInCart = shirts.some((shirt) => shirt.id === id);
  return (
    <div className="grid h-[500px] grid-rows-2 overflow-hidden rounded-lg border-2 border-secondary bg-card shadow-sm hover:shadow-lg">
      <Link href={`/shirt/${id}`}>
        <div className="h-full overflow-hidden">
          <Image
            priority
            src={image}
            alt="T-Shirt 1"
            width={400}
            height={500}
            className="h-full w-full object-cover transition-all duration-300 hover:scale-105"
            style={{ objectFit: "cover" }}
          />
        </div>
        <h3 className="mt-5 text-center text-lg font-semibold">{name}</h3>
      </Link>
      <div className="flex h-full flex-col justify-end space-y-2 p-4">
        <p className="text-center text-sm text-muted-foreground">
          {description}
        </p>
        <div className="flex flex-col items-center gap-2">
          <span className="text-2xl font-bold">${price}</span>
          <Button
            size="sm"
            variant={isInCart ? "destructive" : "outline"}
            onClick={handleClick}
            className="w-full"
          >
            {isInCart ? "Remove from cart" : "Add to cart"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaginatedCards;
