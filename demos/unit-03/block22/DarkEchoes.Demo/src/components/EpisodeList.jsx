/** A list of episode names that allows the user to select an episode */
import { useState } from "react";
import { episodeList } from "../data";

export default function EpisodeList({ selectedEpisode, setSelectedEpisode }) {
  const [episodes] = useState(episodeList);
  return (
    <section className="episodes">
      <h2>Episodes</h2>
      <ol>
        {episodes.map((episode) => (
          <li
            key={episode.id}
            onClick={() => setSelectedEpisode(episode)}
            className={selectedEpisode?.id === episode.id ? "selected" : ""}
          >
            {episode.title}
          </li>
        ))}
      </ol>
    </section>
  );
}
