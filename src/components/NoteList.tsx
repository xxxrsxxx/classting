import React from "react";
import styled from "styled-components";
import { List, ListItemButton as MuiListItem } from "@mui/material";
import { ItemProps } from "@src/type";
import { fontColor } from "@src/constants";

interface Props {
  items: Array<ItemProps>;
}

export const role = {
  noteList: "note-list",
};

const NoteList = ({ items }: Props) => {
  return (
    <>
      <List
        dense
        sx={{
          padding: "20px 0",
          marginBottom: "10px",
        }}
      >
        {items.length &&
          items.map((e: ItemProps, i: number) => (
            <ListItem
              role={role.noteList}
              key={`n-list-${i}`}
              sx={{
                background: "#383e4e",
              }}
            >
              <Title> {e.question}</Title>
              <Description color="#ccc">answer: {e.answer}</Description>
              <Description color="#ccc">submit: {e.content}</Description>
            </ListItem>
          ))}
      </List>
    </>
  );
};
const ListItem = styled(MuiListItem)`
  background: #282c34;
  flex-direction: column;
  align-items: start;
  padding: 20px;
`;

const Title = styled.h3`
  color: ${fontColor.basic};
`;
const Description = styled.p`
  color: ${(props) => `${props.color}`};
`;

export default NoteList;
