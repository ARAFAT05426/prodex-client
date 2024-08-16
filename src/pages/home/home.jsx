import Banner from "../../sections/home/banner/banner";
import FeaturedProducts from "../../sections/home/featuredProducts/featuredProducts";
import PartnersContainer from "../../sections/home/partnersContainer/partnersContainer";
import ServicesContainer from "../../sections/home/servicesContainer/servicesContainer";
import TrendingContainer from "../../sections/home/trendingContainer/trendingContainer";

const Home = () => {
  return (
    <>
      <Banner />
      <ServicesContainer />
      <FeaturedProducts />
      <TrendingContainer />
      <PartnersContainer />
    </>
  );
};
export default Home;
