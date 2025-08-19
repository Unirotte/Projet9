import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import Form from "./index";

afterEach(cleanup);

describe("When Form is created", () => {
  it("a list of form fields is displayed", async () => {
    render(<Form />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personnel / Entreprise"); 
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success action is called", async () => {
      const onSuccess = jest.fn();
      render(<Form onSuccess={onSuccess} />);
      fireEvent.click(await screen.findByTestId("button-test-id"));
      await screen.findByText("En cours");
      await screen.findByText("Envoyer");
      expect(onSuccess).toHaveBeenCalled();
    });
  });
});