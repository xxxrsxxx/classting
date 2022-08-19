import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NotFound, { role } from "./NotFound";
import { BrowserRouter as Router } from "react-router-dom";

describe("NotFound Ui Test", () => {
  it("back button check", () => {
    render(
      <Router>
        <NotFound />
      </Router>
    );
    let back = screen.getByRole(role.redirectAction);
    expect(back.textContent).toBe("Go Home");
    userEvent.click(back);
  });
});
