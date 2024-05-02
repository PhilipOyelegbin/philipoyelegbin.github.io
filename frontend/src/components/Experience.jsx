import { ExperienceData } from "./data"

const Experience = () => {
  return (
    <section className="px-3 py-5 ld:px-20">
      <div className="flex flex-wrap justify-center gap-5">
        {ExperienceData?.map((education, index) => (
          <div key={index} className="bg-slate-700 bg-opacity-30 shadow-md shadow-slate-300 p-3 rounded-2xl ease-in-out duration-300 hover:-translate-y-2 text-center w-[280px]">
            <h3>{education.role}</h3>
            <p>{education.company}</p>
            <p>{education.duration}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience