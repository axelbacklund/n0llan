import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { colors, fonts, spacings } from '../styles/constants'
import { Location } from '@reach/router'

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
`

const Name = styled(motion.div)`
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
`

interface ActiveProps {
  active: boolean
}

const MenuItem = styled(motion.li)<ActiveProps>`
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

type LinkObj = {
  name?: string
  link?: string
}

interface HeaderProps {
  links?: LinkObj[]
  name?: string
}

const Header: React.FC<HeaderProps> = ({ links, name }) => (
  <HeaderWrapper>
    <Link to="/">
      <Name
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {name}
      </Name>
    </Link>
    <MenuLinks>
      <Location>
        {(locationProps) => (
          <ul>
            {links &&
              links.map((link, index) => (
                <MenuItem
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
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
)

export default Header
