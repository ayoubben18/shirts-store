"use client";
import React from "react";
import { Button } from "../ui/button";
import { plans } from "@/constants/plans";
import Image from "next/image";
import { useRouter } from "next/navigation";

const shirts: Props[] = [
  {
    name: "One shirt",
    price: plans[0].price,
    description:
      "A classic vintage-inspired t-shirt with a soft, comfortable feel.",
    image: "/shirt.jpg",
  },
  {
    name: "Three shirts",
    price: plans[1].price,
    description:
      "A classic vintage-inspired t-shirt with a soft, comfortable feel.",
    image: "/shirt.jpg",
  },
  {
    name: "Seven shirts",
    price: plans[2].price,
    description:
      "A classic vintage-inspired t-shirt with a soft, comfortable feel.",
    image: "/shirt.jpg",
  },
  {
    name: "Ten shirts",
    price: plans[3].price,
    description:
      "A classic vintage-inspired t-shirt with a soft, comfortable feel.",
    image: "/shirt.jpg",
  },
];

const PaginatedCards = () => {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-12 sm:grid-cols-2 xl:grid-cols-4">
      {shirts.map((shirt, index) => {
        return <ShirtsCard key={index} {...shirt} />;
      })}
    </div>
  );
};

interface Props {
  name: string;
  price: string;
  description: string;
  image: string;
}

const ShirtsCard = ({ name, description, price, image }: Props) => {
  const router = useRouter();
  const handleClick = () => {
    const plan = plans.find((p) => p.price === price.toString())!;
    router.push(`/checkout?plan=${plan.name}`);
  };
  return (
    <div className="overflow-hidden rounded-lg bg-card shadow-sm transition-all hover:shadow-lg">
      <Image
        priority
        src={image}
        alt="T-Shirt 1"
        width={400}
        height={500}
        className="h-[300px] w-full object-cover"
        style={{ aspectRatio: "400/500", objectFit: "cover" }}
      />
      <div className="space-y-2 p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">${price}</span>
          <Button size="sm" onClick={handleClick}>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaginatedCards;
