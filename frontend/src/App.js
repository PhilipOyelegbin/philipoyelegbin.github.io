import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Body from './components/Body';
import Loader from './components/Loader';
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';

function App() {
  const [loading, setLoading] = useState(true);

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
