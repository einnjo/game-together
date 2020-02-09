import { Classified } from "../api";
import Link from "next/link";

type ClassifiedListProps = {
  classifieds: Classified[];
};

export const ClassifiedList = ({ classifieds }: ClassifiedListProps) => {
  const classifiedsView = classifieds.map((classified: Classified) => (
    <div>
      <Link href="/classifieds/[id]" as={`/classifieds/${classified.id}`}>
        <a>{classified.title}</a>
      </Link>
      <br />
      <span>
        {classified.platform} | {classified.game} | {classified.continent}
      </span>
    </div>
  ));

  return <div>{classifiedsView}</div>;
};
