// LocationGoogleMap component
import GoogleMap from "../../../Component/GoogleMap";

export default function LocationGoogleMap() {
  return (
    <>
      <h1 className="text-4xl font-bold my-[3rem] text-center">
        Vår platsbelägenhet
      </h1>
      <div className="w-full">
        <GoogleMap width="100" height="350" />
      </div>
    </>
  );
}
