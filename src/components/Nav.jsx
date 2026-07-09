export default function Nav({ theme, toggleTheme }) {
  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="logo">&gt; yafiet.dev</div>
        <nav className="nav-links">
          <a href="#about">about</a>
          <a href="#experience">experience</a>
          <a href="#skills">skills</a>
          <a href="#education">education</a>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
          >
            <span className="knob"></span>
            <span className="label">{theme}</span>
          </button>
        </nav>
      </div>
    </header>
  )
}
