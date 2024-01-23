
import Search from "./Search";
import CustomButton from './CustomButton';
import { Box, Typography} from "@mui/material";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";


const LogoImage = styled('img')`
  height:"1rem"
`

const Text = styled(Typography)`
 font-size:0.6rem;
 font-weight:400;

`



export default function Navbar() {

  const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';


  return (
    <nav className='w-[100%] h-[54px] bg-blue-600 flex  text-white justify-space-between items-center'>

      
      <div className=" w-[80px]  ml-[14%] flex flex-col ">
        <Link to="/">
          <LogoImage src={logoURL} alt="" />

          <Text className="text-white text-[13px] italic">Explore <span className="text-yellow-400 font-bold">Plus</span></Text>
        </Link>
      </div>

      <Search />
      <Box>
        <CustomButton />
      </Box>

    </nav>
  )
}
