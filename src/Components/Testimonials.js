import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TestimonialsData } from "../data";
import star from "../assets/star.png";
import user from "../assets/user.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";
const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 50000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section
      class="Testimonial-Section container"
      id="testimonials"
      data-aos="fade-up"
    >
      <h3 className="heading">
        WHAT OUR USER <span>ARE SAYING</span>
      </h3>
      <Slider {...settings}>
        {TestimonialsData.map((item) => (
          <div className="testmonial-card">
            <img src={star} alt="" width="50px" />
            <div className="tes-user">
              <img
                src={user}
                alt=""
                style={{
                  width: "2rem",
                  height: "2rem",
                  margin: "0 0 10px 0",
                  marginRight: "1rem",
                  borderRadius: "50%",
                }}
              />
              <h6> {item.userName}</h6>
            </div>
            <div className="testmonial-card-bottom">
              <p>{item.review}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
