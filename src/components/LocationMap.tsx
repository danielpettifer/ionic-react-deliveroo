import React, { useState } from 'react';
import styled from 'styled-components';
import { IonIcon, IonModal, IonButton } from '@ionic/react';
import { locationOutline } from 'ionicons/icons';
import FilterModal from '../modals/FilterModal';

interface LocationProps {
  restaurantRef: HTMLElement | undefined;
}

export const LocationMap = ({ restaurantRef }: LocationProps) => {
  const [showModal, setShowModal] = useState(false);

  async function closeModal() {
    await setShowModal(false);
  }

  return (
    <Row>
      <IonIcon icon={locationOutline} />
      <Label>address</Label>
      <IonButton
        fill="clear"
        color="primary"
        onClick={() => setShowModal(true)}
      >
        map
      </IonButton>
      <IonModal
        isOpen={showModal}
        swipeToClose={true}
        presentingElement={restaurantRef}
        onDidDismiss={() => setShowModal(false)}
        showBackdrop={true}
      >
        <FilterModal closeAction={closeModal} />
      </IonModal>
    </Row>
  )
};

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  font-size: 14px;
`

const Label = styled.div`
  font-size: 14px;
  margin-left: 8px;
`

export default LocationMap;

