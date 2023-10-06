import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";
import HomeIndex from "./home/page";
import Menu from "./components/menuNav/Menu";
export default function Home() {
  return (
    <main>
      <Menu />
      <HomeIndex />
    </main>
  );
}
