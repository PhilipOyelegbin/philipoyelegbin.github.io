import { useState } from "react";
import { FaExclamation, FaStar } from 'react-icons/fa'
import axios from "axios";
import { toast } from "react-toastify";

const Feedback = () => {
  const [user, setUser] = useState({
    full_name: "", email: "", comment: "", rating: 5
  });

  const errorMessage = {
    full_name: "Required and must be minimum of 4 characters", email: "Required and must be a valid email address", comment: "Required and minimum of 50 characters",
  }

  const disabledState = (user.full_name === "" || user.full_name.length < 4 || user.email === "" || !user.email.includes("@") || user.comment === "" || user.comment.length < 50)

  const handleSend = (e) => {
    e.preventDefault();
    let userRating = {
      full_name: user.full_name, email: user.email, comment: user.comment, rating: user.rating
    }
    axios.post(process.env.REACT_APP_FEEDBACK_URL,userRating)
    .then(() => {
      toast.success("Feedback sent!")
      setUser({full_name: "", email: "", comment: "", rating: 5})
    })
    .catch(error => {
      error.message && toast.error("Unable to send feedback.");
    });
  };

  const handleChange = (e) => {
    setUser({...user, [e.target.name] : e.target.value})
  };

  return (
    <section className="shadow-lg px-5 py-10 lg:px-20" id="testimonial">
      <div
        className="bg-[url('https://img.freepik.com/free-photo/rear-view-businessman-talking-phone-city_53876-129657.jpg?size=626&ext=jpg&uid=R55806939&ga=GA1.1.405634466.1654584137&semt=sph')] bg-no-repeat bg-cover bg-center rounded-2xl">
        {/* container holding the contact form */}
        <div className="lg:w-2/5 w-full bg-yellow-500 bg-opacity-30 rounded-2xl text-white p-5">
          <h3 className="text-2xl font-extrabold mb-3">I will love to hear your feedback</h3>
          <form onSubmit={handleSend} autoComplete="false">
            <div className="form-control">
              <label htmlFor="rating" className="flex items-center gap-1">Rate my service: {user.rating}<FaStar className="text-base text-yellow-500"/></label>
              <input type="range" name="rating"  min={0} max={5} value={user.rating} onChange={handleChange} />
            </div>
            <div className="form-control">
              <label htmlFor="full_name">Full name:</label>
              <input id="full_name" type="text" name="full_name" value={user.full_name} onChange={handleChange} minLength="4" maxLength="50" placeholder="Enter your full name" required/>
              {(user.full_name == "" || user.full_name.length < 4) && <p className="flex items-center text-red-500 text-xs"><FaExclamation/> {errorMessage.full_name}</p>}
            </div>
            <div className="form-control">
              <label htmlFor="email">Email:</label>
              <input id="email" type="email" name="email" value={user.email} onChange={handleChange} placeholder="Enter your email" required/>
              {(user.email == "" || !user.email.includes("@")) && <p className="flex items-center text-red-500 text-xs"><FaExclamation/> {errorMessage.email}</p>}
            </div>
            <div className="form-control">
              <label htmlFor="comment">Comment:</label>
              <textarea id="comment" name="comment" cols="30" rows="5" value={user.comment} onChange={handleChange} minLength="50" maxLength="150" placeholder="Write your message here..." required></textarea>
              {(user.comment == "" || user.comment.length < 50) && <p className="flex items-center text-red-500 text-xs"><FaExclamation/> {errorMessage.comment}</p>}
            </div>

            <button type="submit" disabled={disabledState} className="bg-gray-700 text-slate-200 px-4 py-2 rounded-lg ease-linear duration-300 disabled:bg-gray-400">SEND</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Feedback