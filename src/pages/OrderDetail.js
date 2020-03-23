import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle } from '@ionic/react';
import React from 'react';

const OrderDetail = () => {
  return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                <IonBackButton 
                    defaultHref="/account" 
                    text="My Orders"
                />

                </IonButtons>
                <IonTitle>Order detail</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent color="light">          
        </IonContent>
    </IonPage>
  );
};

export default OrderDetail;
