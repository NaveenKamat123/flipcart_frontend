import { Box, Typography, Table, TableRow, TableCell,TableBody} from '@mui/material';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import styled from "@emotion/styled";

const SmallText =styled(Box)`
font-size:14px;
verical-align:baseline;
font-weight:700;

 & >p{
    font-size:12px;
    margin-top:10px;

 }
`

const StyleBadge=styled(LoyaltyIcon)`
margin-right:10px;
font-size:15px;
color:green;

`
const ColummText=styled(TableRow)`
font-size:14px;
verical-align:baseline;
& >td{
    font-size:14px;
    margin-top:10px;
    border:none;
}
`

export default function ProductDetail({ product,fassured  }) {
    const date = new Date(new Date().getTime()+(5*24*60*60*1000));
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    return (
        <>
        
            <Typography>{product.title.longTitle}</Typography>

            <Typography style={{ marginTop: 5, color: '#878787', fontSize: "14px",display:"flex" }}>8 Rating & 1,234 Reviews

                <Box component='span'>
                    <img src={fassured} alt="" style={{ width:77, marginLeft:20 }} />
                </Box>

            </Typography>
            <Typography style={{color:'green',fontSize:'14px',fontWeight:"600",margin:"8px 0px"}}>Extra {product.discount}</Typography>

            <Box component='span' style={{ display: "flex", justifyContent: "flex-start", gap: "14px", alignItems: 'center' }}>

                <Typography style={{ fontSize: 28 }}>
                    ₹{product.price.cost}
                </Typography>
                <Typography  style={{ color: '#878787' }}>
                    ₹<strike>  {product.price.mrp}</strike>

                </Typography>
                <Typography style={{ color: '#388E3C' }}>
                    {product.price.discount}

                </Typography>

            </Box>
            <SmallText>
                Available Offers
               <Typography> <StyleBadge /> Bank Offer10% off on ICICI Bank Credit Card and EMI Transactions, up to ₹750, on orders of ₹5,000 and aboveT&</Typography>
               <Typography><StyleBadge />Bank Offer10% off on Bank of Baroda Credit Card and EMI Transactions, up to ₹750 on orders of ₹5,000 and aboveT&</Typography>
               <Typography><StyleBadge />Bank OfferExtra ₹750 off on ICICI Bank Credit Card and EMI Txns on a Net Cart Value of ₹24,990 and aboveT&C</Typography>
               <Typography><StyleBadge />Special PriceGet extra ₹5000 off (price inclusive of cashback/coupon)T&C</Typography>
            </SmallText>
           <Table>
            <TableBody>
            <ColummText>
                <TableCell style={{color:"#827827"}}>Delivery</TableCell>
                <TableCell style={{fontWeight:"600"}}>Delivery by {date.toDateString()} ₹40 </TableCell>
               
            </ColummText>
            <ColummText>
                <TableCell style={{color:"#827827"}}>Warranty</TableCell>
                <TableCell >No Warranty</TableCell>
                
               
            </ColummText>
            <ColummText>
                <TableCell style={{color:"#827827"}}>Seller</TableCell>
                <TableCell >
                <Box component="span" style={{color:"#287280"}}>Vision Star </Box>
                  
                <Typography>7 Days Service Center Replacement/Repair</Typography>
                <Typography>GST invoice available</Typography>

                </TableCell>
               
            </ColummText>
            <ColummText>
                <TableCell colSpan={2}>
                <img src={adURL} alt="flipcart points" style={{width:390}} />
                </TableCell>
             
                   
               
            </ColummText>
            <ColummText>
                <TableCell style={{color:"#827827"}}>
                    
                <Typography>Description</Typography>
                </TableCell>
                <TableCell>
                    
                   <Typography>{product.description}</Typography>
                </TableCell>
            </ColummText>
            </TableBody>
           </Table>
        </>
    )
}
