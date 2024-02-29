const Footer = () => {
  return (
    <div className="bg-[#ffaa36]">
      <footer className="footer  p-10 justify-evenly ">
        <div>
          <img className="max-w-24" src={"logo.png"} alt="" />
        </div>
        <div>
          <h6 className="footer-title font-bold">Location</h6>
          <div className="text-lg font-bold">
            <p>📍 Stora Torget 5, 64631 Gnesta</p>
            <p>☎️ Telefon: +46 722 44 03 00</p>
          </div>
        </div>
      </footer>
      <div className="text-center font-semibold pb-5">
        <p>
          Copyright © 2024 - All right reserved to Gnesta Indiska | Produced by
          SWEDWEB Limited
        </p>
      </div>
    </div>
  );
};

export default Footer;
