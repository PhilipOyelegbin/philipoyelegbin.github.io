import React, { useEffect, useState } from 'react';
import Body from './components/Body';
import Loader from './components/Loader';
import 'animate.css';

const App = () => {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setLoad(false);
    }, 3000);
  }, []);

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
      {
        load === true ? <Loader /> : <Body/>
      }
    </>
  )
}

export default App