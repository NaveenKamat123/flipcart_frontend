
import Nav from './Nav'
import Banner from './Banner'
import { Box } from '@mui/material'
import { useEffect } from 'react'
import { getProducts } from '../../redux/Actions/ProductAction'
import { useDispatch, useSelector } from 'react-redux'
import Slide from './Slide'
import MidSlide from './MidSlide'
import MidSection from './MidSection'

export default function Home() {
  const dispatch=useDispatch();
  const {products}=useSelector(state=>state.getProducts);

 

  useEffect(()=>{
    dispatch(getProducts());

  },[dispatch]);

  return (
   
    <>


    <Nav />
  
    <Box style={{padding:"10px 10px",backgroundColor:"#f4f0ec"}} >
    <Banner />
     <MidSlide productsData={products} title="Deal of the Day" timer={true}  />
    <MidSection/>
    <Slide productsData={products} title="Discount for You" timer={false} /> 
     <Slide productsData={products} title="Suggested Item" timer={false} />
    <Slide productsData={products} title="Top Item" timer={false} />
    <Slide productsData={products} title="Recommended Item" timer={false} />
    <Slide productsData={products} title="Trending Offers" timer={false} />
    <Slide productsData={products} title="Season Off" timer={false} />
    <Slide productsData={products} title="Top Deals of Accessories" timer={false} /> 
 

    </Box>
    </>

        
 
    
  )
}
