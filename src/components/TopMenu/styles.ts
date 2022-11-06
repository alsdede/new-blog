import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    background-color: ${theme.colors.primary};
    justify-content: space-between;
    align-items: 'center';
    width: 100%;

    padding: ${theme.spacings.xxsmall};
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: ${theme.colors.white};

      p {
        color: ${theme.colors.primary};
      }
    }
  `}
`
export const Left = styled.div`
  ${() => css`
    display: flex;
    align-self: center;
    width: 100%;
  `}
`
export const Right = styled.div`
  ${() => css`
    align-self: center;
    width: 100%;
  `}
`

export const Center = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-items: center;
    width: 100%;

    p {
      font-size: ${theme.font.sizes.large};
      font-weight: ${theme.font.bold};
      color: ${theme.colors.white};
    }
  `}
`
