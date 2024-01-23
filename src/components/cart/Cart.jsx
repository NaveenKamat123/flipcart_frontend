import { useSelector,useDispatch } from "react-redux";
import Grid from '@mui/material/Grid';
import { Typography,Box} from "@mui/material";
import CartItems from "./CartItems";
import TotalView from "./TotalView";
import styled from "@emotion/styled";
import Button from '@mui/material/Button';
import EmptyCard from "./EmptyCard";
import { useParams } from 'react-router-dom';
import { addToCart } from "../../redux/Actions/CartActions";
import { useEffect } from 'react';

const Container=styled(Grid)`
padding:10px 10px 10px 40px;
background:#f2f2f2;
display:flex;



`
const Header=styled(Box)`
 padding:15px 10px;
 display:flex;
 justify-content:space-between;
 background:#ffffff;
 font-weight:500;
 box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;


`

const ButtonWrapper=styled(Box)`
 padding:10px 22px;
 background:#ffffff;
 box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
 border:1px solid #f0f0f0;


`

const StyledButton=styled(Button)`
 display:flex;
 margin-left:auto;
 background:#fb641b;
 color:#fff;
 width:215px;
 height:2.6rem;
 border-radius:2px;

 &:hover{
  background:#fb641b;
  color:#fff;

 }

`

const LeftComponent=styled(Grid)`
padding-right:10px;


`

export default function Cart() {
  const { cartItems } = useSelector(state => state.cart);
  const { id } = useParams();
  const dispatch = useDispatch();
      
  useEffect(() => {
    if(cartItems && id !== cartItems.id)   
        dispatch(addToCart(id));
}, [dispatch, cartItems, id]);


  return (
    <>
      {
        cartItems.length ? (
        <Container container>  
        <LeftComponent item lg={9} md={9} sm={12} xs={12}  style={{borderRadius:"2px"}}>
          <Header>
            <Typography>My Cart {cartItems.length}</Typography>
            <Button variant="outlined">Enter Delivery Pincode</Button>
          </Header>
          {
            cartItems.map(item=>{
            return(
              <CartItems item={item}/>
            )
               
              
            })
          }
          <ButtonWrapper>
            <StyledButton >
              Place Order
            </StyledButton>
          </ButtonWrapper>

        </LeftComponent>

         <Grid container style={{margin:"10px"}}>
         <Grid item lg={3} md={3} sm={12} xs={12}>
        <TotalView cartItems={cartItems}/>
        </Grid>
         

         </Grid>
       

        </Container>)
        :
            <Container container> 
          <EmptyCard/>
          </Container>

      }
    </>
  )
}
