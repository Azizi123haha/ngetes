import React from 'react';
import Header from './components/Header';
import Pricing from './components/Pricing';
import Features from './components/Features';
import About from './components/About';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #121212;
  color: #f0f0f0;
  min-height: 100vh;
  padding: 20px;
`;

function App() {
  return (
    <Container>
      <Header />
      <Pricing />
      <Features />
      <About />
    </Container>
  );
}

export default App;
