import React from "react";
import styled from "styled-components";
import { QuestionListProps, ItemProps } from "@src/type";
import { Box, List, ListItemButton } from "@mui/material";

export const role = {
  questionList: "question-list",
};

const QuestionList = ({
  items,
  selectedHandler,
  status,
}: QuestionListProps) => {
  return (
    <>
      <Box sx={{ width: "100%", paddingBottom: "30px" }}>
        <List dense sx={{ width: "100%", backgroundColor: "#fff" }}>
          {items &&
            items.map((e: ItemProps, i: number) => (
              <ListItemButton
                key={`q-list-${i}`}
                role={role.questionList}
                sx={{ padding: "10px" }}
                onClick={() => selectedHandler(e)}
                disabled={status.selected}
              >
                <StyledListItem>
                  <div>{e.content}</div>
                  {status.selected && (
                    <div>{e.value ? "answer " : "wrong"}</div>
                  )}
                </StyledListItem>
              </ListItemButton>
            ))}
        </List>
      </Box>
    </>
  );
};

const StyledListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export default QuestionList;
