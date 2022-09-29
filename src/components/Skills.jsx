import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {getData} from "../hooks/useFetch";


const Skills = () => {
  const {loading, error, data} = getData("https://trusting-lizard-91.hasura.app/api/rest/my-skills");

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
    <section className="bg-gray-600 text-center mx-auto px-5 py-10 xl:px-10" id="skills">
      <h2>MY SKILLS</h2>
      <p className="xl:text-center">For those that know what they're checking out. I build beautiful, search engine optimized websites for businesses which ensures increased productivity and credibility plus your business gets <strong>top list in searches over 70% of the time!</strong></p>

      <Slider {...settings} className='w-[93%] mx-auto'>
        {loading ? (<h3 className="text-2xl text-center">Loading...</h3>) : error ? (<h3 className="text-2xl text-center">Unable to fetch data</h3>) : data && data.skill?.map(skills => {
          return(
            <figure className="card bg-gray-700 h-24 md:h-32" key={skills.id}>
              <img src={skills.image || ""} className="w-full h-16 rounded-t-lg md:h-24" alt="tool-image" />
              <figcaption>
                <h3 className="text-sm text-center mb-3">{skills.label || ""}</h3>
              </figcaption>
            </figure>
          )
        })}
      </Slider>
    </section>
  )
}

export default Skills