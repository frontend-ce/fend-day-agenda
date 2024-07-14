import { render } from "@testing-library/react";
import { RattingButton } from "./RattingButton";

test("renders RattingButton", () => {
  const { getByText } = render(<RattingButton label="Avaliar Palestra" />);
  const element = getByText(/Avaliar Palestra/i);
  expect(element).toBeInTheDocument();
});
