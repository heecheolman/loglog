import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

import { ANIMATION } from '../../config/ui'

const StyledLinkButton = styled(Link)`
  height: 32px;
  background-color: transparent;
  outline: 0;
  border: 0;
  cursor: pointer;
  padding: 0 15px;
  height: 40px;
  font-size: 18px;
  margin: 0;
  border-radius: 8px;
  position: relative;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  white-space: nowrap;
  text-align: center;
  box-sizing: border-box;
  transition: ${ANIMATION.duration.fast} all ${ANIMATION.function.hover};
  background-color: var(--primaryButtonBg);
  color: var(--primaryButtonText);

  &:hover {
    background-color: var(--primaryButtonHoverBg);
  }
  a {
    text-decoration: none;
  }
  margin-right: 8px;

  &:last-child {
    margin-right: 0;
  }
`

const LinkButton = ({ children, ...props }) => {
  return <StyledLinkButton {...props}>{children}</StyledLinkButton>
}

export default LinkButton
