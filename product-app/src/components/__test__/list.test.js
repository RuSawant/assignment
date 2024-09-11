import React from "react";
import { render, screen } from "@testing-library/react";
import { Main } from "../main/Main";
import "@testing-library/jest-dom/extend-expect";
test("should accept n number of cards", () => {
  const recordsPerPage = 13;
  render(<Main recordsPerPage={recordsPerPage} />);
  const element = screen.getAllByTestId("prod");
  expect(element.length).toBe(recordsPerPage);
});
