import { motion } from "framer-motion";
import { FaUtensils, FaRegGem } from "react-icons/fa";
import GnestaIndiska from "../../assets/GnestaIndiska.jpeg";

const AboutUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative bg-cover bg-center py-16 px-8 md:px-16 lg:px-24 xl:px-32 text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${GnestaIndiska})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative z-10 max-w-3xl mx-auto text-center p-6 rounded-md shadow-lg">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 font-serif tracking-wide">
          About GNESTA INDISKA
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-6 leading-relaxed">
          Authentic Indian cuisine, modern dining. Rich flavors, vibrant
          atmospheres.
        </p>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed">
          Crafted with care, our menu offers classic and contemporary delights.
          Experience warmth, hospitality, and celebrate the essence of India
          with us!
        </p>
        <div className="flex justify-center items-center mb-6">
          <div className="mr-4">
            <FaUtensils className="text-4xl text-white" />
          </div>
          <div>
            <FaRegGem className="text-4xl text-white" />
          </div>
        </div>
        <div className="text-lg font-extrabold">
          <p>📍 Stora Torget 5, 64631 Gnesta</p>
          <p>☎️ Telefon: 0158 106 68</p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUs;
