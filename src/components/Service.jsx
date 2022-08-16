import binoculars from '../assets/binoculars.svg';
import pencil from '../assets/pencil.svg';
import columns from '../assets/columns.svg';

const Service = () => {
  const services = [
    {id: 1, icon: binoculars, title: "Vision", summary: "You need a beautiful and functional website that will inspire and connect with their visitors, aiming to convert website visitors into clients."},
    {id: 2, icon: pencil, title: "Plan", summary: "Actualizing your vision requires a strategic plan. This is where we analyze your target market and tailor the look of your site to your vision and your ideal client's needs using Figma."},
    {id: 3, icon: columns, title: "Build", summary: "This is where I implement the plan to make your vision come alive on the web page. With the language of computers, I build the structure, give it an attractive look, make it interactive and host it on the web."}
  ];

  return (
    <section className="bg-gray-600 text-center py-10" id="service">
      <div className="container mx-auto px-5">
        <h2>ACTUALIZATION</h2>
        <h4>Web design for businesses! From conception to product UI/UX and developing web pages, I've got you covered. <strong>Here's how it works</strong></h4>

        {/* grid view of the services in a container */}
        <div className="grid grid-flow-row grid-cols-1 gap-5 mt-5 lg:grid-cols-3">
          {services?.map(service => {
            return (
              <div className="card bg-gray-700 w-11/12 mx-auto lg:h-72" key={service.id}>
                <figure>
                  <img className='mx-auto' src={service.icon || ""} alt="icon" />
                  <figcaption className="p-3">
                    <h3 className='text-xl text-center font-bold'>{service.title || ""}</h3>
                    <p>{service.summary || ""}</p>
                  </figcaption>
                </figure>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Service