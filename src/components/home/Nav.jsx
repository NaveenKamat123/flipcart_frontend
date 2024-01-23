import { Box } from '@mui/material'
import React from 'react'
import { navData } from '../../constants/data'



export default function Nav() {
  return (
    <Box className="flex justify-between items-center h-[7rem] w-[90vw]  ml-[4rem]  ">
    {
        navData.map((item)=>{
           return(
            <Box className='flex flex-col md:w-[5rem] items-center  '  key={item.text}>
            <img src={item.url} alt=""   />
            <p className='text-xs font-semibold '>{item.text}</p>
        </Box>
           )
        })
    }
          
    </Box>
    
   
  )
}
