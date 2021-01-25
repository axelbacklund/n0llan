import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { breakpointsDown, colors, fonts, spacings } from '../styles/constants'
import { Location } from '@reach/router'
import Hamburger from './Menu/Hamburger'
import MobileMenu from './Menu/MobileMenu'

const MainWrapper = styled.div`
  width: 100%;
`

const HeaderWrapper = styled.div`
  width: 100%;
  background-color: ${colors.gray};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2rem ${spacings.horizontal};

  a {
    text-decoration: none;
  }

  @media ${breakpointsDown.desktop} {
    padding: 1rem ${spacings.horizontalMobile};
  }
`

const Name = styled.div`
  font-family: ${fonts.termina};
  color: ${colors.porter};
  font-size: 1.5rem;
`

const MenuLinks = styled.nav`
  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 0;
  }
  @media ${breakpointsDown.desktop} {
    display: none;
  }
`

interface ActiveProps {
  active: boolean
}

const MenuItem = styled.li<ActiveProps>`
  font-size: 1rem;
  margin: 0 1.5rem;
  position: relative;

  a:after {
    background: none repeat scroll 0 0 transparent;
    bottom: -10px;
    content: '';
    display: block;
    height: 1px;
    left: ${(props) => (props.active ? '23%' : '50%')};
    position: absolute;
    background: #000;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: ${(props) => (props.active ? '50%' : 0)};
  }
  a:hover:after {
    width: 50%;
    left: 23%;
  }
`

const HamWrapper = styled.span`
  display: none;
  @media ${breakpointsDown.desktop} {
    display: inline-block;
    width: 48px;
    height: 48px;
  }
`

export type LinkObj = {
  name?: string
  link?: string
}

interface HeaderProps {
  links?: LinkObj[]
  name?: string
}

const Header: React.FC<HeaderProps> = ({ links, name }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <MainWrapper>
      <HeaderWrapper>
        <Link to="/">
          <Name>{name}</Name>
        </Link>
        <HamWrapper onClick={() => setIsOpen(!isOpen)}>
          <Hamburger isOpen={isOpen} />
        </HamWrapper>
        <MenuLinks>
          <Location>
            {(locationProps) => (
              <ul>
                {links &&
                  links.map((link) => (
                    <MenuItem
                      key={link.link}
                      active={locationProps.location.pathname === link.link}
                    >
                      <Link to={link.link ?? '/'}>{link.name}</Link>
                    </MenuItem>
                  ))}
              </ul>
            )}
          </Location>
        </MenuLinks>
      </HeaderWrapper>
      {links && <MobileMenu links={links} isOpen={isOpen} /> }
    </MainWrapper>
  )
}

export default Header
