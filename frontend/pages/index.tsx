import { NextPage } from "next";

const Index: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <h1>Hello world! - user agent: {userAgent}</h1>
);

Index.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] || "" : navigator.userAgent;
  return { userAgent };
};

export default Index;
