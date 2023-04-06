import { EducationData } from "./data"

const Education = () => {
  return (
    <section className="px-3 py-5 lg:px-20">
        <div className="flex flex-wrap md:justify-center gap-5">
            {EducationData?.map((education, index) => (
                <div key={index} className="shadow-md shadow-gray-500 p-3 rounded-2xl ease-in-out duration-300 hover:-translate-y-2">
                    <h3>{education.certificate}</h3>
                    <p>{education.institution}</p>
                    <p>{education.duration}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Education