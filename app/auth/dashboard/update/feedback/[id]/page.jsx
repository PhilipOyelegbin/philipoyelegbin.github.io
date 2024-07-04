"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FaStar } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  const path = usePathname();
  const dataPath = path.split("/").splice(5);
  const navigate = useRouter();
  const [loading, setLoading] = useState(true);
  const [testimonials, setTestimonials] = useState({
    full_name: "",
    email: "",
    comment: "",
    rating: "",
    approved: "",
  });
  const [errorMessage, setErrorMessage] = useState();

  const handleChange = (e) => {
    setTestimonials({ ...testimonials, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await fetch(`/api/feedbacks/${dataPath}`, {
      method: "PATCH",
      body: JSON.stringify(testimonials),
    })
      .then(() => {
        setTestimonials({
          full_name: "",
          email: "",
          comment: "",
          rating: "",
          approved: "",
        });
        navigate.push("/");
      })
      .catch((error) => {
        error.message && toast.error("An error occured!");
      });
  };

  useEffect(() => {
    fetch(`/api/feedbacks/${dataPath}`)
      .then((resp) => resp.json())
      .then((data) => setTestimonials(data.feedbackData))
      .catch((err) =>
        setErrorMessage("Unable to load testimonials, try again later")
      )
      .finally(() => setLoading(false));
  }, []);

  return (
    <article className='pt-16 pb-10 lg:h-screen flex flex-col-reverse md:flex-row gap-10 justify-center items-center px-5 lg:px-20'>
      <form onSubmit={handleUpdate} autoComplete='false'>
        <div className='form-control'>
          <label htmlFor='full_name'>Full name:</label>
          <input
            id='full_name'
            type='text'
            name='full_name'
            value={testimonials.full_name}
            onChange={handleChange}
            minLength='4'
            maxLength='50'
            placeholder='Enter your full name'
            required
            readOnly
          />
          {/* {(testimonials.full_name === "" ||
            testimonials.full_name.length < 4) && (
            <p className='flex items-center text-red-500 text-xs'>
              <FaExclamation /> {errorMessage.full_name}
            </p>
          )} */}
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email:</label>
          <input
            id='email'
            type='email'
            name='email'
            value={testimonials.email}
            onChange={handleChange}
            placeholder='Enter your email'
            required
            readOnly
          />
          {/* {(testimonials.email === "" || !testimonials.email.includes("@")) && (
            <p className='flex items-center text-red-500 text-xs'>
              <FaExclamation /> {errorMessage.email}
            </p>
          )} */}
        </div>
        <div className='form-control'>
          <label htmlFor='approved'>Approved:</label>
          <input
            id='approved'
            type='text'
            name='approved'
            value={testimonials.approved}
            onChange={handleChange}
            minLength='4'
            maxLength='50'
            placeholder='Enter feedback status'
            required
          />
          {/* {(testimonials.full_name === "" ||
            testimonials.full_name.length < 4) && (
            <p className='flex items-center text-red-500 text-xs'>
              <FaExclamation /> {errorMessage.full_name}
            </p>
          )} */}
        </div>
        <div className='form-control'>
          <label htmlFor='comment'>Comment:</label>
          <textarea
            id='comment'
            name='comment'
            cols='30'
            rows='5'
            value={testimonials.comment}
            onChange={handleChange}
            minLength='50'
            maxLength='150'
            placeholder='Write your message here...'
            required
            readOnly
          ></textarea>
          {/* {(testimonials.comment === "" ||
            testimonials.comment.length < 50) && (
            <p className='flex items-center text-red-500 text-xs'>
              <FaExclamation /> {errorMessage.comment}
            </p>
          )} */}
        </div>

        <button type='submit' className='btn'>
          SEND
        </button>
        <ToastContainer
          position='top-right'
          autoClose={2000}
          closeOnClick
          pauseOnFocusLoss
          pauseOnHover
        />
      </form>
      <aside className='flex-1 text-center bg-slate-200 p-5'>
        <Image
          src='/hero-bg.jpg'
          className='hidden md:block w-full h-80 object-fill mb-5'
          width={300}
          height={100}
          alt='banner'
        />
        <h2>Administrator</h2>
        <h4>Your are signed in as an admin now.</h4>
        <Link href='/auth/dashboard' className='btn'>
          Go to Dashboard
        </Link>
      </aside>
    </article>
  );
};

export default page;
