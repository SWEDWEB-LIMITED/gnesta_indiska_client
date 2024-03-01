const Footer = () => {
  return (
    <div className="bg-[#ffaa36]">
      <footer className="container mx-auto flex flex-col md:flex-row p-10 justify-between items-center">
        <div className="text-center flex items-center md:text-left mb-6 md:mb-0">
          <img className="max-w-24" src={"logo.png"} alt="" />
          <p className="font-bold md:ml-5">GNESTA INDISKA</p>
        </div>
        <div className="text-center md:text-left">
          <h6 className="footer-title font-bold text-lg mb-2">Location</h6>
          <div className="text-lg font-bold">
            <p>📍 Stora Torget 5, 64631 Gnesta</p>
            <p>☎️ Mobil: 0722440300</p>
          </div>
        </div>
      </footer>
      <div className="text-center font-semibold py-3">
        <p className="text-sm">
          Copyright © 2024 - All rights reserved to Gnesta Indiska | Produced by
          SWEDWEB Limited
        </p>
      </div>
    </div>
  );
};

export default Footer;
