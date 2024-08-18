"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "lucide-react";

const LoginButton = () => {
  const { push } = useRouter();
  return (
    <Button
      variant="expandIcon"
      Icon={ArrowRightIcon}
      iconPlacement="right"
      onClick={() => push(`/login`)}
    >
      Login
    </Button>
  );
};

export default LoginButton;
