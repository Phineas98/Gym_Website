import React from 'react'
import {Box,Typography,Stack, Button} from "@mui/material" 
import { Link } from 'react-router-dom'

const ExerciseCard = ({exercises}) => {
  
  return (
    <Link className='exercise-card' to={`/exercise/${exercises.id}`}>
        <img src={exercises.gifUrl} alt={exercises.name} loading='lazy'/>
        <Stack direction="row">
        <Button sx={{
            ml:'21px', color:'#fff',background:'#ffa9a9',fontSize:'14px',borderRadius:'20px',textTransform:'capitalize'
        }}>
         {exercises.bodyPart}
        </Button>
        <Button sx={{
            ml:'21px', color:'#fff',background:'#fcc757',fontSize:'14px',borderRadius:'20px',textTransform:'capitalize'
        }}>
         {exercises.target}
        </Button>
        </Stack>
        <Typography 
        ml="21px" color="#000" fontWeight="bold" mt='21px' pb="10px" textTransform="capitalize"
        >
            {exercises.name}
        </Typography>
    </Link>
  )
}


export default ExerciseCard