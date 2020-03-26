import React from 'react';
import styled from 'styled-components';

const Promo = props => (
  <div>
    {props.deliveryCost < 2.5 ? (
      <DeliveryLabel>
        £{props.deliveryCost} Delivery
  </DeliveryLabel>
    ) : (<></>)}
  </div>
)

const DeliveryLabel = styled.div`
  position: absolute;
  top: 4px;
  left: 4px;
  display: block;
  background: #fff;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 4px;
`

export default Promo;
