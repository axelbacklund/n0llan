import { Link } from 'gatsby'
import React from 'react'
import { breakpointsDown, Color, colors, fonts, spacings } from '../../styles/constants'
import styled from 'styled-components'

interface ShortcutProps {
  name: string
  link: string
  icon: string
  color: Color
}

interface WrapperProps {
  color: Color
}

const ShortcutLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const ShortcutMain = styled.div`
  width: 100%;
`

const ShortcutWrapper = styled.div<WrapperProps>`
  background-color: ${(props) => colors[props.color]};
  color: white;
  padding: 0 ${spacings.horizontal};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 7rem;
`

const Name = styled.div`
  font-size: 1.6rem;
  margin-left: 2rem;
  font-family: ${fonts.termina};
`

const Shortcut: React.FC<ShortcutProps> = ({ name, link, icon, color }) => (
  <ShortcutMain>
    <ShortcutLink to={link}>
      <ShortcutWrapper color={color}>
        <img src={icon} />
        <Name>{name}</Name>
      </ShortcutWrapper>
    </ShortcutLink>
  </ShortcutMain>
)

export default Shortcut
