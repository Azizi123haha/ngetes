import React from 'react';
import styled from 'styled-components';

const FeaturesContainer = styled.section`
  text-align: center;
  margin: 2rem 0;
`;

const Title = styled.h2`
  color: #66f;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  color: #ccc;
  margin-top: 1rem;
`;

const ListItem = styled.li`
  margin: 0.5rem 0;
`;

function Features() {
  return (
    <FeaturesContainer>
      <Title>Features of AutoChat</Title>
      <List>
        <ListItem>Custom Message: Customize the message content as needed.</ListItem>
        <ListItem>Custom Channel: Send messages to multiple Discord channels simultaneously.</ListItem>
        <ListItem>Message Delay: Set custom delay intervals between messages for controlled messaging.</ListItem>
      </List>
    </FeaturesContainer>
  );
}

export default Features;
