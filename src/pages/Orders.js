import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle } from '@ionic/react';
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
        </IonContent>
    </IonPage>
  );
};

export default Orders;
