import { useEffect, useState } from "react";
import { Skeleton } from "./Skeleton";

const Testimonial = () => {
  const [loading, setLoading] = useState(true);
  const [testimonials, setTestimonials] = useState();
  const [errorMsg, setErrorMsg] = useState();

  useEffect(() => {
    fetch("/api/feedbacks")
      .then((resp) => resp.json())
      .then((data) => setTestimonials(data.feedbackData))
      .catch((err) =>
        setErrorMsg("Unable to load testimonials, try again later")
      )
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className='px-5 py-10 lg:px-20'>
      <h2 className='text-center'>TESTIMONIAL</h2>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto"> */}
      <div className='flex flex-wrap justify-center items-center gap-5 mx-auto mt-5'>
        {loading ? (
          Array(5)
            .fill(0)
            .map((d, index) => <Skeleton key={index} />)
        ) : errorMsg ? (
          <p className='text-2xl text-center'>{errorMsg}</p>
        ) : testimonials?.length < 1 ? (
          <p className='text-2xl text-center'>No testimonial yet...</p>
        ) : (
          testimonials &&
          testimonials?.map((testimony) => (
            <div
              className='card max-w-[400px] bg-slate-700 bg-opacity-30 text-center hover:-translate-y-2 p-3'
              key={testimony.email}
            >
              <h3 className='text-2xl mb-2'>{testimony.full_name}</h3>
              <p>{testimony.comment}</p>
              <p className='mt-2 text-purple-700'>
                Rated: {testimony.rating}.0
              </p>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Testimonial;
