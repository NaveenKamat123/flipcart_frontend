import { Box, Typography } from "@mui/material"
import { useState } from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import styled from "@emotion/styled";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Components = styled(Menu)`
 margin:2px 3rem;
`

const LogoutButton = styled(Typography)`
margin-left:20px;
font-size:14px;
`



export const Profile = ({ Auth_UserName,setAuthUserName }) => {

    const [open, setopen] = useState(false);
    const handleClick = (event) => { setopen(event.currentTarget) };
    const handleClose = () => { setopen(false) }

    const Logout=()=>{
        setAuthUserName('');
    

    }
    

    return (
        <>
            <Box onClick={handleClick} > <Typography style={{ width: "135px", marginLeft: "34px" }}>{Auth_UserName}</Typography>


            </Box >
            <Components
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}


            >
                <MenuItem onClick={()=>{handleClose();Logout();}}>

                    <PowerSettingsNewIcon color="primary" fontSize="sm" />
                    <LogoutButton >
                        Logout</LogoutButton>
                </MenuItem>

            </Components>

        </>
    )
}