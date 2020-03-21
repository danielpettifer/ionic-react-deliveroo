import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import DeliverooHeader from '../components/DeliverooHeader/DeliverooHeader';
import DeliverooSearch from '../components/DeliverooSearch/DeliverooSearch';
import DeliverooSegmentControl from '../components/DeliverooSegmentControl/DeliverooSegmentControl';
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
        <h1>row</h1>
        <h1>row</h1>
        <h1>row</h1>
        <h1>row</h1>
        <h1>row</h1>
        <h1>row</h1>
        <h1>row</h1>
        <h1>row</h1>
        <h1>row</h1>
        <h1>row</h1>
        <h1>row</h1>
        <h1>row</h1>
        <h1>row</h1>
        <h1>row</h1>
        <h1>row</h1>
        <h1>row</h1>
        <h1>row</h1>
        <h1>row</h1>
        <h1>row</h1>
        <h1>row</h1>
        <h1>row</h1><h1>row</h1>
      </IonContent>
    </IonPage>
  );
};

export default Home;
