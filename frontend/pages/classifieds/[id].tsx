import { NextPageContext, NextPage } from "next";
import { getClassified, Classified } from "../../api";
import { ClassifiedDetail } from "../../components/ClassifiedDetail";

const ClassifiedDetailPage: NextPage<{ classified: Classified }> = ({
  classified
}) => <ClassifiedDetail classified={classified} />;

ClassifiedDetailPage.getInitialProps = async function(
  context: NextPageContext
) {
  const { id } = context.query;
  const classified = await getClassified(id as string);

  return { classified };
};

export default ClassifiedDetailPage;
