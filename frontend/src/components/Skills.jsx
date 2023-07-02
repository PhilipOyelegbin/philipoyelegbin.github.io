import Slider from "react-slick";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { SkillsData } from "./data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Skills = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    speed: 500,
    cssEase: "linear",
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 675,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  // function to control the slide to the next slide
  function NextArrow({onClick}) {
    return (
      <FaChevronCircleRight className="text-3xl text-yellow-500 absolute top-1/2 right-0 cursor-pointer -translate-y-1/2 z-10 hover:text-yellow-700" onClick={onClick} />
    );
  }

  // function to control the slide to the previous slide
  function PrevArrow({onClick}) {
    return (
      <FaChevronCircleLeft className="text-3xl text-yellow-500 absolute top-1/2 left-0 cursor-pointer -translate-y-1/2 z-10 hover:text-yellow-700" onClick={onClick} />
    );
  }

  return (
    <section className="text-center mx-auto px-5 py-5 lg:px-20">
      <p className="xl:text-center">For those that know what they're checking out. I build beautiful, search engine optimized websites for businesses which ensures increased productivity and credibility plus your business gets <strong>top list in searches over 70% of the time!</strong></p>

      <Slider {...settings}>
        {SkillsData?.map((skill, index) => {
          return(
            <figure className="card bg-gray-700 hover:shadow-md hover:shadow-gray-500 h-24 md:h-32" key={index}>
              <img src={skill.cover_image || ""} loading="lazy" className="w-full h-16 rounded-t-lg md:h-24" alt="tool-image" />
              <figcaption>
                <h3 className="text-sm text-center my-2">{skill.label || ""}</h3>
              </figcaption>
            </figure>
          )
        })}
      </Slider>
    </section>
  )
}

export default Skills