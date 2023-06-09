import React from 'react'
import {Stack} from "@mui/material"
import {Link} from "react-router-dom"
import Logo from '../asset/logo.png';


const Navbar = () => {
  return (
    <Stack 
     direction="row"
     justifyContent="space-around"
     sx={{ gap:{ sm:"132px",xs:"40px"},mt:{sm:"32px",xs:"20px"},
     justifyContent:"none",
     px:"20px"
    }}
   
    >
     <Link to="/">
      <img src={Logo} alt="Gym_Logo_Image" style={{ width:"96px",height:"96px",margin:"0 20px"}}/>
     </Link>
     <Stack direction="row"
     gap="40px"
     fontSize="24px"
     alignItems="flex-end"
     >
      <Link to="/" style={{ textDecoration:"none",color:"#3A1212",borderBottom:"2px solid #FF2625"}}>Home</Link>
      {/* <a href='/exercises' style={{ textDecoration:"none",color:"#3A1212"}}>Exercises</a> */}
     </Stack>
    </Stack>
  )
}

export default Navbar