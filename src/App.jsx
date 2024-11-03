import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const App = () => {
  return (
    <Container>
      <h1>Welcome to Az1zi Botz</h1>
    </Container>
  );
};

export default App;
