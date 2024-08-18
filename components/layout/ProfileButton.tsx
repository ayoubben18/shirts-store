"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";

const ProfileButton = () => {
  const { push } = useRouter();
  return (
    <Button
      variant="link"
      className="text-xl text-black dark:text-white"
      onClick={() => push(`/profile`)}
    >
      Profile
    </Button>
  );
};

export default ProfileButton;
