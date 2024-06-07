import { useEffect, useState } from "react";
import { getAllBeers } from "../services/BeerService";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getAllBeers(search)
      .then((beers) => setBeers(beers))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [search]);

  return (
    <div>
      <h2>All Beers</h2>

      <label htmlFor="search" style={{marginRight: "20px"}}>Search</label>
      <input className="search-bar" type="text" value={search} onChange={(event) => setSearch(event.target.value)} />

      {loading ? <p>Loading...</p> : (
        <ul>
          {beers.map((beer) => (
            <li key={beer._id}>
              <img src={beer.image_url} onError={(e) => e.target.src = "https://placehold.co/400"} alt={beer.name} />
              <h3>{beer.name}</h3>
              <p>{beer.tagline}</p>
              <p><strong>Contributed by:</strong> {beer.contributed_by}</p>
              <Link to={`/${beer._id}`}>Details</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AllBeersPage;
