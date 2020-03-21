import React from 'react';
import { IonSearchbar, IonFab, IonFabButton, IonSegment, IonSegmentButton, IonLabel, IonIcon, IonButton } from '@ionic/react';
import { personOutline, chevronDown, optionsOutline } from 'ionicons/icons';
import './DeliverooHeader.css';

class DeliverooHeader extends React.Component {

  render() {
    return (
      <div className="container" >
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
        </div>
    )
  }
}

export default DeliverooHeader;
