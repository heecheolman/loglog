import React from 'react'
import './toc.scss'

const Toc = ({ headings = [], fixed = false }) => {
  const tocs = headings.map((heading, index) => {
    return (
      <li key={`toc-${index}`} className={`toc toc-depth-${heading.depth}`}>
        <a href={`#${heading.id}`} className="toc-anchor">
          <span>{heading.value}</span>
        </a>
      </li>
    )
  })
  const styleProps = fixed
    ? {
        position: 'fixed',
        top: '20px',
      }
    : {}

  return (
    <div className="toc-wrap" style={styleProps}>
      <div className="toc-head">목차</div>
      <ol>{tocs}</ol>
    </div>
  )
}

export default Toc
