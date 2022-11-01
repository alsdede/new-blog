import { Container } from 'components/Container'

import * as S from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => {
  return (
    <S.Wrapper>
      <Container></Container>

      <S.Content>{children}</S.Content>

      <S.SectionFooter>
        <Container></Container>
      </S.SectionFooter>
    </S.Wrapper>
  )
}

export default Base
