import React, { useRef, useState } from 'react';
import { IonContent, IonPage, useIonViewWillEnter } from '@ionic/react';
import staticdata from '../staticdata.json';
import MainHeader from '../components/MainHeader/MainHeader';
import MainSearch from '../components/MainSearch/MainSearch';
import MainSegmentControl from '../components/MainSegmentControl/MainSegmentControl';
import HorizontalCardList from '../components/HorizontalCardList/HorizontalCardList';
import Notice from '../components/Notice/Notice';
import Card from '../components/Card/Card';
import CategoryListItem from '../components/CategoryItem';
import { Category, getCategories } from '../data/categories';

import './Home.css';


const Home: React.FC = () => {
  // const pageRef = useRef;
  const [categories, setCategories] = useState<Category[]>([]);

  useIonViewWillEnter(() => {
    const ctgrs = getCategories();
    setCategories(ctgrs);
  }
  )

  return (
    // <IonPage ref={pageRef}>
    <IonPage>
      <IonContent>
        <MainHeader />
        <MainSegmentControl />
        {/* <MainSearch pageRef={pageRef} /> */}
        <MainSearch />
        <HorizontalCardList>
          {/* {staticdata.smallCards.map(card => (
            <Card title={card.title} image={card.img} />
          ))} */}
          {categories.map(m => <CategoryListItem key={m.id} category={m} />)}
        </HorizontalCardList>
        <Notice
          title="Contact-free delivery"
          content="Your rider will knock, place your order at your door and wait nearby to make sure you receive it."
        />
      </IonContent>
    </IonPage>
  );
};

export default Home;
