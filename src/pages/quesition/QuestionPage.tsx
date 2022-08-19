import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { CircularProgress } from "@mui/material";
import { useGetMock } from "@src/hooks";
import { QuestionListContainer } from "@src/containers";

const QuestionPage = () => {
  const { data, isLoading } = useGetMock();
  const [listProps, setListProps] = useState({});
  useEffect(() => {
    if (data) {
      setListProps({
        data: { ...data },
      });
    }
  }, [data]);

  if (isLoading) return <CircularProgress />;

  return (
    <>
      <Helmet>
        <title>Question Page</title>
      </Helmet>
      {data && <QuestionListContainer {...listProps} />}
    </>
  );
};

export default QuestionPage;
