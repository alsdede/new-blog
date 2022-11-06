import { Container } from 'components/Container'
import Menu from 'components/Menu'
import * as S from './styles'

export type SideBarProps = {
  title: string
  slug: string
}

const SideItem = ({ title }: SideBarProps) => {
  return <S.WrapperItem>{title}</S.WrapperItem>
}
const SideBar = () => {
  const items = [
    { title: 'Passagens Aéreas', slug: 'passagens-aereas' },
    { title: 'Hospedagens', slug: 'hospedagens' },
    { title: 'Cupons de desconto', slug: 'cupons' },
    { title: 'Produtos', slug: 'produtos' }
  ]
  return (
    <S.Wrapper>
      {items.map(({ title, slug }, index) => (
        <SideItem key={`sideItem-${index}`} title={title} slug={slug} />
      ))}
    </S.Wrapper>
  )
}

export default SideBar
