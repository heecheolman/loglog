import React from 'react'
import styled from '@emotion/styled'

const StyledUl = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`

const PostList = ({ children, ...props }) => {
  return <StyledUl {...props}>{children}</StyledUl>
}

export default PostList
