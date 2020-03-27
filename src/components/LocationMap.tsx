import React from 'react';
import styled from 'styled-components';
import { IonIcon } from '@ionic/react';
import { locationOutline } from 'ionicons/icons';

interface LocationProps {
  address: string
}

const LocationMap: React.FC<LocationProps> = ({ address }) => (
  <Row>
    <IonIcon icon={locationOutline} />
    <Label>{address}</Label>
  </Row>
);

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

