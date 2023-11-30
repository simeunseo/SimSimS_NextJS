import Head from "next/head";

const HeadInfo = ({ title, keyword, contents }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta keyword={keyword} />
      <meta contents={contents} />
    </Head>
  );
};

HeadInfo.defaultProps = {
  title: "심은서의 심화 스터디 실습 - 심심스실",
  keyword: "SimSimS powered by next js",
  content: "SimSims next js",
};

export default HeadInfo;
