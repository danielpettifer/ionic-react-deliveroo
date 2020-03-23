import React from 'react';
import { IonIcon } from '@ionic/react';
import { chevronForward} from 'ionicons/icons';
import styled from 'styled-components'

const OrderCard = props => (
  <Cardbase>
        <CardImage image={props.image}></CardImage>
    <Column>
        <Status>{props.status}</Status>
        <Name>{props.name}</Name>
        <Row>
            <Total>£{props.total}</Total>
            •
            <Time>{props.timestamp}</Time>
        </Row>
    </Column>
    <ColumnEnd>
        <IonIcon icon={ chevronForward } color="primary" size="" />
    </ColumnEnd>
      
  </Cardbase>
)

const Status = styled.div `
    text-transform: capitalize;
    color: var(--ion-color-medium-tint);
`

const Name = styled.div `
    font-size: 14px;
`

const Total = styled.div `
    font-size: 14px;
    margin-right: 8px;
`

const Time = styled.div `
    font-size: 14px;
`

const Column = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
    width: 100%;
`

const ColumnEnd = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    min-width: 64px;

    > svg {
        min-width: 64px;
    }
`

const Row = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
`

const CardImage = styled.div `
    position: relative;
    height: 48px;
    min-width: 48px;
    border-radius:50%;
    display: block;
    background-image: url(${props => props.image});
    background-size: cover;
`


const Cardbase = styled.div `
    display: flex;
    justify-content: space-between;
    min-width: 80px;
    height: 80px;
    border-radius: 5px;
    background: #fff;
    border-top: 1px solid var(--ion-color-light);
    align-items: center;
    padding: 16px;
    font-size: 14px;
    background-size: contain;
    position: relative;
    overflow: hidden;
    margin-bottom: 8px;
`

export default OrderCard;
