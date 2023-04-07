import { GlobalStyle } from './global/GlobalStyle.js'
import styled from 'styled-components'
import { AdviceCard } from './components/AdviceCard';
import { Theme } from './global/Theme';

function App() {
  return (
    <Theme>
      <GlobalStyle/>
        <Container>
        <AdviceCard/>
      </Container>
    </Theme>
  );
}

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export default App;
