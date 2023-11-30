import HeadInfo from "@/components/HeadInfo";

const Home = ({ posts }) => {
  return (
    <div>
      <HeadInfo />
      <h1>심은서의 심화 스터디 실습 - 심심스실</h1>
      <ul>
        <li>title1</li>
        <li>title2</li>
      </ul>
    </div>
  );
};

export default Home;
