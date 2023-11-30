import Head from "next/head";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/photos">Photos</Link>
        </li>
      </ul>
      <Head>
        <title>My blog</title>
        <meta keyword="My blog by Next JS" />
        <meta contents="My blog by Next JS" />
      </Head>
      <h1>Welcome to My Blog</h1>
    </div>
  );
};

export default Home;
