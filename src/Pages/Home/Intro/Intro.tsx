const Intro = () => {
  const handleCallForOrder = () => {
    window.location.href = "tel:+46722440300";
  };

  return (
    <div className="md:flex justify-center lg:gap-56 gap-14 md:px-5 pl-2 lg:py-24 md:pt-14 pt-5">
      <div className="">
        <h1 className="lg:text-6xl text-4xl font-bold pb-4">
          Välkommen till <br /> Gnesta Indiska{" "}
        </h1>
        <p className="lg:text-2xl text-xl font-semibold pb-1">
          Utforska Äkta Indisk Mat i Gnesta
        </p>
        <p className="lg:text-xl font-semibold pb-3">
          Klassiska Favoriter och Nyskapande Rätter
        </p>
        <button className="btn btn-warning" onClick={handleCallForOrder}>
          Beställ på telefon : +46 722 44 03 00
        </button>
      </div>
      <div className="bg-amber-400 text-center w-80 font-bold text-2xl md:pt-14 pt-8">
        <h1 className="pb-4">Öppettider</h1>
        <p>MÅN-FRE: 11:00 - 21:00</p>
        <p>LÖR-SÖN: 13:00 - 21:00</p>
      </div>
    </div>
  );
};

export default Intro;
