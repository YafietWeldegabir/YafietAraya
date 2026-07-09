import { education, certifications } from '../data.js'

export default function Education() {
  return (
    <>
      <section id="education">
        <div className="eyebrow">education</div>
        <h2>Education</h2>
        {education.map((item) => (
          <div className="role-entry" key={item.degree}>
            <time>{item.period}</time>
            <div>
              <h3>{item.degree}</h3>
              <div className="company">{item.school}</div>
            </div>
          </div>
        ))}
      </section>

      <section id="certifications">
        <div className="eyebrow">certifications</div>
        <h2>Professional development</h2>
        {certifications.map((cert) => (
          <div className="project" key={cert.title}>
            <div className="project-head">
              <h3>{cert.title}</h3>
            </div>
            <p>{cert.detail}</p>
          </div>
        ))}
      </section>
    </>
  )
}
