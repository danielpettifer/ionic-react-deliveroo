import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle } from '@ionic/react';
import React from 'react';
// import { styled } from 'styled-components';

const Orders = () => {
  return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                <IonBackButton defaultHref="/account" />
                </IonButtons>
                <IonTitle>Orders</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent color="light">
           <h1>orders</h1>
        </IonContent>
    </IonPage>
  );
};

export default Orders;
