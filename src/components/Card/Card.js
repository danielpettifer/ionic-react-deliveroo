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
    background-size: contain;
    position: relative;
`

const CardImage = styled.div `
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: block;
    background-image: url(${props => props.image});
    background-size: cover;
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
  <Cardbase>
      <Title>{props.title}</Title>
      <CardImage image={props.img}></CardImage>
  </Cardbase>
)

export default Card;
