import { getData } from "../hooks/useFetch";
const Testimonial = () => {
    const {loading, error, data} = getData("https://api.steinhq.com/v1/storages/630773147bccea08c1140ad1/Sheet1");
    
  return (
    <section className="bg-gray-700 px-5 py-10 xl:px-10">
        <h2 className="text-center">TESTIMONIAL</h2>
        <div className="flex flex-wrap justify-center gap-5">
            {loading ? <p className="text-2xl text-center">Loading...</p> : error ? error : data.length < 1 ? <p className="text-2xl text-center">No testimonial yet...</p> : data?.map(testimony =>
                (
                    <div className="card bg-gray-600 text-center hover:-translate-y-2" key={testimony.Email}>
                        <h3 className="text-2xl">{testimony.Name}</h3>
                        <p>{testimony.Testimonial}</p>
                        <p>Rated: {testimony.Rating}.0</p>
                    </div>
                )
            )}
        </div>
    </section>
  )
}

export default Testimonial