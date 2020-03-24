import React, { useState } from 'react';
import { IonSearchbar, IonIcon, IonButton, IonModal } from '@ionic/react';
import { optionsOutline } from 'ionicons/icons';
import FilterModal from '../../modals/FilterModal';
import './MainSearch.css';

interface MainSearchPropsPageRef {
  current: HTMLElement
}

interface MainSearchProps {
  pageRef: MainSearchPropsPageRef;
}

export const MainSearch = ({ pageRef }: MainSearchProps) => {
  console.log({ pageRef });
  const [showModal, setShowModal] = useState(false);

  async function closeModal() {
    await setShowModal(false);
  }

  return (
    <div className="row search-bar ion-padding">
      <IonSearchbar mode="ios" placeholder="Dishes, restaurants or cuisines" className="align-left ion-no-padding"></IonSearchbar>
      <IonButton fill="clear" className="minus-right-margin" slot="end" onClick={() => setShowModal(true)}>
        <IonIcon slot="icon-only" size="small" icon={optionsOutline} color="primary" />
      </IonButton>
      <IonModal
        isOpen={showModal}
        swipeToClose={true}
        presentingElement={pageRef.current}
        onDidDismiss={() => setShowModal(false)}
        showBackdrop={true}
      >
        <FilterModal closeAction={closeModal}></FilterModal>
      </IonModal>
    </div>
  )
}


export default MainSearch;
