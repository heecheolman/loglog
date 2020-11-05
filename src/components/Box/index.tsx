import React from 'react'

import { css } from '@emotion/core'

export enum DisplayType {
  BLOCK = 'block',
  INLINE = 'inline',
  INLINE_BLOCK = 'inline-block',
  FLEX = 'flex',
  INLINE_FLEX = 'inline-flex',
}

export enum Direction {
  ROW = 'row',
  COL = 'column',
}

export enum JustifyContent {
  NORMAL = 'normal',
  FLEX_START = 'flex-start',
  FLEX_END = 'flex-end',
  CENTER = 'center',
  SPACE_BETWEEN = 'space-between',
  SPACE_AROUND = 'space-around',
}

export enum AlignItems {
  NORMAL = 'normal',
  FLEX_START = 'flex-start',
  FLEX_END = 'flex-end',
  CENTER = 'center',
}

const DISPLAY_TYPE = {
  [DisplayType.BLOCK]: css`
    display: block;
  `,
  [DisplayType.INLINE]: css`
    display: inline;
  `,
  [DisplayType.INLINE_BLOCK]: css`
    display: inline-block;
  `,
  [DisplayType.FLEX]: css`
    display: flex;
  `,
  [DisplayType.INLINE_FLEX]: css`
    display: inline-flex;
  `,
}
const DIRECTION = {
  [Direction.ROW]: css`
    flex-direction: row;
  `,
  [Direction.COL]: css`
    flex-direction: column;
  `,
}

const JUSTIFY_CONTENT = {
  [JustifyContent.NORMAL]: css`
    justify-content: normal;
  `,
  [JustifyContent.FLEX_START]: css`
    justify-content: flex-start;
  `,
  [JustifyContent.FLEX_END]: css`
    justify-content: flex-end;
  `,
  [JustifyContent.CENTER]: css`
    justify-content: center;
  `,
  [JustifyContent.SPACE_BETWEEN]: css`
    justify-content: space-between;
  `,
  [JustifyContent.SPACE_AROUND]: css`
    justify-content: space-around;
  `,
}

const ALIGN_ITEMS = {
  [AlignItems.NORMAL]: css`
    align-items: normal;
  `,
  [AlignItems.FLEX_START]: css`
    align-items: flex-start;
  `,
  [AlignItems.FLEX_END]: css`
    align-items: flex-end;
  `,
  [AlignItems.CENTER]: css`
    align-items: center;
  `,
}

interface IProps {
  display?: DisplayType
  justifyContent?: JustifyContent
  alignItems?: AlignItems
  direction?: Direction
  className?: string
}

const Box: React.FC<IProps> = ({
  display = DisplayType.BLOCK,
  justifyContent = JustifyContent.NORMAL,
  alignItems = AlignItems.NORMAL,
  direction = Direction.ROW,
  children,
  ...props
}) => {
  const isFlexBox =
    display === DisplayType.FLEX || display === DisplayType.INLINE_FLEX

  return (
    <div
      css={[
        DISPLAY_TYPE[display],
        isFlexBox && [
          DIRECTION[direction],
          JUSTIFY_CONTENT[justifyContent],
          ALIGN_ITEMS[alignItems],
        ],
      ]}
      {...props}
    >
      {children}
    </div>
  )
}
export default Box
