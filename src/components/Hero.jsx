const Hero = () => {
  return (
    <header className="h-screen bg-[url('/src/assets/hero-bg.jpg')] bg-no-repeat bg-cover bg-center md:bg-right bg-fixed" id="home">
      <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-60 text-center px-5 mt-5 md:mt-0">
        <div className="flex flex-col justify-center gap-3 items-center md:w-3/5 animate__animated animate__fadeInUp animate__slow">
          <h1 className="font-extrabold text-3xl text-slate-300 md:text-5xl">Build a website that suits your business</h1>

          <h3 className="font-extrabold text-slate-300 text-xl mt-5 md:text-3xl">You are never offline! <strong>Stay ahead of you industry</strong> and in front of your clients wherever they may be, round the clock.</h3>

          <a className="btn" href="https://drive.google.com/file/d/1mXuH9LeHOygHlqw5rgqWqO72qZie-SvF/view?usp=sharing" target="_blank" rel="noopener noreferrer">My CV</a>
        </div>
      </div>
    </header>
  )
}

export default Hero