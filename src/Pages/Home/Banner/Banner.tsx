import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import banner from "../../../assets/home/banner.jpg";

const Banner = () => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true} interval={5000} >
            <div>
                <img src={banner} alt="Banner 1" />
            </div>
            <div>
                <img src={banner} alt="Banner 2" />
            </div>
            <div>
                <img src={banner} alt="Banner 3" />
            </div>
        </Carousel>
    );
};

export default Banner;