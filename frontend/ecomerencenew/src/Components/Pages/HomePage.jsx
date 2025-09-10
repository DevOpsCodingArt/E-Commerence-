import SlidePerView from "../HeroSection/SlidePerView";
import FullBanner from "../Banners/FullBanner";
import SquareBannerAds from "../Banners/SquareBannerAds";
import FilterProducts from "../Products/FilterProducts";
import BlogSection from "../Blog/BlogSection";
import FeaturesBar from "../Blog/FeaturesBar";
import HeroSlider from "../HeroSection/HeroSlider";
import SideComponents from "../HeroSection/SideComponents";

function HomePage() {
  return (
    <div>
      {/* <HeroSection></HeroSection> */}
      <div className="flex w-full">
        <HeroSlider></HeroSlider>
        <SideComponents></SideComponents>
      </div>
      <SlidePerView></SlidePerView>

      <section className="bg-white py-8">
        <FullBanner></FullBanner>
        <SquareBannerAds></SquareBannerAds>
      </section>
      <section className="bg-white py-8">
        <FilterProducts></FilterProducts>
      </section>
      <section>
        <BlogSection></BlogSection>
        <FeaturesBar></FeaturesBar>
      </section>
      <hr className="text-gray-400" />
    </div>
  );
}

export default HomePage;
