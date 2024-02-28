import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import banner from "../../../assets/home/banner.jpg";

const Banner = () => {
  return (
    <Carousel
      className="text-center"
      autoPlay={true}
      infiniteLoop={true}
      interval={1000}
    >
      <div>
        <img
          src={banner}
          className="max-h-[550px] object-cover"
          alt="Banner 1"
        />
      </div>
      <div>
        <img
          src={banner}
          className="max-h-[550px] object-cover"
          alt="Banner 2"
        />
      </div>
      <div>
        <img
          src={banner}
          className="max-h-[550px] object-cover"
          alt="Banner 3"
        />
      </div>
    </Carousel>
  );
};

export default Banner;
