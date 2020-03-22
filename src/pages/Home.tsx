import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import DeliverooHeader from '../components/DeliverooHeader/DeliverooHeader';
import DeliverooSearch from '../components/DeliverooSearch/DeliverooSearch';
import DeliverooSegmentControl from '../components/DeliverooSegmentControl/DeliverooSegmentControl';
import HorizontalCardList from '../components/HorizontalCardList/HorizontalCardList';
import Notice from '../components/Notice/Notice';
import Card from '../components/Card/Card';

import './Home.css';

import staticdata from '../staticdata.json';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent 
        scrollEvents={true}
        onIonScrollStart={() => {
         console.log('scrolled')
        }}
      >
        <DeliverooHeader />
        <DeliverooSegmentControl />
        <DeliverooSearch />
        <HorizontalCardList>
          {staticdata.smallCards.map(card => (
            <Card title={card.title} image={card.img} />
          ))}
        </HorizontalCardList>
        <Notice
          title="test"
          content="some content"
        />
      </IonContent>
    </IonPage>
  );
};

export default Home;
