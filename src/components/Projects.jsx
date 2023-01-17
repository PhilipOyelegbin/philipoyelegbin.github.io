import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { getData } from "../hooks/useFetch";

const Projects = () => {
  const {data, error, loading} = getData("https://portfolio-api.up.railway.app/philip-projects");

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    cssEase: "linear",
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  };

  // function to control the slide to the next slide
  function NextArrow({className, style, onClick}) {
    return (
      <div className={className}
      style={{ ...style, display: "block"}} onClick={onClick}/>
    );
  }

  // function to control the slide to the previous slide
  function PrevArrow({className, style, onClick}) {
    return (
      <div className={className}
      style={{ ...style, display: "block"}} onClick={onClick}/>
    );
  }
  
  return (
    <section className="bg-gray-700 text-center mx-auto px-5 py-10 xl:px-10" id="projects">
      <h2>MY WORKS</h2>
      <p className="lg:text-center">Here is a selection of my most recent work, <strong>click on each card to view</strong>. View the remainder of my work on <a href="https://github.com/PhilipOyelegbin" className="text-yellow-500">GitHub</a>.</p>

      <Slider {...settings} className='w-[95%] mx-auto'>
        {loading ? (<h3 className="text-2xl text-center">Loading...</h3>) : error ? (<h3 className="text-2xl text-center">Unable to fetch data</h3>) : data.results && data.results?.map(project => {
          return (
            <a href={project.link || "#"} target="_blank" rel="noopener noreferrer" className="card bg-gray-600 hover:shadow-md hover:shadow-gray-500 h-96" key={project.id}>
              <img src={project.cover_image || "Unavailable"} className="w-full rounded-t-lg h-56" alt="tool-image" />
              <div className="p-3">
                <h3 className="text-xl">{project.name || "Unavailable"}</h3>
                <p className="text-sm">{project.description || "Unavailable"}</p>
              </div>
            </a>
          )
        })}
      </Slider>
    </section>
  )
}

export default Projects