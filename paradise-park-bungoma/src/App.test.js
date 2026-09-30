import { render, screen } from "@testing-library/react";
import App from "./App";

test("shows the correct WhatsApp and email contact details", () => {
  window.history.pushState({}, "", "/contact");

  render(<App />);

  expect(screen.getAllByText(/\+254 116 349 931/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/wekesaedgar3@gmail.com/i).length).toBeGreaterThan(
    0,
  );
});
