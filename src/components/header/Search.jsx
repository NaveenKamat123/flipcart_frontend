
import { Box, InputBase, ListItem,styled } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/Actions/ProductAction';
import List from '@mui/material/List';
import {Link} from 'react-router-dom'

const SearchContainer = styled(Box)`
border-radius: 2px;
margin-left:30px;
width: 35%;
background-color: #fff;
display: flex;
height:35px
`

const SearchIconWrapper = styled(Box)`
  margin-left: auto;
  padding:6px;
  display: flex;
  flex-direction:column;
  align-items:center;
  color: blue;
  background:#F8F8F8;
  border-radius:0 1px 1px 0;
`;

const InputSearchBase = styled(InputBase)`
  font-size: unset;
  width: 100%;
  padding-left: 20px;
  
`;

const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #FFFFFF;
  margin-top:42px;
  width:32%;
  border:1px solid #f2f2f2;
  border-radius:2px;
  
 
`


export default function Search() {
  const [SearchText, setSearchText] = useState();
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.getProducts)

  useEffect(() => {

    dispatch(getProducts);

  }, [dispatch])



  return (

    <SearchContainer>
      <InputSearchBase

        placeholder='Seach For products , brand and more'
        value={SearchText}
        onChange={(e) => { setSearchText(e.target.value)}}
      />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>

      {
        SearchText &&
        <ListWrapper >
          {

            products.filter(product => product.title.longTitle.toLowerCase().includes(SearchText.toLowerCase())).map(product => {
              return (
                <Link to={`/product/${product.id}`}  onClick={(e) =>{ setSearchText('')}}>
                  <ListItem  style={{fontSize:"0.9em"}}>
                    {product.title.longTitle}
                  </ListItem>
                </Link>
              )

            })
          }
        </ListWrapper>
      }

    </SearchContainer>
  )
}
