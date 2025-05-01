import { useState } from "react";
import EpisodeDetails from "./components/EpisodeDetails";
import EpisodeList from "./components/EpisodeList";

export default function App() {
  const [selectedEpisode, setSelectedEpisode] = useState();

  return (
    <>
      <header>
        <h1>Dark Echoes</h1>
      </header>
      <main>
        <EpisodeList
          selectedEpisode={selectedEpisode}
          setSelectedEpisode={setSelectedEpisode}
        />
        <EpisodeDetails selectedEpisode={selectedEpisode} />
      </main>
    </>
  );
}
