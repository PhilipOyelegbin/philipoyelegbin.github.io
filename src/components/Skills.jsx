import Slider from "react-slick";
import { skillsData } from './data';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Skills = () => {
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 7,
    slidesToScroll: 3,
    speed: 500,
    cssEase: "linear",
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          dots: true
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
  function NextArrow({className, style, onClick}) {
    return (
      <div className={className}
      style={{ ...style, disply: "block"}} onClick={onClick}/>
    );
  }

  // function to control the slide to the previous slide
  function PrevArrow({className, style, onClick}) {
    return (
      <div className={className}
      style={{ ...style, disply: "block"}} onClick={onClick}/>
    );
  }

  return (
    <section className="bg-gray-600 text-center py-10" id="skills">
      <div className="container mx-auto px-5">
        <h2>MY SKILLS</h2>

        <h4>
          For those that know what they're checking out. We build beautiful,
          search engine optimized websites for businesses which ensures
          increased productivity and credibility plus your business gets top
          list in searches over 70% of the time!
        </h4>

        <Slider {...settings} className='w-[95%] mx-auto'>
          {skillsData.map((obj) => {
            return (
              <div className="card bg-gray-700 h-24 md:h-32" key={obj.image}>
                <img src={obj.image || ""} className="w-full h-16 rounded-t-lg md:h-24" alt="tool-image" />
                <h3 className="text-sm text-center mb-3">{obj.title || ""}</h3>
              </div>
            )
          })}
        </Slider>
      </div>
    </section>
  )
}

export default Skills