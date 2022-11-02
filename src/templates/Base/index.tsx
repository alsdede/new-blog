import { Container } from 'components/Container'
import Menu from 'components/Menu'
import * as S from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => {
  return (
    <S.Wrapper>
      <Container></Container>
      <Menu />
      <S.Content>{children}</S.Content>

      <S.SectionFooter>
        <Container></Container>
      </S.SectionFooter>
    </S.Wrapper>
  )
}

export default Base
