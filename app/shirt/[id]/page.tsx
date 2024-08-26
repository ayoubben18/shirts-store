"use client";
import { ShirtsCard } from "@/components/landing-page/PaginatedCards";
import PageWrapper from "@/components/PageWrapper";
import { shirts } from "@/constants/shirts";
import { notFound } from "next/navigation";
function page({ params }: { params: { id: string } }) {
  const shirt = shirts.find((shirt) => shirt.id === parseInt(params.id));
  if (!shirt) return notFound();
  return (
    <PageWrapper>
      <ShirtsCard {...shirt} />
    </PageWrapper>
  );
}

export default page;
