import { useEffect, useState } from "react";
import { getRandomBeer } from "../services/BeerService";

function RandomBeersPage() {
  const [beer, setBeer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRandomBeer()
      .then((beer) => setBeer(beer))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="random-beer">
      <h2>Random Beers</h2>

      {loading ? <p>Loading...</p> : (
        <div>
          <img src={beer.image_url} onError={(e) => e.target.src = "https://placehold.co/400"} alt={beer.name} />
          <h3>{beer.name}</h3>
          <p>{beer.tagline}</p>
          <p><strong>First Brewed:</strong> {beer.first_brewed}</p>
          <p><strong>Attenuation Level:</strong> {beer.attenuation_level}</p>
          <p>{beer.description}</p>
          <p><strong>Contributed by:</strong> {beer.contributed_by}</p>
        </div>
      )}
    </div>
  );
}

export default RandomBeersPage;
