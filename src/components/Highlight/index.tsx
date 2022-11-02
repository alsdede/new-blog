import Image from 'next/image'
import Link from 'next/link'
import * as S from './styles'

export type HighlightProps = {
  title: string
  subtitle: string
  backgroundImage: string
  floatImage?: string
  alignment?: 'right' | 'left'
}

const Highlight = ({
  title,
  subtitle,
  backgroundImage,
  floatImage,
  alignment = 'right'
}: HighlightProps) => (
  <Link href={`/game`} passHref style={{ textDecoration: 'none' }}>
    <S.Wrapper alignment={alignment}>
      <Image
        src={backgroundImage}
        alt={`${title} background`}
        fill
        sizes="100vw"
      />

      {!!floatImage && (
        <S.FloatImageWrapper>
          <Image src={floatImage} alt={title} width={400} height={300} />
        </S.FloatImageWrapper>
      )}
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.SubTitle>{subtitle}</S.SubTitle>
      </S.Content>
    </S.Wrapper>
  </Link>
)

export default Highlight
