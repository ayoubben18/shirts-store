"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BasketShirts from "./BasketShirts";
import Image from "next/image";

const NavBar = () => {
  const pathname = usePathname();

  const inCheckout =
    pathname.startsWith("/checkout") || pathname.startsWith("/success");

  return (
    <div className={`container mx-auto flex items-center justify-between px-4`}>
      <div className="flex h-20 items-center justify-between">
        <Link href={`/`}>
          <Image
            src={"/logo.png"}
            alt="logo"
            width={100}
            height={100}
            className={`${inCheckout && "hidden"} w-full`}
          />
        </Link>
      </div>
      <BasketShirts />
    </div>
  );
};

export default NavBar;
