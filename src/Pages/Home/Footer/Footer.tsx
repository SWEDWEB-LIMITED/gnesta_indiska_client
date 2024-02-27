
const Footer = () => {
    return (
        <div className="bg-neutral text-neutral-content">
           <footer className="footer p-10 justify-evenly ">
            <div>
                <img className="max-w-24" src={"logo.png"} alt="" />
                
            </div> 
            <div>
                <h6 className="footer-title">Location</h6> 
                <div className="text-lg font-extrabold">
                <p>📍 Stora Torget 5, 64631 Gnesta</p>
                <p>☎️ Telefon: 0158 106 68</p>
                </div>
            </div>
           
            </footer>
            <div className="text-center pb-5">
                <p>Copyright © 2024 - All right reserved to Gnesta Indiska | Produced by SWEDWEB Limited</p>
            </div>

           
        </div>
    );
};

export default Footer;