import React from 'react'
import { serviceData } from './data'

const Service = () => {
  return (
    <section className="bg-gray-600 text-center py-10" id="service">
      <div className="container mx-auto px-5">
        <h2>ACTUALIZATION</h2>
        <h4>Web design for businesses! From conception to product UI/UX and developing web pages, I've got you covered. <strong>Here's how it works</strong></h4>

        {/* grid view of the services in a container */}
        <div className="grid grid-flow-row grid-cols-1 gap-5 mt-5 lg:grid-cols-3">
          {serviceData?.map(obj => {
            return (
              <div className="card bg-gray-700 w-11/12 mx-auto lg:h-72" key={obj.title}>
                <figure>
                  <img className='mx-auto' src={obj.icon || ""} alt="icon" />
                  <figcaption className="p-3">
                    <h3 className='text-xl text-center font-bold'>{obj.title || ""}</h3>
                    <p>{obj.summary || ""}</p>
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