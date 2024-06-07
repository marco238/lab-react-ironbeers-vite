import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AllBeersPage from './pages/AllBeersPage';
import Navbar from "./components/Navbar";
import BeerDetailsPage from "./pages/BeerDetailsPage";
import RandomBeersPage from "./pages/RandomBeerPage";
import AddBeerPage from './pages/AddBeerPage';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <h1>LAB | React IronBeers</h1>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/beers" element={<AllBeersPage />} />
          <Route path="/random-beer" element={<RandomBeersPage />} />
          <Route path="/new-beer" element={<AddBeerPage />} />
          <Route path="/:id" element={<BeerDetailsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
