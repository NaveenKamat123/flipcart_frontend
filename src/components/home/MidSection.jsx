import {  Grid } from "@mui/material";

import styled from "@emotion/styled";
import { imageURL } from "../../constants/data";

const Wrapper=styled(Grid)`
margin:10px 0;
justify-content:space-between;
`


export default function MidSection() {
   
  return (
    <>
    <Wrapper container lg={12} sm={12} md={12} xs={2}  >
 
    {
      imageURL.map(image=>{
          return(
              <Grid item  md={4} sm={12} xs={12} key={image}>
              <img src={image} alt="" style={{width:"100%"}} />
              </Grid>
          )
      })
     }

    
  </Wrapper>

    </>
  )
}
