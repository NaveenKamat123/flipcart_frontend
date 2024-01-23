import { useEffect } from 'react';

import { Box,Grid } from '@mui/material';

import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import ActionItems from './ActionItems';
import { getProductDetails } from '../../redux/Actions/ProductAction'
import styled from '@emotion/styled';
import ProductDetail from './ProductDetail';

const Component = styled(Box)`
background-Color:#f2f2f2;

`

const Container = styled(Grid)`
background-color:#ffffff;
display:flex;
`
const RightContainer = styled(Grid)`
margin-top:50px;


`


const DetailView = () => {

  const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
  const { id } = useParams();

  const { loading, product } = useSelector(state => state.getProductDetails);

  const dispatch = useDispatch();


  useEffect(() => {
    if (product && id !== product.id)
      dispatch(getProductDetails(id));
  }, [dispatch, product, id, loading]);


  return (
    <Component>
      {
        product && Object.keys(product).length &&
        <Container container>
          <Grid item lg={4} md={8} sm={8} xs={12}>
              <ActionItems product={product} />
          </Grid>
          
          <RightContainer item lg={8} md={4} sm={8} xs={12} >
            <ProductDetail  product={product} fassured={fassured } />
           
          </RightContainer>

        </Container>
      }



    </Component>
  )
}

export default DetailView;