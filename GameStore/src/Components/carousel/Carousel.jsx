import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carouselslider = ({ mediaItems }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: false,
    arrows: true,
  };

  const renderMediaItem = (url, index) => {
    return (
      <div className="relative w-full h-[650px] rounded-2xl shadow-md overflow-hidden">
        <img
          key={index}
          src={url}
          className="object-fill w-full h-full"
          alt="Carousel Media"
        />
      </div>
    );
  };

  return (
    <div className=" w-full h-full flex justify-center mt-14 mx-auto">
      <div className=" p-4 md:p-0 md:w-8/12 h-[650px] rounded-lg overflow-hidden mx-auto">
        <Slider {...settings}>
          {mediaItems.map((item, index) => (
            <div key={index} className=" w-full h-full">
              {renderMediaItem(item, index)}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carouselslider;
