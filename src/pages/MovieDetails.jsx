import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import {Star ,PlayFill ,StarFill} from "react-bootstrap-icons";
import { useNavigate, useParams } from 'react-router-dom';

const MovieDetails = () => {
    
    const navigate = useNavigate()
    const {id} = useParams()
    const Id = (id.match(/[0-9]+/))[0];  // convert  :3  to 3 using regex

    const [movie,setMovie] = useState({})
    useEffect(()=>{
        const fetchMovie = async ()=>{
            const response = await axios.get(`http://localhost:3005/movies/${Id}`)
            setMovie(response.data)
        }
        fetchMovie()
    },[])

// make the rate of the movies acording to movie.rating
    let rates = []
    for(var i=0; i<Math.floor(movie.rating); i++) {
        rates.push(<StarFill key={i} className='text-warning m-1'/>)
    }
    for(let j=i+1; j<= 10; j++){
        rates.push(<Star key={j} className='text-warning m-1'/>)
    }

  return (
    <div>
        <div className="container">
            <div className="row justify-content-center my-5 w-75 mx-auto rounded bg-dark text-white">
                    <div className="col-12 col-lg-6 p-0">
                        <div className="movieImg text-start">
                            <img src={movie.image} alt="img" />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                    <div className="movieDetails text-center w-100 py-4">
                        <h2 className='fw-normal'>{movie.movie}</h2>
                        <div className="rating my-4">
                        {rates}
                        </div>
                        <div className="description px-2">
                            <p className='lead mb-5'>{movie.description}</p>
                        </div>
                        <a className ='text-decoration-none' href="https://www.imdb.com/title/tt0111161/"><button className='btn btn-outline-warning'><PlayFill/> watch movie</button></a>
                    </div>
                    <button className='btn btn-light w-100 mb-3' onClick={()=>navigate('/movies')}>Back to Movies</button>
                    </div>
                    
                
            </div>
        </div>
    </div>
  )
}

export default MovieDetails