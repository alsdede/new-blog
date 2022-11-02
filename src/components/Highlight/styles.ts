import styled, { css } from 'styled-components'

import media from 'styled-media-query'

import { HighlightProps } from '.'

type WrapperProps = Pick<HighlightProps, 'alignment'>

const wrapperModifiers = {
  right: () => css`
    grid-template-areas: 'floatimage content';
    grid-template-columns: 1.3fr 2fr;

    ${Content} {
      text-align: right;
    }
  `,
  left: () => css`
    grid-template-areas: 'content floatimage';
    grid-template-columns: 2fr 1.3fr;

    ${Content} {
      text-align: left;
    }

    ${FloatImageWrapper} {
      justify-self: end;
    }
  `
}

export const Wrapper = styled.article<WrapperProps>`
  ${({ alignment }) => css`
    position: relative;
    height: 100%;
    display: grid;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
    }
    transition: all 0.2s ease-in-out;
    a {
      text-decoration: none;
    }
    img {
      position: absolute;
      object-fit: cover;
      width:"100%",
      &:hover {
        transform: scale(1.05);
      }
    }

    ${media.greaterThan('medium')`
    height: 100%;
    `}

    ${wrapperModifiers[alignment!]()}
  `}
`

export const FloatImageWrapper = styled.div`
  ${({ theme }) => css`
    grid-area: floatimage;
    z-index: ${theme.layers.base};
    max-height: 100%fit-content;
    max-width: 100%;
    align-self: end;

    img {
      position: relative;
      object-fit: contain;
    }

    ${media.greaterThan('medium')`
      max-height: 100%;
    `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    grid-area: content;
    z-index: ${theme.layers.base};
    padding: ${theme.spacings.xsmall};

    ${media.greaterThan('medium')`
      align-self: end;
      padding: ${theme.spacings.large};
    `}
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `}
`

export const SubTitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`
