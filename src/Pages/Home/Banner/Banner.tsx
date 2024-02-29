import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import slider1 from "../../../assets/home/Slider1.jpg";
import slider2 from "../../../assets/home/slider2.jpg";
import slider3 from "../../../assets/home/slider3.jpg";

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
          src={slider1}
          className="max-h-[600px] object-center object-cover"
          alt="Banner 1"
        />
      </div>
      <div>
        <img
          src={slider2}
          className="max-h-[600px] object-center object-cover"
          alt="Banner 2"
        />
      </div>
      <div>
        <img
          src={slider3}
          className="max-h-[600px] object-center object-cover"
          alt="Banner 3"
        />
      </div>
    </Carousel>
  );
};

export default Banner;
