import StateSale from "./components/StateSale";
import { FilterProvider } from "./components/contextFiltersData";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";
import HomeIndex from "./components/HomeIndex";
export default function Home() {
  return (
    <main>
      <HomeIndex />
      <FilterProvider>
        <StateSale />
      </FilterProvider>
    </main>
  );
}
