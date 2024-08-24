import { HomeIcon } from "lucide-react";
import Link from "next/link";

const NavBar = async () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex h-20 items-center justify-between">
        <Link href={`/`} className="text-3xl font-black">
          <HomeIcon className="h-8 w-8" />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
