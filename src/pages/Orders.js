import React from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonItem, IonAvatar, IonLabel } from '@ionic/react';
import orderData from '../orderData.json';
import styled from '../../node_modules/styled-components';

const Orders = () => {
  return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                <IonBackButton 
                    defaultHref="/account" 
                    text="Account"
                />

                </IonButtons>
                <IonTitle>My Orders</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent color="light">
           <OrderTotal>COMPLETED ({orderData.orders.length})</OrderTotal>

            {orderData.orders.map(card => (
                <IonItem routerLink="/home/account/orders/orderdetail"
                lines="full">
                    <IonAvatar size="large" slot="start">
                        <img src={card.img} alt="restaurant" />
                    </IonAvatar>
                    <IonLabel>
                        <Status>{card.status}</Status>
                        <h3>{card.name}</h3>
                        <h3>£{card.total} • {card.timestamp}</h3>
                    </IonLabel>

                </IonItem>
            ))}
        </IonContent>
    </IonPage>
  );
};

const OrderTotal = styled.div `
    font-weight: 800;
    font-size:14px;
    padding: 16px;
`

const Status = styled.div `
    text-transform: capitalize;
    font-size: 14px;
    margin-bottom: 4px;
    color: var(--ion-color-medium-tint)
`

export default Orders;
