import { getUser } from "@/db/data/users-data";
import { createClient } from "@/utils/supabase/server";
import { HomeIcon } from "lucide-react";
import Link from "next/link";
import ProfileButton from "./ProfileButton";
import LoginButton from "./LoginButton";

const NavBar = async () => {
  const supabase = createClient();
  const user = await getUser(supabase);
  return (
    <div className="container mx-auto px-4">
      <div className="flex h-20 items-center justify-between">
        <Link href={`/`} className="text-3xl font-black">
          <HomeIcon className="h-8 w-8" />
        </Link>
        {user ? <ProfileButton /> : <LoginButton />}
      </div>
    </div>
  );
};

export default NavBar;
