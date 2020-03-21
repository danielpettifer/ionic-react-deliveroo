import React from 'react';
import { IonSearchbar, IonFab, IonFabButton, IonSegment, IonSegmentButton, IonLabel, IonIcon, IonButton, IonToolbar } from '@ionic/react';
import { personOutline, chevronDown, optionsOutline } from 'ionicons/icons';
import './DeliverooHeader.css';

interface ContainerProps { }

const DeliverooHeader: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <div className="accountLine ion-padding">
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
        className="ion-padding"
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
      <div className="row search-bar ion-padding">
       <IonSearchbar placeholder="Dishes, restaurants or cuisines" className="align-left ion-no-padding"></IonSearchbar>
       <IonButton fill="clear" className="minus-right-margin">
              <IonIcon slot="icon-only" size="small" icon={optionsOutline} color="primary" />
            </IonButton>
      </div>
    </div>
  );
};

export default DeliverooHeader;
