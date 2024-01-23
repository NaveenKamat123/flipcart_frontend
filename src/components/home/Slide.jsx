import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Button, Divider, Typography, styled } from '@mui/material'
import Countdown from 'react-countdown';
import {Link} from "react-router-dom"


export default function Slide({ productsData=[], title, timer }) {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,

        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,

        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,

        }
    };

    const Container = styled(Box)`
  margin-top:10px;
  background-Color:#FFFFFF;
  padding:5px 5px;
  `

    const Deal = styled(Box)`
  padding:10px 20px;
  display:flex;
  align-items:center;
  gap:1rem;
  height:3rem;
  width:100%;
  background-Color:#FFFFFF;
  margin:10px 0px;


  `

    const Timer = styled(Box)`
  display:flex;
  align-items:center;
  color:#7f7f7f;


  `
    const DealText = styled(Typography)`
  font-weight:500;
  font-Size:1.2rem;
  margin-right:2rem;
  line-height:1rem;
  `

    const ViewAll = styled(Button)`
  margin-left:auto;
  background-Color:#2874f0;
  font-weight:600;
  height:2rem;
  `

    const Image = styled('img')`
  width:auto;
  height:7rem;
  objectfit:contain;
  margin-bottom:0.6rem;

  &:hover{
    transform: scale(1.2);
  `

    const Text = styled(Typography)`
  font-Size:14px;
  `

    const Card = styled(Box)`
  display:flex;
  flex-direction:Column;
  justify-items:space-evenly;
  align-items:center;
  border:1px solid #D3D3D3;
  margin:10px 10px;
  padding:3px 2px 0px 2px;
  height:15rem;
  border-radius:2px;


  }

 
 
  `


    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

    const renderer = ({ hours, minutes, seconds }) => {

        return <Box variant="span">{hours} : {minutes} : {seconds} Left</Box>

    };




    return (
        <Container >
            <Deal >
                <DealText>{title}</DealText>

                {
                    timer && (<Timer >
                        <img src={timerURL} alt="time" className="w-[1rem]" />
                        <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
                    </Timer>)
                }

                <ViewAll variant='contained' color='primary'>View All</ViewAll>
            </Deal>
            <Divider />

            <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                slidesToSlide={1}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"

            >

                {

                    productsData.map(product => {
                        return (
                           <Link to={`/product/${product.id}`} key={product.id}>
                            <Card textAlign="center"  >
                                <Image src={product.url} alt="" />
                                <Text style={{ fontweight: "bold", color: 'black' }}>{product.title.shortTitle}</Text>
                                <Text style={{ color: "green" }}>{product.price.discount}</Text>
                                <Text style={{ color: '#212121', opacity: ".6" }}>{product.tagline}</Text>
                            </Card>
                           </Link>


                        )
                    })
                }


            </Carousel>



        </Container>

    )
}
