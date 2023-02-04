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
    <section className="shadow-lg px-5 py-10 lg:px-20" id="testimonial">
      <div
        className="bg-[url('https://img.freepik.com/free-photo/rear-view-businessman-talking-phone-city_53876-129657.jpg?size=626&ext=jpg&uid=R55806939&ga=GA1.1.405634466.1654584137&semt=sph')] bg-no-repeat bg-cover bg-center rounded-2xl">
        {/* container holding the contact form */}
        <div className="lg:w-2/5 w-full bg-yellow-500 bg-opacity-40 rounded-2xl text-white p-5">
          <h3 className="text-2xl font-extrabold mb-3">I will love to hear your feedback</h3>
          <form onSubmit={handleSend} autoComplete="false">
            <div className="form-control">
              <label htmlFor="rating" className="flex items-center gap-1">Rate my service: {user.ratings}<FaStar className="text-base text-yellow-500"/></label>
              <input type="range" name="ratings"  min={0} max={5} value={user.ratings} onChange={handleChange} />
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
    </section>
  )
}

export default Feedback