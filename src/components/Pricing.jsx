import React from 'react';
import styled from 'styled-components';

const PricingContainer = styled.section`
  text-align: center;
  margin: 2rem 0;
`;

const Title = styled.h2`
  color: #66f;
`;

const Card = styled.div`
  background-color: #333;
  margin: 1rem auto;
  padding: 1rem;
  border-radius: 8px;
  max-width: 400px;
  text-align: center;
`;

const Price = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
`;

const Button = styled.button`
  background-color: #66f;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: #5580ff;
  }
`;

function Pricing() {
  return (
    <PricingContainer>
      <Title>Pricing</Title>
      <p>This is the AutoChat Product for sending automatic messages</p>

      <Card>
        <h3>Custom Plan Service</h3>
        <p>Flexible and Adjustable Plans</p>
        <Price>Rp ??? / ???</Price>
        <Button>Order Now</Button>
      </Card>

      <Card>
        <h3>Weekly Service</h3>
        <p>Perfect for Short-Term Needs</p>
        <Price>Rp 5.000 / Week</Price>
        <Button>Order Now</Button>
      </Card>
    </PricingContainer>
  );
}

export default Pricing;
