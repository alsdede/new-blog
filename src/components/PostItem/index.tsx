import Image from 'next/image'
import Link from 'next/link'

import * as S from './styles'

type PostListItem = {
  slug: string
  image: string
  title: string
  subtitle: string
  country: string
}
const PostListItem = ({
  post: { slug, image, title, subtitle, country }
}: any) => {
  return (
    <Link href={`/${slug}`} style={{ textDecoration: 'none' }}>
      <S.Wrapper>
        <S.ImageWrapper>
          <Image src={image} alt="post-image" fill sizes="100vw" />
        </S.ImageWrapper>

        <S.Content>
          <S.Title>{title}</S.Title>
          <S.SubTitle>{subtitle}</S.SubTitle>
          <S.Tag>{country}</S.Tag>
        </S.Content>
      </S.Wrapper>
    </Link>
  )
}

export default PostListItem
