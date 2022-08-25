import { useState } from "react";

const Feedback = () => {
  const [regError, setRegerror] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  const [user, setUser] = useState({Name: "", Email: "", Testimonial: ""});

  const handleSend = (e) => {
    e.preventDefault();
    setRegerror(false)
    if (user?.Name === "") {
        setRegerror('Full name cannot be empty')
    } else if (user?.Email === "") {
        setRegerror('Email cannot be empty')
    } else if (user?.Testimonial === "") {
        setRegerror('Comment cannot be empty')
    } else {
        setLoading(true);
        fetch("https://api.steinhq.com/v1/storages/630773147bccea08c1140ad1/Sheet1", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify([user])
        }).then(() => {
          setLoading(false);
          setData(user);
        })
        .catch(error => {
          setLoading(false);
          setError(error && "Unable to send feedback!");
        });
    };
  };

  const handleChange = (e) => {
    setUser({...user, [e.target.name] : e.target.value})
  };

  return (
    <section className="bg-gray-700 py-10" id="testimonial">
      <div className="container mx-auto rounded-lg shadow-lg flex flex-row">
        <div
          className="lg:w-3/5 w-full bg-gradient-to-r from-yellow-700 to-yellow-400 lg:from-yellow-700 lg:via-yellow-400 lg:to-transparent rounded-lg text-white p-5">
          {/* container holding the contact form */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-extrabold mb-3">I will love to hear your feedback</h3>
            <form onSubmit={handleSend}>
              <div className="form-control">
                <label htmlFor="Name">Full name:</label>
                <input type="text" name="Name" value={user.Name} onChange={handleChange} placeholder="Enter your full Name"/>
              </div>
              <div className="form-control">
                <label htmlFor="Email">Email:</label>
                <input type="Email" name="Email" value={user.Email} onChange={handleChange} placeholder="Enter your email"/>
              </div>
              <div className="form-control">
                <label htmlFor="Testimonial">Comment:</label> 
                <textarea name="Testimonial" cols="30" rows="5" value={user.Testimonial} onChange={handleChange} placeholder="Write your message here..."></textarea>
              </div>

              {regError ? <p className='text-center text-red-500 my-3'>{regError}</p> : loading ? <p className='text-center text-white my-3'>Sending...</p> : error ? <p className='text-center text-red-500 my-3'>{error}</p> : data && <p className='text-center text-white my-3'>Feedback sent!</p>}

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