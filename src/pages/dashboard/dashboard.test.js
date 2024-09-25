import { render, screen } from "../../test-utils";
import Dashboard from "./";

test('displays Users after lazy loading', async () => {
    
    render(<Dashboard />);
  
    // Wait for the lazy-loaded component to appear
    const helloText = await screen.findBytext('Hello Evano,');
    expect(helloText).toBeInTheDocument();
  });