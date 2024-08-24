import PageWrapper from "@/components/PageWrapper";
import PayementSuccessfulComp from "@/components/success/PayementSuccessfulComp";
import React, { Suspense } from "react";

const page = () => {
  return (
    <PageWrapper className="justify-center">
      <Suspense>
        <PayementSuccessfulComp />
      </Suspense>
    </PageWrapper>
  );
};

export default page;
