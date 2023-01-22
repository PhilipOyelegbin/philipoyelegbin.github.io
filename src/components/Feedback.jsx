import { useState } from "react";
import { FaStar } from 'react-icons/fa'
import axios from "axios";

const Feedback = () => {  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  const [user, setUser] = useState({
    full_name: "", email: "", comment: "", ratings: 5
  });

  const disabledState = (user.full_name === "" || user.email === "" || user.comment === "")

  const handleSend = (e) => {
    e.preventDefault();
    let userRating = {
      full_name: user.full_name, email: user.email, comment: user.comment, ratings: user.ratings
    }
    setLoading(true);
    axios.post("https://portfolio-api.up.railway.app/philip-reviews",
      userRating).then(() => {
      setLoading(false);
      setData(userRating);
    }).catch(error => {
      setLoading(false);
      console.log(error);
      setError(error.message && "Unable to send feedback!");
    });
    setUser({
      full_name: "", email: "", comment: "", ratings: 5
    })
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
              <label htmlFor="rating" className="flex items-center gap-1">Rate my service: {user.ratings}<FaStar className="text-base text-slate-700"/></label>
              <input type="range" name="ratings" min={0} max={5} value={user.ratings} onChange={handleChange} />
            </div>
            <div className="form-control">
              <label htmlFor="full_name">Full name:</label>
              <input id="full_name" type="text" name="full_name" value={user.full_name} onChange={handleChange} minLength="4" maxLength="50" placeholder="Enter your full name" required/>
            </div>
            <div className="form-control">
              <label htmlFor="email">Email:</label>
              <input id="email" type="email" name="email" value={user.email} onChange={handleChange} minLength="8" maxLength="50" placeholder="Enter your email" required/>
            </div>
            <div className="form-control">
              <label htmlFor="comment">Comment:</label>
              <textarea id="comment" name="comment" cols="30" rows="5" value={user.comment} onChange={handleChange} minLength="50" maxLength="150" placeholder="Write your message here..." required></textarea>
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