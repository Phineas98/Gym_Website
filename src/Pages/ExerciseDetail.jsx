import React , {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import {exerciseOptions, fetchData} from "../utils/FetchData";
import Details from '../components/Details';
 
const ExerciseDetail = () => {
    const [exerciseDetail,setExerciseDetail] = useState({});
    const {id} = useParams();
   
    useEffect(()=>{
      const ExerciseData = async()=>{
        const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
        const youtubeUrl = 'https://youtube-search-and-download.p.rapidapi.com'
        const ExerciseFetch = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exerciseOptions);

        setExerciseDetail(ExerciseFetch);
      }
      ExerciseData();
    },[id])

  
  return (
     <Box>
        <Details exerciseDetail={exerciseDetail}/>
        {/* <ExerciseVideos/>
        <SimilarExercises/> */}
     </Box>
  )
}

export default ExerciseDetail