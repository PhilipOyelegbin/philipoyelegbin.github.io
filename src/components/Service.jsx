import { Services } from "./data"

const Service = () => {
  return (
    <section className="bg-gray-600 text-center mx-auto px-5 py-10 xl:px-10" id="service">
      <h2>ACTUALIZATION</h2>
      <p className='lg:text-center'>Web design for businesses! From conception to product UI/UX and developing web pages, I've got you covered. <strong>Here's how it works</strong></p>

      {/* grid view of the services in a container */}
      <div className="grid grid-flow-row grid-cols-1 gap-5 mt-5 lg:grid-cols-3">
        {Services?.map(service => {
          return (
            <figure className="card bg-gray-700 w-11/12 mx-auto lg:h-72" key={service.id}>
              <img className='mx-auto mt-5' src={service.icon || ""} alt="icon" />
              <figcaption className="p-3">
                <h3 className='text-xl text-center font-bold'>{service.title || ""}</h3>
                <p>{service.summary || ""}</p>
              </figcaption>
            </figure>
          )
        })}
      </div>
    </section>
  )
}

export default Service