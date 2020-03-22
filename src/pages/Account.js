import { IonLabel, IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonList, IonItem, IonIcon } from '@ionic/react';
import { newspaperOutline } from 'ionicons/icons';
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
                <IonItem lines="full" button routerLink="/home/account/orders" detail>
                 <IonIcon icon={newspaperOutline} slot="start" size="small" />
                    <IonLabel>
                        My orders
                    </IonLabel>
                </IonItem>
            </IonList>
        </IonContent>
    </IonPage>
  );
};

export default Account;
