import React from 'react';
import styled from 'styled-components'

const Cardbase = styled.div `
    display: flex;
    min-width: 80px;
    height: 80px;
    border-radius: 5px;
    background: orange;
    margin-right: 8px;
    align-items: flex-end;
    padding: 8px;
    font-size: 10px;
    ${'' /* background-image: url(${props => props.img}); */}
    background-size: contain;
`

const Title = styled.div `
    font-size: 12px;
    line-height: 12px;
    text-transform: capitalize;
    color: #fff;
    font-weight: 600;
    margin-bottom: 4px;
`

const Card = props => (
  <Cardbase style={{ backgroundImage: `url('${props.img}')` }}>
      <Title>{props.title}</Title>
  </Cardbase>
)

export default Card;
