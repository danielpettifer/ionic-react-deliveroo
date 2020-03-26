import React from 'react';
import styled from 'styled-components';
const Location = props => (
  <Row>
    <h3>{props.distance} miles away • £{props.deliveryCost} delivery</h3>
  </Row>
);

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;

export default Location;
