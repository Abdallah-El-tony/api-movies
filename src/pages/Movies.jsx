import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'
import axios from 'axios'

const Movies = () => {
    const [movies,setMovies]=useState([])
    useEffect(()=>{
        const URL = 'http://localhost:3005/movies'
        const fetchData = async()=>{
           const responce = await axios.get(URL)
           setMovies(responce.data)
        }
        fetchData()
    },[])

    const deleteMovie =(id)=>{
        const newData = movies.filter(movie=>movie.id!==id)
        setMovies(newData)
    }
  return (
    <div className="container my-5">
        <div className="row">
            {movies.map(movie=>{
                return  <MovieCard key={movie.id} data={movie} deleteMovie={deleteMovie}/>
            })}
        </div>
    </div>
  )
}

export default Movies