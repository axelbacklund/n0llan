import styled from 'styled-components'
import { breakpointsDown, spacings } from '../styles/constants'

const Margin = styled.div`
  margin: ${spacings.horizontal};

  @media ${breakpointsDown.desktop} {
    margin: ${spacings.horizontalMobile};
  }
`

export default Margin
