import Highlight from 'components/Highlight'
import HighlightMock from 'components/Highlight/mock'
import * as S from './styles'

const Hero = () => {
  const { title, subtitle, backgroundImage, buttonLabel, buttonLink } =
    HighlightMock

  return (
    <S.Wrapper>
      <S.Main>
        <Highlight
          title={title}
          subtitle={subtitle}
          backgroundImage={backgroundImage}
          alignment="left"
        />
      </S.Main>
      <S.Secondy>
        {' '}
        <Highlight
          title={title}
          subtitle={subtitle}
          backgroundImage={backgroundImage}
          alignment="left"
        />
      </S.Secondy>
      <S.Terciary>
        {' '}
        <Highlight
          title={title}
          subtitle={subtitle}
          backgroundImage={backgroundImage}
          alignment="left"
        />
      </S.Terciary>
    </S.Wrapper>
  )
}

export default Hero
