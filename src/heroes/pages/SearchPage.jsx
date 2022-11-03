import { Button } from "@mui/material"
import { useLocation, useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components"
import queryString from 'query-string'
import { getHeroByName } from "../helpers"

export const SearchPage = () => {


  const navigate = useNavigate();
  const location = useLocation();

  const {q = ''}  = queryString.parse(location.search)
  const heroes = getHeroByName(q);


  const showSearch =  (q.length === 0)
  const showError =  (q.length > 0) && heroes.length === 0;


  const {searchText, onInputChange} = useForm({
    searchText: q
  })

  const onSubmitChange = (e) => {
      e.preventDefault()
      if ( searchText.trim() <= 1) return;
      
      navigate(`?q=${searchText}`)

  }


  return (
    <>
    <h1>Search</h1>
    <hr />

    <div className="row">
    <div className="col-5">
      <h4>Searching</h4>
      <hr />

      <form onSubmit={onSubmitChange}>
      < input

      type="text"
      placeholder="Search a hero.."
      className="form-control"
      name="searchText"
      autoComplete="off"
      value={searchText}
      onChange={onInputChange}
      />


      <Button
      variant="contained" 
      color="success"
      className="mt-3"
      >
        Search
      </Button>
      </form>
    </div>


    <div className="col-7">
      <h4>Results</h4>

      <div className="alert alert-primary" style={{ display: showSearch ? '':'none'}}>
        <b>Search a heroes...</b>
      </div>

      <div className="alert alert-danger" style={{ display : showError ? '': 'none'}}>
        No hero with <b>{q}</b>
      </div>
        {
          heroes.map( hero => (
                <HeroCard key={hero.id} {...hero} />
          ))
        }
       
      </div>
    
    </div>

    
    </>
  )
}
