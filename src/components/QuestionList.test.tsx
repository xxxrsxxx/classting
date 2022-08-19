import "@testing-library/jest-dom";
import { ItemProps } from "@src/type";
import { render, screen } from "@testing-library/react";
import QuestionList, { role } from "./QuestionList";

const dummy = {
  items: [
    {
      index: 0,
      content: "Badger",
      value: true,
      answer: "Badger",
      question:
        "In the Beatrix Potter books, what type of animal is Tommy Brock?",
    },
    {
      index: 1,
      content: "Fox",
      value: false,
      answer: "Badger",
      question:
        "In the Beatrix Potter books, what type of animal is Tommy Brock?",
    },
    {
      index: 2,
      content: "Frog",
      value: false,
      answer: "Badger",
      question:
        "In the Beatrix Potter books, what type of animal is Tommy Brock?",
    },
    {
      index: 3,
      content: "Rabbit",
      value: false,
      answer: "Badger",
      question:
        "In the Beatrix Potter books, what type of animal is Tommy Brock?",
    },
  ],
  selectedHandler: (e: ItemProps) => {},
  status: {
    selected: false,
    result: "",
    answerCount: 0,
    wrongItems: [],
  },
};

describe("Question List Ui Test", () => {
  it("list items length check", async () => {
    render(
      <QuestionList
        items={dummy.items}
        status={dummy.status}
        selectedHandler={dummy.selectedHandler}
      />
    );
    const listItemButton = await screen.findAllByRole(role.questionList);
    expect(listItemButton).toHaveLength(dummy.items.length);
  });
});
