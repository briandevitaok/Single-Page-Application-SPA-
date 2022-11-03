import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import 'animate.css';




export const HeroCard = ({id,superhero, publisher, alter_ego,first_appearance,characters}) => {

    const heroImageUrl = `/assets/heroes/${id}.jpg`;

  return (
    <>
<div className="row row-cols-2 g-3">
  <div className="col">
    <div className="card">
      <img src={heroImageUrl} className="card-img-top animate__animated animate__backInLeft"
        alt="Hollywood Sign on The Hill" />
      <div className="card-body">

          <h5 className="card-title">{superhero}</h5>
          <p className="card-text">{alter_ego}</p>
          {
            (alter_ego !== characters) && (<p>{characters}</p>)
          }
          <p className="card-text">
            <small className="text-muted">{first_appearance}</small>
          </p>

          <Link to={`/hero/${id}`}>
            <Button variant="contained">
              More info
            </Button>
          </Link>
      </div>
    </div>
  </div>
  </div>

  </>
  )
}
