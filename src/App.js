import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import { HomePage } from "./Component/Home.page";
import { SuperHeroesPage } from "./Component/SuperHeroes.page";
import RQSuperHeroesPage from "./Component/RQSuperHeroes.page";
import { RQSuperHeroPage } from "./Component/RQSuperHero.page";
import { ParallelQueriespage } from "./Component/ParallelQueries.page";
import { DynamicParallelPage } from "./Component/DynamicParallel.page";
import { DependentQueriesPage } from "./Component/DependentQueries.page";
import Pagination from "./Component/Pagination";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/rq-super-heroes/:heroId"
            element={<RQSuperHeroPage />}
          />

          <Route path="/super-heroes" element={<SuperHeroesPage />} />

          <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />

          <Route path="/rq-parallel" element={<ParallelQueriespage />} />

          <Route path="/page" element={<Pagination />} />

          <Route
            path="/DynamicParallelPage"
            element={<DynamicParallelPage heroIds={[1, 3]} />}
          />

          <Route
            path="/rq-dependent"
            element={<DependentQueriesPage email="vishwas@example.com" />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
