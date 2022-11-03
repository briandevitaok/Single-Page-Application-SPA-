import { useState } from "react"
import Button from '@mui/material/Button';
import {AiFillLike,AiFillDislike} from "react-icons/ai";


export const MeGusta = () => {

    const [like, setLike] = useState(0)
    const [dislike, setDislike] = useState(0)

  

  return (
    <>
    <Button variant="contained" onClick={()=> setLike(like+1)} className="m-2"><AiFillLike/>{like}</Button>
    <Button variant="contained" onClick={()=> setDislike(like+1)}><AiFillDislike/>{dislike}</Button>
    </>
  )
}
