import React, { memo, useEffect } from "react";
import styled from "styled-components";
import { Button, Typography } from "@mui/material";
import moment from "moment";
import { QuestionItemProps } from "@src/type";
import { fontColor } from "@src/constants";
import { useQuestion } from "@src/hooks";
import { useQuestionStore } from "@src/store/classting/question";
import QuestionList from "@src/components/QuestionList";

const QuestionListContainer = ({ items }: { items: QuestionItemProps[] }) => {
  const { setTimeAction } = useQuestionStore();
  const { step, status, question, selectedHandler, nextQuestionHandler } =
    useQuestion(items);

  useEffect(() => {
    setTimeAction({ type: "start", time: moment() });
  }, [setTimeAction]);

  return (
    <ContainerLayout>
      {question && (
        <>
          <section>
            <Title>STEP {step + 1}</Title>
            <Description>{question.question}</Description>
            <DifficultyMeassge>
              difficulty {question.difficulty}
            </DifficultyMeassge>
          </section>
          <section>
            {status.selected && (
              <ResultBox>
                <Typography color="primary">{status.result}</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={nextQuestionHandler}
                >
                  next
                </Button>
              </ResultBox>
            )}
            <QuestionList
              items={question.answerItems}
              status={status}
              selectedHandler={selectedHandler}
            />
          </section>
        </>
      )}
    </ContainerLayout>
  );
};

const ContainerLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 100%;
`;

const Title = styled.h2`
  color: ${fontColor.basic};
`;
const Description = styled.p`
  font-size: 20px;
  color: ${fontColor.basic};
  font-weight: bold;
`;
const DifficultyMeassge = styled.p`
  color: #ffffff;
  font-weight: bold;
`;

const ResultBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export default memo(QuestionListContainer);
