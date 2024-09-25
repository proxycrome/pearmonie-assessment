import { render, screen } from "../../test-utils";
import Users from "./";


test('displays loading message before Dashboard Users loads', () => {
  render(<Users />);

  // Assert that the loading message is displayed first
  expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
});


