import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import DeliverooHeader from '../components/DeliverooHeader/DeliverooHeader';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <DeliverooHeader />
      </IonContent>
    </IonPage>
  );
};

export default Home;
