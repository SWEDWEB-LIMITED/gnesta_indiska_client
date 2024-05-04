import Category from "./Category/Category";
import Intro from "./Intro/Intro";
import LocationGoogleMap from "./LocationGoogleMap/LocationGoogleMap";
import RecipeMenu from "./RecipeMenu/RecipeMenu";
import WeekendLunchItems from "./WeekendLunchItems/WeekendLunchItems";

const Home = () => {
  return (
    <div>
      <Intro></Intro>
      <Category></Category>
      <WeekendLunchItems />
      <RecipeMenu />
      <LocationGoogleMap></LocationGoogleMap>
    </div>
  );
};

export default Home;
