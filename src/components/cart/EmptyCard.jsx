import styled from "@emotion/styled"
import { Box, Typography} from "@mui/material"

const Component=styled(Box)`
height:65vh;
width:80%;
background:#fff;
display:flex;
justify-content:center;
align-items:center;
margin:10px 140px;
border-radius:2px;
box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;



`
const Img=styled("img")`
width:10rem;
min-width:5rem;

`

const Container=styled(Box)`
padding-top:30px;
display:flex;
flex-direction:column;
align-items:center;


`

const SmallText=styled(Typography)`
font-size:14px;
margin:2px;
font-weight:400;
`

export default function EmptyCard() {
    const ImageUrl="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
  return (
   
      <Component>
        <Container>
            <Img src={ImageUrl} alt="empty" />
            <SmallText>Your Cart is Empty!</SmallText>
            <SmallText>Add Items to it now</SmallText>
           
            
        </Container>
      </Component>
  
  )
}
