import { Button } from "./ui/button"
import { EXPERIENCES } from "@/content/experiences"

const Timeline = () => {
  return (
    <section className="flex flex-col max-w-[800px]">
      <div className="relative border-l-4 border-slate-700 ml-6">
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="relative mb-10 ml-6 flex items-start gap-4">
            {/* Logo */}
            {experience.logo && (
              <img
                src={experience.logo}
                alt={`${experience.company} logo`}
                className="w-12 h-12 object-contain rounded-full border border-slate-300"
              />
            )}
            <div>
              <div className="absolute w-4 h-4 bg-slate-700 rounded-full -left-[34px] top-1.5"></div>
              <p className="text-sm text-gray-500">{experience.date}</p>
              <h3 className="text-xl font-semibold">{experience.jobTitle}</h3>
              <h4 className="text-md text-gray-700 font-medium">
                <a
                  href={experience.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="secondary">{experience.company}</Button>
                </a>
              </h4>
              <ul className="text-gray-600 mt-2 list-disc list-inside">
                {experience.description.map((item: string, idx: number) => (
                  <li key={idx}>{item.replace(/^- /, "")}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Timeline