import Shirts from "@/components/Shirts";
import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  return <Shirts id={params.id} />;
};

export default page;
