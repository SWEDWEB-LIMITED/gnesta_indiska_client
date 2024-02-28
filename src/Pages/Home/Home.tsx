import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Intro from "./Intro/Intro";
import LocationGoogleMap from "./LocationGoogleMap/LocationGoogleMap";
import RecipeMenu from "./RecipeMenu/RecipeMenu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Intro></Intro>
      <Category></Category>
      <RecipeMenu></RecipeMenu>
      <LocationGoogleMap></LocationGoogleMap>
    </div>
  );
};

export default Home;
