import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import './index.scss'

const Toggle = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <label className="switch">
          <input
            type="checkbox"
            onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
            checked={theme === 'dark'}
          />
          <div className="slider" />
        </label>
      )}
    </ThemeToggler>
  )
}

export default Toggle
