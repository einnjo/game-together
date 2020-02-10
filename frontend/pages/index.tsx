import { NextPage } from "next";
import { getClassifieds, Classified } from "../api";
import { ClassifiedList } from "../components/ClassifiedList";
import Link from "next/link";

const IndexPage: NextPage<{ classifieds: Classified[] }> = ({
  classifieds
}) => {
  return (
    <div>
      <Link href="/classifieds/new">
        <a>New classified</a>
      </Link>
      <ClassifiedList classifieds={classifieds} />
    </div>
  );
};

IndexPage.getInitialProps = async ({ req }) => {
  const classifieds = await getClassifieds();
  return { classifieds };
};

export default IndexPage;
