import { experience } from '../data.js'

export default function Experience() {
  return (
    <section id="experience">
      <div className="eyebrow">experience</div>
      <h2>Career</h2>
      {experience.map((job) => (
        <div className="role-entry" key={job.company}>
          <time>{job.period}</time>
          <div>
            <h3>{job.title}</h3>
            <div className="company">{job.company}</div>
            <p>{job.description}</p>
          </div>
        </div>
      ))}
    </section>
  )
}
