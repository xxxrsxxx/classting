import React from "react";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";
import { fontColor } from "@src/constants";
import { Chart, NoteList } from "@src/components";
import { Stack, Paper, Typography } from "@mui/material";

import { useQuestionStore } from "@src/store/classting/question";
import { useConsumedTime } from "@src/hooks";

const ResultContainer = () => {
  const {
    questionState: { wrongItems, answerCount, questionTotal, wrongCount },
  } = useQuestionStore();

  const { getConsumedTime } = useConsumedTime();
  console.log("wrongItems", wrongItems);
  return (
    <>
      <ContainerLayout>
        <Title>Result Page</Title>
        <Chart data={[answerCount, wrongCount]} />
        <Typography
          variant={"subtitle1"}
          sx={{ padding: "10px", color: "#fff" }}
        >
          ConsumedTime: {getConsumedTime()}
        </Typography>
        <Link to="/">Go Home</Link>

        <Stack direction="row" spacing={2}>
          <Paper sx={{ padding: "5px" }}>total: {questionTotal}</Paper>
          <Paper sx={{ padding: "5px" }}>answer: {answerCount}</Paper>
          <Paper sx={{ padding: "5px" }}>wrong: {wrongCount}</Paper>
        </Stack>

        {wrongItems.length > 0 && (
          <>
            <Title> wrong answer note</Title>
            <NoteList items={wrongItems} />
          </>
        )}
      </ContainerLayout>
    </>
  );
};

const ContainerLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

const Link = styled(RouterLink)`
  color: ${fontColor.basic};
  padding: 14px;
  margin: 20px 0;
  border: 1px solid #fff;
`;

const Title = styled.h2`
  color: ${fontColor.basic};
`;
export default ResultContainer;
