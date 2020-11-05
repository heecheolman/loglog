import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { ANIMATION } from '../../config/ui'
import Title from '../Title'
import P from '../P'
import Badge from '../Badge'

const StyledList = styled.li`
  margin-bottom: 36px;

  &:hover {
    * {
      color: var(--primary);
    }
  }
`
const StyledLink = styled(Link)`
  width: 100%;
  display: inline-block;
  cursor: pointer;
  border-radius: 8px;
  box-sizing: border-box;
  transition: 0.1s ease-out;
  text-decoration: none;
  transition: ${ANIMATION.duration.fast} color ${ANIMATION.function.hover};
`

const PostItem = ({
  title = '',
  createdAt,
  description = '',
  draft = false,
  path,
}) => {
  return (
    <StyledList>
      <StyledLink to={path}>
        <Title
          heading="h3"
          css={css`
            margin-top: 0;
            margin-bottom: 12px;
            font-size: 1.4rem;
            font-weight: 400;
          `}
        >
          {title}
          {draft ? (
            <Badge
              css={css`
                margin-left: 8px;
              `}
            >
              작성중
            </Badge>
          ) : null}
        </Title>
        <P
          weak
          fontSize={1}
          fontWeight={300}
          css={css`
            margin-bottom: 8px;
          `}
        >
          {description}
        </P>
        <P weak fontSize={0.9} fontWeight={300}>
          {createdAt}
        </P>
      </StyledLink>
    </StyledList>
  )
}

export default PostItem
