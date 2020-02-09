import { Classified } from "../api";

type ClassifiedDetailProps = {
  classified: Classified;
};

export const ClassifiedDetail = ({ classified }: ClassifiedDetailProps) => (
  <div>
    <h2>{classified.title}</h2>
    <dl>
      <dt>Game</dt>
      <dd>{classified.game}</dd>

      <dt>Platform</dt>
      <dd>{classified.platform}</dd>

      <dt>Location</dt>
      <dd>{classified.continent}</dd>

      <dt>Created At</dt>
      <dd>{classified.createdAt}</dd>
    </dl>
  </div>
);
