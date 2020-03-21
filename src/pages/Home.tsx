import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import DeliverooHeader from '../components/DeliverooHeader/DeliverooHeader';
import DeliverooSearch from '../components/DeliverooSearch/DeliverooSearch';
import DeliverooSegmentControl from '../components/DeliverooSegmentControl/DeliverooSegmentControl';
import HorizontalCardList from '../components/HorizontalCardList/HorizontalCardList';
import './Home.css';

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
       <HorizontalCardList />
      </IonContent>
    </IonPage>
  );
};

export default Home;
