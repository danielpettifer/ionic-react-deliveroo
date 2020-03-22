import React from 'react';
import styled from 'styled-components'

const NoticeCard = styled.div `
    display: flex;
    flex-direction: column;
    min-height: 80px;
    border-radius: 5px;
    background: var(--ion-color-primary);
    margin-right: 8px;
    align-items: flex-start;
    padding: 16px 8px;
    font-size: 10px;
    ${'' /* background-image: url(${props => props.img}); */}
    background-size: contain;
    margin: 0 16px;
`

const Title = styled.div `
    font-size: 12px;
    line-height: 12px;
    text-transform: capitalize;
    color: #fff;
    font-weight: 600;
    margin-bottom: 4px;
`

const Content = styled.div `
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
    color: #fff;
`

const Notice = props => (
  <NoticeCard style={{ backgroundImage: `url('${props.img}')` }}>
      <Title>{props.title}</Title>
      <Content>{props.content}</Content>
  </NoticeCard>
)

export default Notice;
