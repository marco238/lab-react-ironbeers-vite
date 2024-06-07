import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Ironbeers!</h1>
      <div className="home-links">
        <Link to="/beers">
          <img src="/src/assets/beers.png" alt="All Beers" />
          <h2>All Beers</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque quibusdam, optio sunt perspiciatis voluptate, amet commodi tenetur quisquam animi impedit dolores libero, quod voluptatibus voluptatum culpa numquam molestiae consequuntur alias.</p>
        </Link>
        <Link to="/random-beer">
          <img src="/src/assets/random-beer.png" alt="Random Beer" />
          <h2>Random Beer</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque quibusdam, optio sunt perspiciatis voluptate, amet commodi tenetur quisquam animi impedit dolores libero, quod voluptatibus voluptatum culpa numquam molestiae consequuntur alias.</p>
        </Link>
        <Link to="/new-beer">
          <img src="/src/assets/new-beer.png" alt="New Beer" />
          <h2>New Beer</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque quibusdam, optio sunt perspiciatis voluptate, amet commodi tenetur quisquam animi impedit dolores libero, quod voluptatibus voluptatum culpa numquam molestiae consequuntur alias.</p>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
