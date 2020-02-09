import { NextPage } from "next";
import { getClassifieds, Classified } from "../api";
import { ClassifiedList } from "../components/ClassifiedList";

const IndexPage: NextPage<{ classifieds: Classified[] }> = ({
  classifieds
}) => {
  return (
    <div>
      <ClassifiedList classifieds={classifieds} />
    </div>
  );
};

IndexPage.getInitialProps = async ({ req }) => {
  const classifieds = await getClassifieds();
  return { classifieds };
};

export default IndexPage;
