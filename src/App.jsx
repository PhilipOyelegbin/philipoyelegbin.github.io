import React, {useState, useEffect} from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Projects from './components/Projects'
import Service from './components/Service'
import Skills from './components/Skills'
import loader from './assets/loader.gif'

const App = () => {
  // const [load, setLoad] = useState(false);
  // const [count, setCount] = useState(0)
  // useEffect(() => {
  //   while (count < 5) {
  //     setLoad(true);
  //     setCount(count + 1)
  //   }
  // }, [count])

  // whatsapp chatbot
  (function () {
    var options = {
      whatsapp: "+2348054945601", // WhatsApp number
      call_to_action: "Hire me", // Call to action
      position: "right", // Position may be 'right' or 'left'
    };
    var proto = document.location.protocol,
      host = "getbutton.io",
      url = proto + "//static." + host;
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = url + "/widget-send-button/js/init.js";
    s.onload = function () {
      WhWidgetSendButton.init(host, proto, options);
    };
    var x = document.getElementsByTagName("script")[0];
    x.parentNode.insertBefore(s, x);
  })();

  return (
    <>
      {/* preloader */}
      {/* <div className={`preloader ${load ? 'hidden' : 'flex'}`}>
        <img src={loader} alt="loading" />
      </div> */}
      <Nav/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Service/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App