import React from 'react'
import styled from '@emotion/styled'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

import { ANIMATION } from '../../config/ui'

const Toggle = props => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <StyledLabel {...props}>
          <StyledInput
            type="checkbox"
            onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
            checked={theme === 'dark'}
          />
          <Slider />
        </StyledLabel>
      )}
    </ThemeToggler>
  )
}

export default Toggle

const StyledLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 22px;
`

const Slider = styled.div`
  position: absolute;
  cursor: pointer;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #dcdcdc;
  transition: ${ANIMATION.duration.default} all ${ANIMATION.function.default};
  border-radius: 34px;

  &:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 3px;
    background-color: #fff;
    transition: inherit;
    border-radius: inherit;
  }
`

const StyledInput = styled.input`
  width: 0;
  height: 0;
  opacity: 0;

  &:checked + ${Slider} {
    background-color: var(--primary);
  }
  &:checked + ${Slider}:before {
    transform: translateX(16px);
  }
`
