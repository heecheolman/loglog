import React from 'react'
import './index.scss'

const Divider = ({ type = 'horizontal' }) => {
  return (
    <div
      className={
        type === 'horizontal' ? 'divider-horizontal' : 'divider-vertical'
      }
    />
  )
}

export default Divider
