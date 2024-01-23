import styled from "@emotion/styled";
import { Box, Typography} from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import Button from '@mui/material/Button';
import { addEllipsis } from "../../utils/commonutils";
import ButtonGroups from "./ButtonGroups";
import { removeFromCart } from "../../redux/Actions/CartActions";
import { useDispatch } from "react-redux";


const Component = styled(Box)`
border-top:1px solid #f2f2f2;
display:flex;
background:#ffffff;



`

const LeftComponent = styled(Box)`
margin:20px;
display:flex;
flex-direction:column;


`
const SmallText=styled(Typography)`
color:#878787;
font-size:14px;

`

const Remove=styled(Button)`
 color:black;
 margin-top:10px;
font-weight:800;

 &:hover{
    color:blue;
    background:unset;
 }
`
export default function CartItems({ item }) {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
  const dispatch=useDispatch();

   const  removeItemFromCart=(id)=>{
    dispatch(removeFromCart(id));

   }
    return (
        <Component>
            <LeftComponent>
                <img src={item.url} alt="product" width={96} />

            <ButtonGroups/>
            </LeftComponent>

            <Box>

                <Box style={{ display: "flex", justifyContent: "flex-start",flexDirection:"column", gap: "10px", alignItems: 'flex-start',marginTop:"24px" }}>
                    <Typography component='span' style={{ fontSize:14 }}>
                       {addEllipsis(item.title.longTitle)}

                    </Typography>
                    <SmallText style={{ display:"flex",alignItems:"center" }}>
                     Seller:BUZZINDIA 
                  
                      <Box component="span">
                        <img src={fassured} alt="flipcart" width={50} style={{width:"50",marginLeft:"3px"}} />

                      </Box>
                    

                    </SmallText>
                   <Typography style={{ display: "flex", justifyContent: "flex-start", gap: "14px", alignItems: 'center' }}>
                   <SmallText  style={{ color: '#878787',fontSize:15 }}>
                        ₹<strike>  {item.price.mrp}</strike>

                    </SmallText>

                    <Typography  style={{ fontSize:15 }}>
                        ₹{item.price.cost}
                    </Typography>
                    <Typography  style={{ color: '#388E3C', fontSize:15,fontWeight:"500",display:"flex",alignItems:"center"  }}>
                        {item.price.discount} Off 1 Offer applied <InfoIcon style={{fontSize:14}}/>

                    </Typography>

                   </Typography>
                    <Remove onClick={()=>removeItemFromCart(item.id)}>REMOVE</Remove>


                </Box>
            </Box>


        </Component>
    )
}
