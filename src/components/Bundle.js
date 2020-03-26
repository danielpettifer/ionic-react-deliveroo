import React from 'react';
import styled from 'styled-components';
import { IonIcon } from '@ionic/react';
import { pricetagOutline } from 'ionicons/icons';
const Bundle = props => (
  <div>
    {props.bundle &&
      <Row className="orange">
        <IonIcon icon={pricetagOutline} />
        £20 family bundles
  </Row>
    }
  </div>
)

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  
  &.orange {
    color: #ffa200;
    
    > svg {
      margin-right: 8px;
    }
  }
`

export default Bundle;
