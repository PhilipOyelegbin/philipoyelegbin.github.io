import { getData } from "../hooks/useFetch";

const Testimonial = () => {
    const {loading, error, data} = getData(import.meta.env.VITE_FEEDBACK_URL);

  return (
    <section className="px-5 py-10 lg:px-20">
        <h2 className="text-center">TESTIMONIAL</h2>
        <div className="flex flex-wrap justify-center gap-5">
            {loading ? <p className="text-2xl text-center">Loading...</p> : error ? <p className="text-2xl text-center">Unable to load testimonial</p> : data.length < 1 ? <p className="text-2xl text-center">No testimonial yet...</p> : data && data?.map(testimony =>
                (
                    <div className="card bg-gray-600 text-center hover:-translate-y-2 p-3" key={testimony.email}>
                        <h3 className="text-2xl mb-2">{testimony.full_name}</h3>
                        <p>{testimony.comment}</p>
                        <p className="mt-2 text-yellow-300">Rated: {testimony.rating}.0</p>
                    </div>
                )
            )}
        </div>
    </section>
  )
}

export default Testimonial