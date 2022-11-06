import Link from 'next/link'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    margin-bottom: 2rem;
    width: 100%;
    border-radius: ${theme.border.radius};
    ${media.greaterThan('medium')`
    max-width:75rem;
    height: 250px;
    border-radius: 3px;

    box-shadow: rgb(0 0 0 / 10%) 0px 4px 10px -2px;
    display: grid;
    align-content: start;
    grid-template-columns: repeat(16, 1fr);
    grid-template-rows: 2rem 4fr 1fr;
    cursor: pointer;
    transition: background-color 1s ease 0s;
		`}
  `}
`
export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 25rem;
    background-color: ${theme.colors.lightGray};
    position: relative;
    border-radius: ${theme.border.radius};
    ${media.greaterThan('medium')`
    grid-area: 1 / 1 / -1 / 8;
    background-size: cover;
    background-position: center center;
    background-blend-mode: overlay;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;

		`}
  `}
`
export const Content = styled.div`
  ${({ theme }) => css`
    grid-area: 1 / 8 / -1 / -1;
    padding: ${theme.spacings.xsmall};
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.white};
    border-bottom: 5px solid ${theme.colors.primary};
    border-top-color: ${theme.colors.primary};
    border-right-color: ${theme.colors.primary};
    border-left-color: ${theme.colors.primary};
    border-top-right-radius: ${theme.border.radius};
    border-bottom-right-radius: ${theme.border.radius};
    ${media.greaterThan('medium')`
		`}
  `}
`

export const Title = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.black};
    font-weight: ${theme.font.bold};
    ${media.greaterThan('medium')`
      font-size:${theme.font.sizes.large};

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* number of lines to show */
      line-clamp: 2;
      -webkit-box-orient: vertical;
		`};
  `}
`
export const SubTitle = styled.h5`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.black};

    font-weight: ${theme.font.normal};
    margin-top: ${theme.spacings.xsmall};
    ${media.greaterThan('medium')`

    font-size:${theme.font.sizes.large};

		`}
  `}
`
export const Tag = styled.div`
  ${({ theme }) => css`
    text-decoration: none;
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.gray};
    margin-top: ${theme.spacings.xsmall};
    ${media.greaterThan('medium')`
    position: absolute;
 
`} bottom: 1rem;
  `}
`
