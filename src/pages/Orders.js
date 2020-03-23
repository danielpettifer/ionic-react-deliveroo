import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle } from '@ionic/react';
import OrderCard from '../components/orderCard/orderCard';
import orderData from '../orderData.json';
import React from 'react';
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
           <h1>orders</h1>

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

export default Orders;
