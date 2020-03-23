import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle } from '@ionic/react';
import OrderCard from '../components/orderCard/orderCard';
import orderData from '../orderData.json';
import React from 'react';
import styled from '../../node_modules/styled-components';
// import { styled } from 'styled-components';

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
           <OrderTotal>COMPLETED ({OrderCard.length})</OrderTotal>

            {orderData.orders.map(card => (
                <OrderCard 
                    image={card.image}
                    status={card.status}
                    name={card.name}
                    total={card.total}
                    timestamp={card.timestamp}
                />
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

export default Orders;
