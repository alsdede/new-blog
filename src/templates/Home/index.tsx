import Base from 'templates/Base'
import Hero from 'components/Hero'

import { Container } from 'components/Container'
import * as S from './styles'

const Home = () => (
  <Base>
    <Container>
      <Hero />
    </Container>
  </Base>
)

export default Home
