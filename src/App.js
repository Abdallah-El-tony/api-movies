import './App.css';
import { Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import {Home , Movies , MovieDetails ,AddNewMovie , NotFound } from './pages';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/addNewMovie/:id' element={<AddNewMovie/>}/>
        <Route path='/editMovie/:id' element={<AddNewMovie/>}/>
        <Route path='/movieDeatails/:id' element={<MovieDetails/>}/>
        <Route path='*'element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
