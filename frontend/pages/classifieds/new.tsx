import { NextPage } from "next";
import { ClassifiedForm } from "../../components/ClassifiedForm";
import { useRouter } from "next/router";

const NewClassifiedPage: NextPage<{}> = () => {
  const router = useRouter();
  return (
    <div>
      <ClassifiedForm router={router} />
    </div>
  );
};

export default NewClassifiedPage;
