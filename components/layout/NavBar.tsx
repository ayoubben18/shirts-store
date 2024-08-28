"use client";
import { HomeIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useShirtStore } from "@/stores/useShirtsStore";

const NavBar = () => {
  const router = useRouter();
  const { shirts } = useShirtStore();
  return (
    <div className={`container mx-auto flex items-center justify-between px-4`}>
      <div className="flex h-20 items-center justify-between">
        <Link href={`/`} className="text-3xl font-black">
          <HomeIcon className="h-8 w-8" />
        </Link>
      </div>
      <Button
        onClick={() => router.push("/informations")}
        className={`${shirts.length === 0 && "hidden"}`}
      >
        Checkout
      </Button>
    </div>
  );
};

export default NavBar;
