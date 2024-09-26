"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Shirt, shirts } from "@/constants/shirts";
import { Language, useShirtStore } from "@/stores/useShirtsStore";
import Link from "next/link";

const PaginatedCards = () => {
  return (
    <div className="mx-auto grid grid-cols-1 gap-6 px-4 py-12 sm:grid-cols-3 xl:grid-cols-5">
      {shirts.map((shirt, index) => {
        return <ShirtsCard key={index} {...shirt} />;
      })}
    </div>
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
        <div className="h-full">
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
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="flex flex-col items-start justify-between gap-2">
          <span className="text-2xl font-bold">${price}</span>
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant={isInCart ? "destructive" : "outline"}
              onClick={handleClick}
            >
              {isInCart ? "Remove" : "Add to Cart"}
            </Button>
            <Button size="sm" onClick={handleBuyNow}>
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginatedCards;
