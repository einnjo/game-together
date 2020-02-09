import { NextPage } from "next";
import { getClassifieds, Classified } from "../api";
import { ClassifiedList } from "../components/ClassifiedList";

const Index: NextPage<{ classifieds: Classified[] }> = ({ classifieds }) => {
  return (
    <div>
      <ClassifiedList classifieds={classifieds} />
    </div>
  );
};

Index.getInitialProps = async ({ req }) => {
  const classifieds = await getClassifieds();
  return { classifieds };
};

export default Index;
