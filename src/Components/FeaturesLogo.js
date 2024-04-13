import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo1 from "../assets/features_logo/Clipper.png";

import logo2 from "../assets/features_logo/Jotform New 2021.png";
import logo3 from "../assets/features_logo/Salesforce-logo.jpg";
import logo4 from "../assets/features_logo/canva-logo-png.png";
import logo5 from "../assets/features_logo/klipartz.com.png";
import logo6 from "../assets/features_logo/pngegg.png";
import logo7 from "../assets/features_logo/pngwing.com (1).png";
import logo8 from "../assets/features_logo/pngwing.com.png";
const FeaturesLogo = () => {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024, // for tablet screens
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600, // for mobile screens
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="feature-con" style={{ margin: "1.4rem 0" }}>
      <Slider {...settings}>
        <div className="feature-logo">
          <img src={logo1} />
        </div>
        <div className="feature-logo">
          <img src={logo2} />
        </div>
        <div className="feature-logo">
          <img src={logo3} />
        </div>
        <div className="feature-logo">
          <img src={logo4} />
        </div>
        <div className="feature-logo">
          <img src={logo5} />
        </div>
        <div className="feature-logo">
          <img src={logo6} />
        </div>
        <div className="feature-logo">
          <img src={logo7} />
        </div>
        <div className="feature-logo">
          <img src={logo3} />
        </div>
        <div className="feature-logo">
          <img src={logo8} />
        </div>
      </Slider>
    </div>
  );
};

export default FeaturesLogo;
