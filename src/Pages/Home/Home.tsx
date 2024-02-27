import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Footer from "./Footer/Footer";
import LocationGoogleMap from "./LocationGoogleMap/LocationGoogleMap";
import RecipeMenu from "./RecipeMenu/RecipeMenu";

const Home = () => {
  return (
    <div>
      This is home page
      <Banner></Banner>
      <Category></Category>
      <RecipeMenu />
      <LocationGoogleMap/>
      <Footer></Footer>
    </div>
  );
};

export default Home;
