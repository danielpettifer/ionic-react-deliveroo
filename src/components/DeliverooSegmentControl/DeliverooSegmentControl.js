import React from 'react';
import { IonSegment, IonSegmentButton, IonLabel } from '@ionic/react';

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
