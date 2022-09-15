import { useState } from "react";
import axios from "axios";
import { FaStar } from 'react-icons/fa'

const Feedback = () => {
  const colors = {
    white: "FFF", grey: "#CCC"
  };
  const stars = Array(5).fill(0);
  const [current, setCurrent] = useState(0);
  const [hover, setHover] = useState(undefined);
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  const handleRate = value => {
    setCurrent(value)
  };

  const handleMouseDown = value => {
    setHover(value)
  };

  const handleMouseUp = () => {
    setHover(undefined)
  };

  const [user, setUser] = useState({
    Name: "", Email: "", Testimonial: ""
  });

  const handleSend = (e) => {
    e.preventDefault();
    let userRating = {
      Name: user.Name, Email: user.Email, Testimonial: user.Testimonial, Rating: current
    }
    setLoading(true);
    console.log(userRating);
    axios.post("https://api.steinhq.com/v1/storages/630773147bccea08c1140ad1/Sheet1",
      [userRating]).then(() => {
      setLoading(false);
      setData(userRating);
    }).catch(error => {
      setLoading(false);
      setError(error.message && "Unable to send feedback!");
    });
  };

  const handleChange = (e) => {
    setUser({...user, [e.target.name] : e.target.value})
  };

  return (
    <section className="bg-gray-700 py-10" id="testimonial">
      <div className="container mx-auto rounded-lg shadow-lg flex flex-row items-center">
        <div
          className="lg:w-3/5 w-full bg-gradient-to-r from-yellow-700 to-yellow-400 lg:from-yellow-700 lg:via-yellow-400 lg:to-transparent rounded-lg text-white p-5">
          {/* container holding the contact form */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-extrabold mb-3">I will love to hear your feedback</h3>
            <form onSubmit={handleSend} autoComplete="false">
              <div className="form-control">
                <label htmlFor="Name">Full name:</label>
                <input id="Name" type="text" name="Name" value={user.Name} onChange={handleChange} placeholder="Enter your full name" required/>
              </div>
              <div className="form-control">
                <label htmlFor="Email">Email:</label>
                <input id="Email" type="Email" name="Email" value={user.Email} onChange={handleChange} placeholder="Enter your email" required/>
              </div>
              <div className="form-control">
                <label htmlFor="Testimonial">Comment:</label> 
                <textarea id="Testimonial" name="Testimonial" cols="30" rows="5" value={user.Testimonial} onChange={handleChange} placeholder="Write your message here..." required></textarea>
              </div>
              <div className='flex justify-center gap-2 my-2'>
                  {stars.map((_, index) => {
                    return <FaStar key={index} className="cursor-pointer" onClick={() => handleRate(index + 1)} color={(hover || current) > index ? colors.white : colors.grey} onMouseOver={() => handleMouseDown(index + 1)} onMouseLeave={handleMouseUp}/>
                  })}
                </div>

              {loading ? <p className='text-center text-white my-3'>Sending...</p> : error ? <p className='text-center text-red-500 my-3'>{error}</p> : data && <p className='text-center text-white my-3'>Feedback sent!</p>}

              <button type="submit" className="bg-gray-700 text-slate-200 px-4 py-2 rounded-lg">SEND</button>
            </form>
          </div>
        </div>

        {/* container holding the image which is hidden on mobile */}
        <div className="w-full hidden lg:w-2/5 lg:flex lg:flex-row">
          <img src="https://cdn.pixabay.com/photo/2013/07/13/13/18/man-160788__340.png" className="h-96" alt="contact_image"/>
        </div>
      </div>
    </section>
  )
}

export default Feedback