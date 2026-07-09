import { profile } from '../data.js'

export default function Footer({ theme }) {
  const line =
    theme === 'dark'
      ? `console.log("© 2026 ${profile.name} — deployed on GitHub Pages");`
      : `$ echo "© 2026 ${profile.name} — deployed on GitHub Pages"`

  return (
    <footer>
      <p>{line}</p>
      <div className="links">
        <a href={`mailto:${profile.email}`}>email</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          linkedin
        </a>
        {profile.instagram && (
          <a href={profile.instagram} target="_blank" rel="noreferrer">
            instagram
          </a>
        )}
        <a href={`tel:${profile.phone.replace(/[^0-9+]/g, '')}`}>{profile.phone}</a>
        {profile.github && (
          <a href={profile.github} target="_blank" rel="noreferrer">
            github
          </a>
        )}
      </div>
    </footer>
  )
}
