import { Classified } from "../api";

type ClassifiedListProps = {
  classifieds: Classified[];
};

export const ClassifiedList = ({ classifieds }: ClassifiedListProps) => {
  const classifiedsView = classifieds.map((classified: Classified) => (
    <div>
      <a>{classified.title}</a>
      <br />
      <span>
        {classified.platform} | {classified.game} | {classified.continent}
      </span>
    </div>
  ));

  return <div>{classifiedsView}</div>;
};
