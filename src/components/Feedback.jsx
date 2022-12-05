import { useState } from "react";
import { FaStar } from 'react-icons/fa'
import axios from "axios";

const Feedback = () => {  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  const [user, setUser] = useState({
    Name: "", Email: "", Testimonial: "", Rating: 10
  });

  const disabledState = (user.Name === "" || user.Email === "" || user.Testimonial === "")

  const handleSend = (e) => {
    e.preventDefault();
    let userRating = {
      Name: user.Name, Email: user.Email, Testimonial: user.Testimonial, Rating: user.Rating
    }
    setLoading(true);
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
    <section className="bg-gray-700 shadow-lg flex flex-row items-center mx-auto px-5 py-10 xl:px-10" id="testimonial">
      <div
        className="lg:w-3/5 w-full bg-gradient-to-r from-yellow-700 to-yellow-400 lg:from-yellow-700 lg:via-yellow-400 lg:to-transparent rounded-lg text-white p-5">
        {/* container holding the contact form */}
        <div className="lg:w-1/2">
          <h3 className="text-2xl font-extrabold mb-3">I will love to hear your feedback</h3>
          <form onSubmit={handleSend} autoComplete="false">
            <div className="form-control">
              <label htmlFor="rating" className="flex items-center gap-1">Rate my service: {user.Rating}<FaStar className="text-base text-slate-700"/></label>
              <input type="range" name="Rating" min={0} max={10} value={user.Rating} onChange={handleChange} />
            </div>
            <div className="form-control">
              <label htmlFor="Name">Full name:</label>
              <input id="Name" type="text" name="Name" value={user.Name} onChange={handleChange} minLength="4" maxLength="50" placeholder="Enter your full name" required/>
            </div>
            <div className="form-control">
              <label htmlFor="Email">Email:</label>
              <input id="Email" type="Email" name="Email" value={user.Email} onChange={handleChange} minLength="8" maxLength="50" placeholder="Enter your email" required/>
            </div>
            <div className="form-control">
              <label htmlFor="Testimonial">Comment:</label>
              <textarea id="Testimonial" name="Testimonial" cols="30" rows="5" value={user.Testimonial} onChange={handleChange} minLength="50" maxLength="150" placeholder="Write your message here..." required></textarea>
            </div>

            {loading ? <p className='text-center text-white my-3'>Sending...</p> : error ? <p className='text-center text-red-500 my-3'>{error}</p> : data && <p className='text-center text-white my-3'>Feedback sent!</p>}

            <button type="submit" disabled={disabledState} className="bg-gray-700 text-slate-200 px-4 py-2 rounded-lg ease-linear duration-300 disabled:bg-gray-400">SEND</button>
          </form>
        </div>
      </div>

      {/* container holding the image which is hidden on mobile */}
      <div className="w-full hidden lg:w-2/5 lg:flex lg:flex-row">
        <img src="https://cdn.pixabay.com/photo/2013/07/13/13/18/man-160788__340.png" className="h-96 mx-auto" alt="contact_image"/>
      </div>
    </section>
  )
}

export default Feedback