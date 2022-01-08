import React, { ReactNode } from 'react'
import { css, jsx, SerializedStyles } from '@emotion/core'

type HeadingTags = keyof Pick<
  React.ReactHTML,
  'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
>

interface Props {
  heading?: HeadingTags
  children: ReactNode
}

const DEFAULT_STYLE = css`
  color: var(--textNormal);
  transition: inherit;
`

const TAG_STYLE: {
  [key in HeadingTags]: SerializedStyles
} = {
  h1: css`
    font-size: 2.5rem;
  `,
  h2: css`
    font-size: 2rem;
  `,
  h3: css`
    font-size: 1.75rem;
  `,
  h4: css`
    font-size: 1.5rem;
  `,
  h5: css`
    font-size: 1.25rem;
  `,
  h6: css`
    font-size: 1rem;
  `,
}

function Title({ heading = 'h1', children, ...props }: Props) {
  return jsx(
    heading,
    {
      css: [DEFAULT_STYLE, TAG_STYLE[heading]],
      ...props,
    },
    children
  )
}

export default Title
