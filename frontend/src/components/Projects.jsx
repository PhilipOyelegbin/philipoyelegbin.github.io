import Slider from "react-slick";
import { FaInternetExplorer, FaGithub, FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getData } from "../hooks/useFetch";

const Projects = () => {
  const {data, error, loading} = getData(process.env.REACT_APP_PROJECT_URL);

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
    <section className="text-center px-5 py-10 lg:px-20" id="projects">
      <h2>MY WORKS</h2>
      <p className="lg:text-center">Here is a selection of my most recent work, <strong>view my other works on <a href="https://github.com/PhilipOyelegbin" className="text-yellow-500">GitHub</a>.</strong></p>

      {loading ? <h3 className="text-2xl text-center">Loading...</h3> : error && <h3 className="text-2xl text-center">Unable to fetch data</h3>}

      <Slider {...settings}>
        {data && data?.map(project => {
          return (
            <figure className="card bg-gray-600 hover:shadow-md hover:shadow-yellow-500 h-[490px]" key={project._id}>
              <img src={project.cover_image || "Unavailable"} className="w-full rounded-t-lg h-56" alt="project background" />
              <figcaption className="p-3">
                <h3 className="text-xl">{project.title || "Unavailable"}</h3>
                <p className="text-sm">{project.description || "Unavailable"}</p>
                <div className="flex gap-5 items-center text-2xl mt-3">
                  <a href={project.project_url} className="hover:text-yellow-500" target="_blank" rel="noopener noreferrer"><FaInternetExplorer/></a>
                  <a href={project.github_url} className="hover:text-yellow-500" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
                </div>
              </figcaption>
            </figure>
          )
        })}
      </Slider>
    </section>
  )
}

export default Projects