import Nav from "./components/Nav";
import layoutStyles from "./styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main className={layoutStyles.main}>{children}</main>
    </>
  );
};

export default Layout;
