import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  text-align: center;
  padding: 1.5rem;
  background-color: #272727;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #ffffff;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #cccccc;
`;

function Header() {
  return (
    <HeaderContainer>
      <Title>AutoChat</Title>
      <Subtitle>Running 24/7: AutoChat runs non-stop to ensure continuous messaging.</Subtitle>
    </HeaderContainer>
  );
}

export default Header;
