// GoogleMap component
export default function GoogleMap({
    width,
    height
  }: {
    width: string;
    height: string;
  }) {

    return (
    
      <>
        <div className="map-container w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2052.070996593887!2d17.30978587678012!3d59.04752353354639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f3d7c11a4b313%3A0x3627f3d99227146e!2sStora%20Torget%205%2C%20646%2031%20Gnesta%2C%20Sweden!5e0!3m2!1sen!2sbd!4v1709040518987!5m2!1sen!2sbd"
            width={`${width}%`}
            height={`${height}rem`}
            style={{ border: "0" }}
            className={`rounded-[0.5rem] h-[${height}rem] w-[${width}%]`}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </>
    );
  }
  