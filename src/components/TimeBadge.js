import React from 'react';
import styled from 'styled-components';

const TimeBadge = props => (
  <TimeLabel>
    {props.deliveryTime}
    <Mins>
      min
  </Mins>
  </TimeLabel>
)

const TimeLabel = styled.div`
  position: absolute;
  top: 115px;
  right: 16px;
  display; flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  background: #fff;
  color: #000;
  font-weight: 800;
  padding: 6px 24px;
  border-radius: 30px;
  box-shadow: 0 3px 10px 5px rgba(0,0,0,0.1);
`
const Mins = styled.div`
color: red;
text-align: center;
font-weight: 400;
color: var(--ion-color-medium)
`

export default TimeBadge;
