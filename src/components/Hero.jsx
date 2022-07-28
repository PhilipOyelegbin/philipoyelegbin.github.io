const Hero = () => {
  return (
    <header className="h-screen bg-hero bg-no-repeat bg-cover bg-center md:bg-right bg-fixed" id="home">
      <div
        className="flex flex-col justify-center items-center h-full bg-black bg-opacity-50 text-center px-5 mt-5 md:mt-0">
        <h1 className="font-extrabold text-slate-300 text-4xl">Build a website that suits your business</h1>

        <h3 className="font-extrabold text-slate-300 text-2xl mt-5">You are never offline! <strong>Stay ahead of you industry</strong> and in front of your clients wherever they may be, round the clock.</h3>

        <a className="btn" href="https://drive.google.com/file/d/1YHWVkIrBCw-pVE2el2StjBDx8Qeryc8f/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">Resume</a>
      </div>
    </header>
  )
}

export default Hero