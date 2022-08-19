import React from "react";
import { Helmet } from "react-helmet";
import { ResultContainer } from "@src/containers";
const ResultPage = () => {
  return (
    <>
      <Helmet>
        <title>Result Page</title>
      </Helmet>
      <ResultContainer />
    </>
  );
};

export default ResultPage;
