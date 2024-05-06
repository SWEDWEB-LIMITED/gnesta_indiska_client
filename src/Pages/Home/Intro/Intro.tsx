import { FaPhone } from "react-icons/fa";
import GnestaIndiska from "../../../assets/GnestaIndiska.jpeg";

const Intro = () => {
  const handleCallForOrder = () => {
    window.location.href = "tel:+460722440300";
  };

  return (
    <div
      className="bg-[#222] text-white min-h-screen flex flex-col justify-center items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${GnestaIndiska})`,
        backgroundPosition: "center",
      }}
    >
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="lg:text-6xl text-4xl font-bold text-[#ffaa36] mb-4">
          Välkommen till Gnesta Indiska
        </h1>
        <p className="lg:text-xl text-lg mb-2">
          Utforska Äkta Indisk Mat i Gnesta
        </p>
        <p className="lg:text-lg text-base mb-6">
          Klassiska Favoriter och Nyskapande Rätter
        </p>
        <button
          className="btn bg-[#ffaa36] btn-outline w-full md:w-1/2 hover:bg-[#ff9200] transition-colors"
          onClick={handleCallForOrder}
        >
          Beställ på mobil: 0722440300 <FaPhone className="ml-2" />
        </button>
      </div>
      <div className="bg-[#ffaa36] text-black font-bold rounded-2xl my-5 w-full md:w-96 mx-5 p-8 text-center">
        <h1 className="text-2xl mb-4">Öppettider</h1>
        <p className="mb-2">
          Måndag-Fredag 10:30-21:00 (lunchtider 10:30-14:00)
        </p>
        <p>Helger (lördag och söndag) - 12:00-21:00</p>
      </div>
    </div>
  );
};

export default Intro;
