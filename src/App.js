import './App.css';
import { Routes,Route } from "react-router-dom";
import {Box} from "@mui/material";
import HomePage from "./Pages/HomPage";
import Exercise from "./Pages/Exercise"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ExerciseDetail from './Pages/ExerciseDetail';

function App() {
  return (
<Box width="400px" sx={{ width:{xl:"1488px"}}} m="auto">
  <Navbar/>
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/exercise/:id' element={<ExerciseDetail/>}/>
  </Routes>
  <Footer/>
</Box>
  );
}

export default App;
