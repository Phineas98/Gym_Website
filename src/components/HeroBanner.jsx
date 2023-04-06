import React from 'react'
import {Box, Typography,Button} from "@mui/material"
import Typed from "react-typed"
import BannerImg from "../asset/banner.png"

const HeroBanner = () => {
 
  return (
   <Box
   
    sx={{
        mt:{lg:"220px",xs:"70px"},
        ml:{sm:"50px"}
    }}
    position="relative"
    p="20px"
   >
     <Typography fontSize="26px" fontWeight="600" color="#FF2625">
        Gym_Freaks
     </Typography>
     <Typography fontWeight={700}
     sx={{ fontSize: {lg:"44px",xs:"40px"}}}
     mb="23px" mt="30px"
     >
    <Typed 
    strings={[
        "Eat, Sleep Conquer Repeat",
        "It's time to get Stronger"
    ]}
    typeSpeed={150}
    backSpeed={150}
    loop
    />
     </Typography>
     <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the most effective exercises
     </Typography>
     <Button variant="contained"
      href="#exercises"
      color="error"
      sx={{backgroundColor:"#ff2625"}}
     >
     Explore Exercises
     </Button>
     <Typography
     fontWeight={600}
     color="#ff2625"
     sx={{
        opacity:0.1,
        display:{ lg: 'block', xs:"none"}
     }}
     fontSize="200px"
     >
        Exercise
     </Typography>
   
     <img src={BannerImg} alt="bannerImg" className='hero-banner-img'/>

 
   </Box>
  )
}

export default HeroBanner