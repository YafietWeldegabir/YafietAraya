import { profile } from '../data.js'

export default function About() {
  return (
    <section id="about">
      <div className="eyebrow">about</div>
      <h2>Background</h2>
      <p className="body-text">{profile.summary}</p>
    </section>
  )
}
