import React from 'react';
import { IonSearchbar, IonIcon, IonButton } from '@ionic/react';
import { optionsOutline } from 'ionicons/icons';
import './DeliverooSearch.css';

class DeliverooSearch extends React.Component {

  render() {
    return (
      <div className="row search-bar ion-padding">
        <IonSearchbar placeholder="Dishes, restaurants or cuisines" className="align-left ion-no-padding"></IonSearchbar>
        <IonButton fill="clear" className="minus-right-margin">
              <IonIcon slot="icon-only" size="small" icon={optionsOutline} color="primary" />
        </IonButton>
      </div>
    )
  }
}

export default DeliverooSearch;
