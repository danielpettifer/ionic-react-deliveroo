import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import staticdata from '../staticdata.json';
import DeliverooHeader from '../components/DeliverooHeader/DeliverooHeader';
import DeliverooSearch from '../components/DeliverooSearch/DeliverooSearch';
import DeliverooSegmentControl from '../components/DeliverooSegmentControl/DeliverooSegmentControl';
import HorizontalCardList from '../components/HorizontalCardList/HorizontalCardList';
import Notice from '../components/Notice/Notice';
import Card from '../components/Card/Card';

import './Home.css';

const Account = () => {
  return (
    <IonPage>
      <IonContent>
        <DeliverooHeader />
        <DeliverooSegmentControl />
        <DeliverooSearch />
        <HorizontalCardList>
          {staticdata.smallCards.map(card => (
            <Card title={card.title} image={card.img} />
          ))}
        </HorizontalCardList>
        <Notice
          title="Contact-free delivery"
          content="Your rider will knock, place your order at your door and wait nearby to make sure you receive it."
        />
      </IonContent>
    </IonPage>
  );
};

export default Account;
