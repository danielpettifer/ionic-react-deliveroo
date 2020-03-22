import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonButton } from '@ionic/react';
import React from 'react';
// import { styled } from 'styled-components';

const Account = () => {
  return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                <IonBackButton defaultHref="/" />
                </IonButtons>
                <IonTitle>My Account</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent color="light">
           <IonButton routerLink="/home/account/orders">
                Go to Orders page
           </IonButton>
        </IonContent>
    </IonPage>
  );
};

export default Account;
