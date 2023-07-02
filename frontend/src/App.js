import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Body from './components/Body';
import Loader from './components/Loader';
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';

function App() {
  const [loading, setLoading] = useState(true);

  // whatsapp chatbot
  // (function () {
  //   var options = {
  //     whatsapp: "+2348078828296", // WhatsApp number
  //     call_to_action: "Hire me", // Call to action
  //     position: "right", // Position may be 'right' or 'left'
  //   };
  //   var proto = document.location.protocol,
  //     host = "getbutton.io",
  //     url = proto + "//static." + host;
  //   var s = document.createElement("script");
  //   s.type = "text/javascript";
  //   s.async = true;
  //   s.src = url + "/widget-send-button/js/init.js";
  //   s.onload = function () {
  //     WhWidgetSendButton.init(host, proto, options);
  //   };
  //   var x = document.getElementsByTagName("script")[0];
  //   x.parentNode.insertBefore(s, x);
  // })();

  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? <Loader /> : <Body/>}
      <ToastContainer position='top-right' autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </>
  )
}

export default App;
