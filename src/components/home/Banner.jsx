import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { bannerData } from "../../constants/data";


export default function Banner() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,

        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,

        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,

        }
    };
    return (
        <Carousel
            swipeable={false}
            draggable={false}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
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
                bannerData.map(data => {
                    return (
                        <img src={data.url} alt="" key={data.id} />
                    )
                })
            }

        </Carousel>
    )
}
