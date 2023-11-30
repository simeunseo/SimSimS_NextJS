import Nav from "./components/Nav";
import layoutStyles from "./styles/Layout.module.css";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <Nav />
        <main className={layoutStyles.main}>{children}</main>
      </body>
    </html>
  );
}
