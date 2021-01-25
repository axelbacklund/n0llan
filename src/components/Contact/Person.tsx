import React from 'react'
import styled from 'styled-components'
import { breakpointsDown, colors, spacings } from '../../styles/constants'

interface PersonProps {
  name: string
  title: string
  phone: string
  image: string
}

const PersonWrapper = styled.div`
  width: 18rem;
  margin: 0 1rem 1rem 0;
  background-color: ${colors.gray};

  @media ${breakpointsDown.desktop} {
    width: 12rem;
  }
`

const PersonImage = styled.img`
  object-fit: cover;
  height: 22rem;
  width: 100%;

  @media ${breakpointsDown.desktop} {
    height: 16rem;
  }
`

const InfoWrapper = styled.div`
  width: 100%;
  padding: 1rem ${spacings.horizontal} 1.5rem ${spacings.horizontal};

  p {
    margin: 0;
    padding: 0;
  }
  h3 {
    margin-bottom: 0.2rem;
  }

  @media ${breakpointsDown.desktop} {
    padding: 1rem ${spacings.horizontalMobile} 1.2rem
      ${spacings.horizontalMobile};
  }
`

const Person: React.FC<PersonProps> = ({ name, title, phone, image }) => (
  <PersonWrapper>
    <PersonImage src={image} />
    <InfoWrapper>
      <h3>{name}</h3>
      <p>{title}</p>
      <p>
        <a href={`tel:${phone}`}>{phone}</a>
      </p>
    </InfoWrapper>
  </PersonWrapper>
)

export default Person
