"use client";
import { HomeIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";
import { useShirtStore } from "@/stores/useShirtsStore";
import BasketShirts from "./BasketShirts";

const NavBar = () => {
  const pathname = usePathname();
  const { shirts } = useShirtStore();

  const inCheckout =
    pathname.startsWith("/checkout") || pathname.startsWith("/success");

  return (
    <div className={`container mx-auto flex items-center justify-between px-4`}>
      <div className="flex h-20 items-center justify-between">
        <Link href={`/`} className="text-3xl font-black">
          <HomeIcon className={`${inCheckout && "hidden"} h-8 w-8`} />
        </Link>
      </div>

      <BasketShirts />
    </div>
  );
};

export default NavBar;
