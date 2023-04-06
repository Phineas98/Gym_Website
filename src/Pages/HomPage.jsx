import React, { useState } from 'react'
import HeroBanner from '../components/HeroBanner'
import SearchExercise from "../components/SearchExercise"
import ListExercise from "../components/ListExercise"
import { Box } from '@mui/material'
import gym from "../asset/gym.jpg";
import Exercise from './Exercise'
 
const HomPage = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart,setBodyPart] = useState('all');

  return (
   <>
   <HeroBanner/>
   <SearchExercise 
    setExercises={setExercises}
    bodyPart={bodyPart}
    setBodyPart={setBodyPart}
   />
   <Exercise
     setExercises={setExercises}
     bodyPart={bodyPart}
     exercises={exercises}
   />
   </>
  )
}

export default HomPage