import { Box, Button, Typography } from "@mui/material"

import styled from "@emotion/styled";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StoreIcon from '@mui/icons-material/Store';
import { Link } from "react-router-dom";
import Badge from '@mui/material/Badge';
// component import
import LoginDialog from "../LoginDialog";
import { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import { Profile } from "./Profile";
import { useSelector } from "react-redux";


const LoginButton = styled(Button)`
color:#000;
background:#fff;
text-transform:none;
margin:0px 0.6rem;
box-shadow:none;
height:30px;
width:7rem;
border-radius:2px;



&:hover{
    color:#000;
    background:#fff;
    text-transform:none;
    margin:0px 0.6rem;
    box-shadow:none;
    height:30px;
    width:7rem;
    border-radius:2px;
    
}


`

export default function CustomButton() {
    const { Auth_UserName, setAuthUserName } = useContext(DataContext);
    const [open, setOpen] = useState(false);
    const openDialog = () => {
        setOpen(true)

    }
    const {cartItems}=useSelector(state => state.cart);
    return (
        <>
            <Box className="flex justify-between items-center  w-[100%]" >
                {Auth_UserName ? (<Profile Auth_UserName={Auth_UserName} setAuthUserName={setAuthUserName} />) : (<LoginButton onClick={() => openDialog()}>Login</LoginButton>)}

                <Box className="flex justify-evenly items-center ">
                    <Box className="flex " style={{ margin: "0 12px" }}>
                        <StoreIcon />
                        <Typography variant="text" >Become a seller  </Typography>

                    </Box>
                    <Box className="flex " style={{ margin: "0 12px" }}>

                        <Typography variant="text" >More </Typography>

                    </Box>

                    <Link to="/cart">
                        
                    <Box className="flex " style={{ margin: "0 12px" }}>
                    <Badge badgeContent={cartItems.length} color="warning">
 
                    <ShoppingCartIcon />
                        
                     </Badge>
                     <Typography variant="text" >Cart</Typography>
                    </Box>
                    </Link>




                </Box>





                <LoginDialog open={open} setOpen={setOpen} />
            </Box>

        </>
    )
}
