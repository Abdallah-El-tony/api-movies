import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRightShort , Trash3Fill , PencilSquare } from 'react-bootstrap-icons'
import axios from 'axios';


const MovieCard = (props) => {
   const {id,movie,rating,image} = props.data;
   
   const navigate1 = useNavigate()
   const navigate2 = useNavigate()

   const HandleDeleteMovie = ()=>{
    axios.delete(`http://localhost:3005/movies/${id}`)
    props.deleteMovie(id)
   }
   const handleEditMovie = ()=>{
    navigate2(`/editMovie/:${id}`)

   }

  return (
    <div className="col-md-4 col-lg-3">
            <div className="card text-start mb-4">
            <img src={image} className="card-img-top" alt="img" style={{height:'194px',objectFit:'cover'}}/>
            <div className="card-body">
                <h5 className="card-title">{movie}</h5>
                <span className='d-block mb-2'>Rate: <strong className='text-warning'>{rating}</strong>/10</span>
                <button onClick={()=>navigate1(`/movieDeatails/:${id}`)}className='btn btn-outline-primary py-1 mb-3'>read more <ArrowRightShort/></button>
                <div className='d-flex' >
                    <button onClick={HandleDeleteMovie} className='btn btn-danger py-2'><Trash3Fill className='text-light fs-5'/></button>
                    <button className='btn btn-info ms-3 py-2'><PencilSquare className='fs-5' onClick={handleEditMovie}/></button>
                </div>
            </div>
            </div>
    </div>
  )
}

export default MovieCard