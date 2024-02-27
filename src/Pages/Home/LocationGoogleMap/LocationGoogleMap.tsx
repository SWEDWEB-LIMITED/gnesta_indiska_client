// LocationGoogleMap component
import GoogleMap from "../../../Component/GoogleMap";

export default function LocationGoogleMap() {
  return (
    <>
      <h1 className="text-4xl font-bold my-[6rem] text-center">Our location</h1>
      <div className="w-full">
        <GoogleMap width="100" height="170" />
      </div>
    </>
  );
}
