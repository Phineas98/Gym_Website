import React, { useEffect, useState } from 'react'
import {Stack,Box,Typography, Pagination} from "@mui/material"
import { exerciseOptions,fetchData } from '../utils/FetchData'
import ExerciseCard from '../components/ExerciseCard'

const Exercise = ({ exercises,setExercises,bodyPart }) => {
 const [ currentPage,setCurrentPage ] = useState(1);
 const exercisesPerPage = 9;
 const indexOfLastExercise = currentPage * exercisesPerPage;
 const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
 const currentExercises = exercises.slice
 (indexOfFirstExercise,indexOfLastExercise);

 const paginate = (e,value) => {
  setCurrentPage(value);
  window.scrollTo({ top: 1800, behavior:'smooth'})
 };

 useEffect(()=>{
  const fetchExerciseData = async()=>{
    let exerciseData = [];
    if(bodyPart === 'all'){
      exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
    }else{
      exerciseData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
        exerciseOptions
      );
    }
    setExercises(exerciseData);
  };
  fetchExerciseData();
 },[bodyPart])

  return (
    <Box 
     id="exercises"
     sx={{ mt:{lg:"110px"}}}
     mt="50px"
     p="20px"
    >
   <Typography variant='h6' mb="46px">
   Showing Results : {exercises.length}
   </Typography>
   <Stack direction="row" sx={{ gap:{ lg: '110px',xs:"50px"}}}
   flexWrap="wrap"
   justifyContent="center"
   >
   {currentExercises.map((exercises,index) => (
   <ExerciseCard key={index} exercises={exercises}/>
   ))}
   </Stack>
   <Stack mt="100px" alignItems="center">
   {exercises.length > 9 && (
    <Pagination 
    color='standard'
    shape="rounded"
    defaultPage={1}
    count={Math.ceil(exercises.length / exercisesPerPage)}
    page={currentPage}
    onChange={paginate}
    size='large'
    />
   )}
   </Stack>
    </Box>
  )
}

export default Exercise