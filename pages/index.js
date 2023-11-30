import HeadInfo from "@/components/HeadInfo";

const Home = ({ posts }) => {
  return (
    <div>
      <HeadInfo />
      <h1>심은서의 심화 스터디 실습 - 심심스실</h1>
      <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_start=0&_end=30`
  );
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};
