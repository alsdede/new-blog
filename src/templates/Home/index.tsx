import Base from 'templates/Base'
import Hero from 'components/Hero'
import PostItem from 'components/PostItem'
import SideBar from 'components/SideBar'
import { Container } from 'components/Container'

import POSTS_MOCK from './mock'
import * as S from './styles'

type Post = {
  slug: string
  description: string
  detailss: string
}
type HomeProps = {
  posts: Post[]
}
const Home = ({ posts }: HomeProps) => {
  console.log('POSTS', POSTS_MOCK[3])
  return (
    <Base>
      <Container>
        <S.SectionBanner>
          <Hero posts={POSTS_MOCK} />
        </S.SectionBanner>
        <S.SectionPosts>
          <S.Left>
            <PostItem post={POSTS_MOCK[3]} />
            <PostItem post={POSTS_MOCK[4]} />
          </S.Left>
          <S.Right>
            <SideBar />
          </S.Right>
        </S.SectionPosts>
      </Container>
    </Base>
  )
}

export default Home
