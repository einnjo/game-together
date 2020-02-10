import { NextPageContext, NextPage } from "next";
import { getClassified, Classified } from "../../api";
import { ClassifiedDetail } from "../../components/ClassifiedDetail";
import { CommentForm } from "../../components/CommentForm";
import { useRouter } from "next/router";

const ClassifiedDetailPage: NextPage<{ classified: Classified }> = ({
  classified
}) => {
  const router = useRouter();

  return (
    <div>
      <ClassifiedDetail classified={classified} />
      <CommentForm classifiedId={classified.id} router={router} />
    </div>
  );
};

ClassifiedDetailPage.getInitialProps = async function(
  context: NextPageContext
) {
  const { id } = context.query;
  const classified = await getClassified(id as string);

  return { classified };
};

export default ClassifiedDetailPage;
