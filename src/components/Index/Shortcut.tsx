import { Link } from 'gatsby'
import React from 'react'
import { breakpointsDown, Color, colors, fonts, spacings } from '../../styles/constants'
import styled from 'styled-components'
import { motion } from 'framer-motion'

interface ShortcutProps {
  name: string
  link: string
  icon: string
  color: Color
  delay: number
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

  @media ${breakpointsDown.tablet} {
    height: 5.8rem;

    img {
      height: 40%;
    }
  }
`

const Name = styled.div`
  font-size: 1.6rem;
  margin-left: 2rem;
  font-family: ${fonts.termina};
`

const Shortcut: React.FC<ShortcutProps> = ({
  name,
  link,
  icon,
  color,
  delay,
}) => (
  <ShortcutMain>
    <ShortcutLink to={link}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay }}
      >
        <ShortcutWrapper color={color}>
          <img src={icon} />
          <Name>{name}</Name>
        </ShortcutWrapper>
      </motion.div>
    </ShortcutLink>
  </ShortcutMain>
)

export default Shortcut
