import styled from "@emotion/styled";
import { Box ,Button} from "@mui/material";

import FlashOnIcon from '@mui/icons-material/FlashOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {addToCart } from "../../redux/Actions/CartActions";


const LeftContainer=styled(Box)`
min-width:50%;
padding:20px 0 0 40px;

`

const Image=styled('img')`

padding:10px;
margin-bottom:14px;


`
const StyleButton=styled(Button)`
width:47%;
border-radius:2px;
height:50px;
`




export default function ActionItems({product}) {
  const {id}=product;
  const quantiy=1;
  const navigate=useNavigate()
  const dispatch=useDispatch();

  const addItemToCart=(id)=>{
    dispatch(addToCart(id,quantiy));
    navigate('/cart');

  }

  return (
    <LeftContainer>
         <Box style={{padding:"15px 10px",borderRadius:"2px",width:"95%"}}> 
         <Image src={product.detailUrl} alt="product" style={{border:"1px solid #F0F0F0"}} />
         <StyleButton variant="contained" style={{backgroundColor:"#ff8c00 "}} onClick={()=>addItemToCart(id)}><ShoppingCartIcon/>Add to cart</StyleButton>
         <StyleButton variant="contained" style={{backgroundColor:"#fb541b",marginLeft:"4px"}}><FlashOnIcon />Buy now</StyleButton>
       
      

         </Box>
      
    </LeftContainer>
  )
}
