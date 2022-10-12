import React from "react";
import { Helmet } from "react-helmet";
import { CircularProgress } from "@mui/material";
import { useGetMock } from "@src/hooks";
import { QuestionListContainer } from "@src/containers";

const QuestionPage = () => {
  const { data, isLoading } = useGetMock();
  if (isLoading) return <CircularProgress />;
  return (
    <>
      <Helmet>
        <title>Question Page</title>
      </Helmet>
      {data && <QuestionListContainer {...data} />}
    </>
  );
};

export default QuestionPage;
