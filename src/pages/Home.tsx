import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import DeliverooHeader from '../components/DeliverooHeader/DeliverooHeader';
import DeliverooSearch from '../components/DeliverooSearch/DeliverooSearch';
import DeliverooSegmentControl from '../components/DeliverooSegmentControl/DeliverooSegmentControl';
import HorizontalCardList from '../components/HorizontalCardList/HorizontalCardList';
import Card from '../components/Card/Card';
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
        <HorizontalCardList>
          <Card 
            title="Noodles"
            img="https://www.takeaway.com/foodwiki/uploads/sites/11/2019/08/ramen_2-1080x1080.jpg"
          />
          <Card
            title="Burgers"
            img="https://www.thechunkychef.com/wp-content/uploads/2015/09/Dr-Pepper-BBQ-Burgers-8-500x375.jpg"
          />
        </HorizontalCardList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
