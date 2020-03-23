import React from 'react';
import { IonIcon } from '@ionic/react';
import { chevronForward} from 'ionicons/icons';
import styled from 'styled-components'


const OrderCard = props => (
  <Cardbase>
    <Column>
        <CardImage image={props.image}></CardImage>
    </Column>
    <Column>
        <Status>{props.status}</Status>
        <Name>{props.name}</Name>
        <Row>
            <Total>{props.total}</Total>
            •
            <Time>{props.timestamp}</Time>
        </Row>
    </Column>
    <Column>
        <IonIcon icon={ chevronForward } color="primary" />
    </Column>
      
  </Cardbase>
)

const Status = styled.div `
`

const Name = styled.div `
`

const Total = styled.div `
`

const Time = styled.div `
`

const Column = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
`

const Row = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
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
    z-index: 1;
`

const Cardbase = styled.div `
    display: flex;
    justify-content: space-between;
    min-width: 80px;
    height: 80px;
    border-radius: 5px;
    background: var(--ion-color-light-shade);
    margin-right: 8px;
    align-items: flex-end;
    padding: 8px;
    font-size: 10px;
    background-size: contain;
    position: relative;
    overflow: hidden;
`

export default OrderCard;
