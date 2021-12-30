import React from 'react'
import styled from '@emotion/styled'

const TableOfContents = ({ htmlText, className }) => {
  return (
    <Wrap className={className}>
      <Nav dangerouslySetInnerHTML={{ __html: htmlText }} />
    </Wrap>
  )
}

export default TableOfContents

const Wrap = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  right: calc(-50vw - -360px);
`

const Nav = styled.nav`
  position: sticky;
  top: 100px;
  display: block;
  max-width: 360px;
  margin-right: 20px;
  overflow: auto;
  word-break: break-word;
  max-height: calc(100vh - 200px);
  font-size: 14px;
`
