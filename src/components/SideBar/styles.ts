import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { darken } from 'polished'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    background-color: ${theme.colors.white};
    flex-direction: column;
    width: 100%;
    max-width: 35rem;
    padding: ${theme.spacings.xxsmall};
    border-radius: ${theme.border.radius};
  `}
`
export const WrapperItem = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding: ${theme.spacings.xxsmall};
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-decoration: none;
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    cursor: pointer;
    color: ${theme.colors.black};
    transition: all 0.2s ease-in-out;
    border-bottom: none;
    &:not(:last-child) {
      border-bottom: 1px solid ${theme.colors.lightGray};
    }

    &:hover {
      background-color: ${darken(0.2, theme.colors.white)};
    }
  `}
`
