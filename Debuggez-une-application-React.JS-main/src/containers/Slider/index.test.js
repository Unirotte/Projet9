import { render, screen, within, act } from "@testing-library/react";
import Slider from "./index";
import userEvent from "@testing-library/user-event";
import { api, DataProvider } from "../../contexts/DataContext";

const data = {
  focus: [
    {
      id: "1",
      title: "World economic forum",
      description:
        "Oeuvre à la coopération entre le secteur public et le privé.",
      date: "2022-02-28T20:28:45.744Z",
      cover: "/images/evangeline-shaw-nwLTVwb7DbU-unsplash1.png",
    },
    {
      id: "2",
      title: "World Gaming Day",
      description: "Evenement mondial autour du gaming",
      date: "2022-03-29T20:28:45.744Z",
      cover: "/images/evangeline-shaw-nwLTVwb7DbU-unsplash1.png",
    },
    {
      id: "3",
      title: "World Farming Day",
      description: "Evenement mondial autour de la ferme",
      date: "2022-01-29T20:28:45.744Z",
      cover: "/images/evangeline-shaw-nwLTVwb7DbU-unsplash1.png",
    },
  ],
};
function renderSlider() {
  api.loadData = jest.fn().mockReturnValue(data);
  return render(
    <DataProvider>
      <Slider />
    </DataProvider>
  );
}

describe("Slider - affiche initial", () => {
  it("Affiche en premier l'évenement le plus récent", async () => {
    renderSlider();

    const heading = await screen.findByRole("heading", {
      name: "World Gaming Day",
    });
    expect(heading).toBeInTheDocument();
  });
});
