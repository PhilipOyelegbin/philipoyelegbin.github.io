"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const page = () => {
  const dataPath = usePathname().split("/").splice(5);

  const [loading, setLoading] = useState();
  const [testimonials, setTestimonials] = useState({
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState();

  // const handleChange = (e) => {
  //   setTestimonials({ ...testimonials, [e.target.name]: e.target.value });
  // };

  // const handleUpdate = async (e) => {
  //   e.preventDefault();
  //   await fetch(`/api/feedbacks/${dataPath}`, {
  //     method: "PATCH",
  //     body: JSON.stringify(testimonials),
  //   })
  //     .then(() => {
  //       toast.success("Login passed!");
  //       setUser({ email: "", password: "" });
  //     })
  //     .catch((error) => {
  //       error.message && toast.error("Invalid details!");
  //     });
  // };

  console.log(testimonials);

  useEffect(() => {
    fetch(`/api/feedbacks/${dataPath}`)
      .then((resp) => resp.json())
      .then((data) => setTestimonials(data.feedbackData))
      .catch((err) =>
        setErrorMsg("Unable to load testimonials, try again later")
      )
      .finally(() => setLoading(false));
  }, []);

  return (
    <article className='h-screen flex justify-center items-center'>
      {testimonials?.email || "Error"}
    </article>
  );
};

export default page;
