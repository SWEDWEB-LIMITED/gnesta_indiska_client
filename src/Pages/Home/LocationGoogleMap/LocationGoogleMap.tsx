import GoogleMap from "../../../Component/GoogleMap";

export default function LocationGoogleMap() {
  return (
    <div className="shehub_center_div flex-col mt-[6rem]">
      <h1 className="text-4xl font-bold mb-[6rem]">Our location</h1>
      <GoogleMap width="100" height="12" />
    </div>
  );
}
