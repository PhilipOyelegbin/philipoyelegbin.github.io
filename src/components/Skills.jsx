import Slider from "react-slick";
import figma from '/src/assets/figma.png';
import html from "/src/assets/html.png"
import css from "/src/assets/css.png"
import sass from "/src/assets/sass.png"
import bootstrap from "/src/assets/bootstrap.jpg"
import tailwind from "/src/assets/tailwind.png"
import javascript from "/src/assets/javascript.png"
import react from "/src/assets/react.png"
import redux from "/src/assets/redux.png"
import git from "/src/assets/git.png"
import vs_code from "/src/assets/vs-code.jpg"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Skills = () => {
  const skills = [
    {cover_image: figma, label: "Figma"},
    {cover_image: html, label: "HTML"},
    {cover_image: css, label: "CSS"},
    {cover_image: sass, label: "Sass"},
    {cover_image: bootstrap, label: "Bootsrap"},
    {cover_image: tailwind, label: "Tailwind"},
    {cover_image: javascript, label: "JavaScript"},
    {cover_image: react, label: "React"},
    {cover_image: redux, label: "Redux"},
    {cover_image: git, label: "Git"},
    {cover_image: vs_code, label: "VS Code"},
  ]

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
    <section className="bg-gray-600 text-center mx-auto px-5 py-10 xl:px-10" id="skills">
      <h2>MY SKILLS</h2>
      <p className="xl:text-center">For those that know what they're checking out. I build beautiful, search engine optimized websites for businesses which ensures increased productivity and credibility plus your business gets <strong>top list in searches over 70% of the time!</strong></p>

      <Slider {...settings} className='w-[93%] mx-auto'>
        {skills?.map((skill, index) => {
          return(
            <figure className="card bg-gray-700 hover:shadow-md hover:shadow-gray-500 h-24 md:h-32" key={index}>
              <img src={skill.cover_image || ""} loading="lazy" className="w-full h-16 rounded-t-lg md:h-24" alt="tool-image" />
              <figcaption>
                <h3 className="text-sm text-center mb-3">{skill.label || ""}</h3>
              </figcaption>
            </figure>
          )
        })}
      </Slider>
    </section>
  )
}

export default Skills