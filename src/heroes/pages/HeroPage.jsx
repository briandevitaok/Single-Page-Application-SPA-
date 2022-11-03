import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers/getHeroById";
import { AiOutlineInfoCircle,AiFillSafetyCertificate,AiOutlineVideoCameraAdd} from "react-icons/ai";
import Button from '@mui/material/Button';
import { MeGusta } from "../components/MeGusta";
import { useMemo } from "react";


export const HeroPage = () => {

  const {heroId} = useParams();
  const navigate = useNavigate()

  const hero = useMemo(()=> getHeroById(heroId), [heroId]);

  const onNavigateBack = () => {
      navigate(-1)
  }
  
  if ( !hero ) {
    return <Navigate to='/marvel'/>
  }


  return (
    <>

    <div className="row mt-5 ">
        <div className="col-4">
          <img 
          src={`/assets/heroes/${heroId}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail animate__animated animate__backInLeft"
          />
        </div>

        <div className="col-8">
            <h3>{hero.superhero}</h3>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><AiOutlineInfoCircle/> <b>Alter ego: </b>{hero.alter_ego}</li>
                <li className="list-group-item"><AiFillSafetyCertificate/> <b>Publisher: </b>{hero.publisher}</li>
                <li className="list-group-item"><AiOutlineVideoCameraAdd/> <b>First appaerance: </b>{hero.first_appearance}</li>
            </ul>
            
            <h5 className="mt-3">Characters</h5>
            <p>{hero.characters}</p>

            <MeGusta/>
            <hr />

            <Button
            variant="contained" 
            color="success"
            onClick={onNavigateBack}
            >
              Regresar
            </Button>

        </div>
    </div>

    </>
  )
}
