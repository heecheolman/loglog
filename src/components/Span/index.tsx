import React, { ReactNode } from 'react'
import { css } from '@emotion/core'

interface Props {
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
  fontSize?: number
  children?: ReactNode
}

const DEFAULT_STYLE = css`
  display: inline;
`

function Span({ fontSize = 1, fontWeight = 400, children, ...props }: Props) {
  return (
    <span
      css={[
        DEFAULT_STYLE,
        css`
          color: var(--textNormal);
          font-size: ${fontSize}rem;
          font-weight: ${fontWeight};
        `,
      ]}
      {...props}
    >
      {children}
    </span>
  )
}

export default Span
