import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  text-align: center;
  margin: 2rem 0;
  color: #bbb;
`;

const Title = styled.h2`
  color: #66f;
`;

const Text = styled.p`
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.5;
`;

function About() {
  return (
    <AboutContainer>
      <Title>What is AutoChat?</Title>
      <Text>AutoChat is an automation solution designed to send messages to Discord channels on a scheduled basis...</Text>
    </AboutContainer>
  );
}

export default About;
