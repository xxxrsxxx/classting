import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import NoteList, { role } from "./NoteList";

describe("Note List Ui Test", () => {
  let dummy = [
    {
      index: 1,
      content: "Jean Harlow",
      value: false,
      answer: "Fay Wray",
      question:
        "Who played the female lead in the 1933 film &quot;King Kong&quot;?",
    },
    {
      index: 2,
      content: "Automated Database",
      value: false,
      answer: "Active Directory",
      question:
        "What does AD stand for in relation to Windows Operating Systems? ",
    },
    {
      index: 1,
      content: "Hephaestus",
      value: false,
      answer: "Dionysus",
      question: "In Greek mythology, who is the god of wine?",
    },
  ];
  it("list items length check", async () => {
    render(<NoteList items={dummy} />);
    const listItem = await screen.findAllByRole(role.noteList);
    expect(listItem).toHaveLength(dummy.length);
  });
});
