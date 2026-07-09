import { skillGroups } from '../data.js'

export default function Skills() {
  return (
    <section id="skills">
      <div className="eyebrow">skills</div>
      <h2>Toolbox</h2>
      <div className="skill-groups">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.title}>
            <h4>{group.title}</h4>
            <div className="tags">
              {group.items.map((item) => (
                <span className="tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
