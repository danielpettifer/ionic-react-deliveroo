import React from 'react';
import { IonFab, IonFabButton, IonSegment, IonSegmentButton, IonLabel, IonIcon, IonButton } from '@ionic/react';
import { personOutline, chevronDown } from 'ionicons/icons';
import './DeliverooHeader.css';

interface ContainerProps { }

const DeliverooHeader: React.FC<ContainerProps> = () => {
  return (
    <div className="container ion-padding">
      <div className="accountLine">
        <div className="row">
          <div className="riderImg" /> 
          <div className="deliveryCol">
            <span className="label">
              Now
            </span>
            <IonButton fill="clear" color="dark" strong>
              <IonIcon slot="end" icon={chevronDown} color="primary" size="small" />
              Home
            </IonButton>
          </div>
        </div>
          <IonFab horizontal="end">
            <IonFabButton size="small" color="light">
              <IonIcon icon={personOutline} color="primary" />
            </IonFabButton>
          </IonFab>
      </div>
      <IonSegment
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
    </div>
  );
};

export default DeliverooHeader;
