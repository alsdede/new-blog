import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const SectionBanner = styled.section`
  ${({ theme }) => css`
    margin: 0 calc(-${theme.grid.gutter} / 2) ${theme.spacings.large};

    ${media.greaterThan('medium')`
      margin-bottom: ${theme.spacings.large};
      position: relative;
      z-index: ${theme.layers.base};
    `}
  `}
`
export const SectionPosts = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    margin-bottom: ${theme.spacings.medium};
    ${media.greaterThan('medium')`
    flex-direction: row;
    `}
  `}
`
export const Left = styled.div`
  ${() => css`
    width: 100%;
  `}
`
export const Right = styled.div`
  ${() => css`
    width: 100%;
    max-width: 35rem;
  `}
`
export const SectionNews = styled.div`
  ${({ theme }) => css`
    margin-bottom: calc(${theme.spacings.xxlarge} * 2);

    ${media.greaterThan('large')`
      margin-top: -13rem;
    `}

    ${media.greaterThan('medium')`
      margin-bottom: 0;
      padding-top: 14rem;
      padding-bottom: 10rem;
      background-color: ${theme.colors.lightBg};
      clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);


    `}
  `}
`
