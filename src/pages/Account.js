import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle } from '@ionic/react';
import React from 'react';
import { styled } from 'styled-components';

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
           
        </IonContent>
    </IonPage>
  );
};

export default Account;
