import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const AddNewMovie = () => {
  let {id} = useParams();
  id = id.match(/\d+/)[0]
  
  const navigate = useNavigate()
  const [movie,setMovie] = useState({
    movie:'',
    rating:'',
    description:'',
    image:''
  })
  const handleChange = (e)=>{
    setMovie({...movie,[e.target.name]:e.target.value})
  }
  useEffect(()=>{
    if(id!=='0') {
        axios.get(`http://localhost:3005/movies/${id}`)
        .then(res=>setMovie(res.data))
      }
  },[])
  
  const handleSubmit = (e)=>{
    e.preventDefault()
    if(id==='0') {
      axios.post('http://localhost:3005/movies',movie)
    }else {
      axios.put(`http://localhost:3005/movies/${id}`,movie)
    }
    
    navigate('/movies')

    
  }


  return (
    <div className="container my-5">
        <form action="" className='form-control bg-light p-4' onSubmit={handleSubmit}>
            <input type="text" className='form-control mt-3' placeholder='Enter Movie Name' name='movie'  value={movie.movie} onChange={handleChange}/>
            <input type="text" className='form-control mt-3' placeholder='Enter Movie Rating' name='rating' value={movie.rating} onChange={handleChange}/>
            <textarea className='form-control mt-3' placeholder='Enter Movie description' name='description'  value={movie.description} onChange={handleChange}></textarea>
            <input type="text" className='form-control mt-3' placeholder='Img Url' name='image' value={movie.image} onChange={handleChange}/>
            <input type="submit" value={`${id}`==0?'Add New Movie':'Edit Movie'} className='btn btn-dark mt-5 w-100' />
        </form>
    </div>
  )
}

export default AddNewMovie