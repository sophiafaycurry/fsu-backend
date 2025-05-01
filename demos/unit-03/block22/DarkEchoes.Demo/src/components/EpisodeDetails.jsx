/** Details about the selected episode */
export default function EpisodeDetails({ selectedEpisode }) {
  if (!selectedEpisode) {
    return (
      <section className="details">
        <h2>Episode Details</h2>
        <p>Select an episode to learn more.</p>
      </section>
    );
  }
  return (
    <section className="details">
      <h2>Episode {selectedEpisode.id}</h2>
      <h3>{selectedEpisode.title}</h3>
      <p>{selectedEpisode.description}</p>
      <button>Watch now</button>
    </section>
  );
}
