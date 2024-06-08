import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBeer } from "../services/BeerService";

function BeerDetailsPage() {
  const { id } = useParams();
  const [beer, setBeer] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBeer(id)
      .then((beer) => setBeer(beer))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div>
      <h2>Beer Details Page</h2>

      {loading ? <p>Loading...</p> : (
        <div>
          <img src={beer.image_url} onError={(e) => e.target.src = "https://placehold.co/400"} alt={beer.name} />
          <h3>{beer.name}</h3>
          <p>{beer.tagline}</p>
          <p><strong>First Brewed:</strong> {beer.first_brewed}</p>
          <p><strong>Attenuation Level:</strong> {beer.attenuation_level}</p>
          <p>{beer.description}</p>
          <p><strong>Contributed by:</strong> {beer.contributed_by}</p>
          {Object.entries(beer).length === 0 && <p>No data found!! 🥺</p>}
        </div>
      )}
    </div>
  );
}

export default BeerDetailsPage;
