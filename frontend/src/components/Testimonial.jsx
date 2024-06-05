import { getData } from "../hooks/useFetch";
import { Skeleton } from "./Skeleton";

const Testimonial = () => {
  const { loading, error, data } = getData(process.env.REACT_APP_FEEDBACK_URL);

  return (
    <section className='px-5 py-10 lg:px-20'>
      <h2 className='text-center'>TESTIMONIAL</h2>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto"> */}
      <div className='flex flex-wrap justify-center items-center gap-5 mx-auto mt-5'>
        {loading ? (
          Array(7)
            .fill(0)
            .map((d, index) => <Skeleton key={index} />)
        ) : error ? (
          <p className='text-2xl text-center'>Unable to load testimonial</p>
        ) : data.length < 1 ? (
          <p className='text-2xl text-center'>No testimonial yet...</p>
        ) : (
          data &&
          data?.map((testimony) => (
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
