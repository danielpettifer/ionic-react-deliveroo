import React from 'react';
import { IonSearchbar, IonFab, IonFabButton, IonSegment, IonSegmentButton, IonLabel, IonIcon, IonButton } from '@ionic/react';
import { personOutline, chevronDown, optionsOutline } from 'ionicons/icons';
import './DeliverooSegmentControl.css';

class DeliverooSegmentControl extends React.Component {

  render() {
    return (
        <IonSegment
          className="ion-padding segment-control"
          onIonChange={e => console.log('Segment selected', e.detail.value)}
          value="Delivery"
        >
          <IonSegmentButton value="Delivery">
            <IonLabel>Delivery</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="Pickup">
            <IonLabel>Pickup</IonLabel>
          </IonSegmentButton>
        </IonSegment>
    )
  }
}

export default DeliverooSegmentControl;
