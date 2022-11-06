import Link from 'next/link'

import { useState } from 'react'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'

import MediaMatch from 'components/MediaMatch'
import * as S from './styles'

export type MenuProps = {
  loading?: boolean
}

const Menu = ({ loading }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  if (loading) <></>
  return (
    <S.Wrapper isOpen={isOpen}>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Link href="/" passHref></Link>
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <S.MenuLink href="/" passHref>
            Home
          </S.MenuLink>
          <S.MenuLink href="/blog" passHref>
            Blog
          </S.MenuLink>
          <S.MenuLink href="/viagens" passHref>
            Viagens
          </S.MenuLink>
          <S.MenuLink href="/produtos" passHref>
            Produtos
          </S.MenuLink>
          <S.MenuLink href="/produtos" passHref>
            Cupons
          </S.MenuLink>
        </S.MenuNav>
      </MediaMatch>
    </S.Wrapper>
  )
}

export default Menu
