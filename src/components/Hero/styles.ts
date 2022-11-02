import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  display: grid;
  height: 60rem;
  grid-template-areas:
    'm'
    's'
    't';
  gap: 6px;
  ${media.greaterThan('medium')`
  grid-template-areas:
    'm s'
    'm t';

    `}
`
export const Main = styled.div`
  grid-area: m;
  background-color: blue;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.014);
  }
`
export const Secondy = styled.div`
  grid-area: s;
  background-color: red;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.014);
  }
`
export const Terciary = styled.div`
  grid-area: t;
  background-color: green;

  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.014);
  }
`
