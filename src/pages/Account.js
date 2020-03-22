import { IonLabel, IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonButton, IonList, IonListHeader, IonItem } from '@ionic/react';
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
            <IonList>
                <IonListHeader>
                    Personal
                </IonListHeader>
                <IonItem>
                    My orders
                </IonItem>
                <IonItem button routerLink="/home/account/orders" detail>
                    <IonLabel>
                        My orders
                    </IonLabel>
                </IonItem>
            </IonList>
           <IonButton routerLink="/home/account/orders">
                Go to Orders page
           </IonButton>
        </IonContent>
    </IonPage>
  );
};

export default Account;
