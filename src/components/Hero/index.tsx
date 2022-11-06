import Highlight from 'components/Highlight'
import HighlightMock from 'components/Highlight/mock'
import * as S from './styles'

type Post = {
  slug: string
  title: string
  subtitle: string
  image: string
  details: string
}

type HeroProps = {
  posts: Post[]
}
const Hero = ({ posts }: HeroProps) => {
  console.log(posts)
  return (
    <S.Wrapper>
      <S.Main>
        <Highlight
          title={posts[0].title}
          subtitle={posts[0].subtitle}
          backgroundImage={posts[0].image}
          alignment="left"
        />
      </S.Main>
      <S.Secondy>
        {' '}
        <Highlight
          title={posts[1].title}
          subtitle={posts[1].subtitle}
          backgroundImage={posts[1].image}
          alignment="left"
        />
      </S.Secondy>
      <S.Terciary>
        {' '}
        <Highlight
          title={posts[2].title}
          subtitle={posts[2].subtitle}
          backgroundImage={posts[2].image}
          alignment="left"
        />
      </S.Terciary>
    </S.Wrapper>
  )
}

export default Hero
