import React from 'react'
import { css } from '@emotion/core'

export enum TextAlign {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
  JUSTIFY = 'justify',
}

export enum WhiteSpace {
  NORMAL = 'normal',
  NOWRAP = 'nowrap',
  PRE = 'pre',
  PRE_WRAP = 'pre-wrap',
  PRE_LINE = 'pre-line',
  BREAK_SPACES = 'break-spaces',
}

export enum WordBreak {
  NORMAL = 'normal',
  BREAK_ALL = 'break-all',
  BREAK_WORD = 'break-word',
  KEEP_ALL = 'keep-all',
}

const DEFAULT_STYLE = css`
  margin: 0;
  transition: inherit;
`

interface IProps {
  weak?: boolean
  textAlign?: TextAlign
  fontSize?: number
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
  ellipsis?: boolean
  lineHeight?: number
  whiteSpace?: WhiteSpace
  wordBreak?: WordBreak
}

const P: React.FC<IProps> = ({
  textAlign = TextAlign.LEFT,
  fontSize = 1,
  fontWeight = 400,
  ellipsis = false,
  lineHeight = 1.5,
  weak = false,
  whiteSpace = WhiteSpace.NORMAL,
  wordBreak = WordBreak.NORMAL,
  children,
  ...props
}) => {
  const ellipsisStyle = css`
    white-space: ${ellipsis ? WhiteSpace.NOWRAP : whiteSpace};
    text-overflow: ${ellipsis ? 'ellipsis' : 'clip'};
    overflow: ${ellipsis ? 'hidden' : 'visible'};
  `
  return (
    <p
      css={[
        DEFAULT_STYLE,
        css`
          color: ${weak ? 'var(--textWeak)' : 'var(--textNormal)'};
          ${ellipsisStyle}
          text-align: ${textAlign};
          font-size: ${fontSize}rem;
          font-weight: ${fontWeight};
          line-height: ${lineHeight};
          word-break: ${wordBreak};
        `,
      ]}
      {...props}
    >
      {children}
    </p>
  )
}

export default P
