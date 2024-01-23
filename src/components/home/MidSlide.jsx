import { Box } from "@mui/material"
import Slide from "./Slide"
import styled from "@emotion/styled";
const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

const Component=styled(Box)`
display:flex;
`
const LeftBox=styled(Box)`
width:83%;
`
const RightBox=styled(Box)`
background-Color:#ffffff;
padding:3px;
margin-left:10px;
margin-top:10px;
width:17%;
text-align:center;

`



export default function MidSlide({ productsData ,title ,timer}) {
  return (
    <Component >
        <LeftBox>
        <Slide productsData={productsData} title={title} timer={timer} />
            
        </LeftBox>
        <RightBox>
            <img src={adURL} alt="" style={{width:"217",height:"100%",objectFit:"contain"}}/>

        </RightBox>

      
    </Component>
  )
}
