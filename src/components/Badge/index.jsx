import React from 'react'
import styled from '@emotion/styled'

const StyledBadge = styled.span`
  display: inline-block;
  padding: 4px 10px;
  background-color: var(--primaryButtonBg);
  color: var(--primaryButtonText);
  font-size: 0.7rem;
  border-radius: 4px;
  vertical-align: middle;
`

const Badge = ({ children, ...props }) => {
  return <StyledBadge {...props}>{children}</StyledBadge>
}

export default Badge
