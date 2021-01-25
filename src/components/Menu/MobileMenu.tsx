import React from 'react'
import styled from 'styled-components'
import { breakpointsDown, colors } from '../../styles/constants'
import Margin from '../Margin'
import { LinkObj } from '../Header'
import { Link } from 'gatsby'

const MenuWrapper = styled.div<{ isOpen: boolean }>`
  background-color: ${colors.gray};
  position: absolute;
  z-index: 1000;
  left: 0;
  right: 0;

  transition: height 0.25s ease-out;
  height: ${(props) => (props.isOpen ? '100%' : 0)};
  overflow: hidden;

  display: none;
  @media ${breakpointsDown.desktop} {
    display: inline-block;
  }
`

const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
  }
`

const MenuItem = styled.li`
  font-size: 1.2rem;
  margin: 0 0 1.5rem 0;
  position: relative;
  a {
    text-decoration: none;
  }
`

interface MobileMenuProps {
  isOpen: boolean
  links: LinkObj[]
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, links }) => (
  <MenuWrapper isOpen={isOpen}>
    <Margin>
      <Nav>
        <ul>
          {links &&
            links.map((link) => (
              <MenuItem key={link.link}>
                <Link to={link.link ?? '/'}>{link.name}</Link>
              </MenuItem>
            ))}
        </ul>
      </Nav>
    </Margin>
  </MenuWrapper>
)

export default MobileMenu
