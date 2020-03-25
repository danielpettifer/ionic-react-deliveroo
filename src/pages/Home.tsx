import React, { useRef, useState } from 'react';
import { IonContent, IonPage, useIonViewWillEnter } from '@ionic/react';
import MainHeader from '../components/MainHeader/MainHeader';
import MainSearch from '../components/MainSearch/MainSearch';
import MainSegmentControl from '../components/MainSegmentControl/MainSegmentControl';
import HorizontalCardList from '../components/HorizontalCardList/HorizontalCardList';
import Notice from '../components/Notice/Notice';
import CategoryListItem from '../components/CategoryItem';
import RestaurantItem from '../components/RestaurantItem';
import { Category, getCategories } from '../data/categories';
import { Restaurant, getRestaurants } from '../data/restaurants';
import './Home.css';
import styled from '../../node_modules/styled-components';

const Home: React.FC = () => {
  // const pageRef = useRef;
  const [categories, setCategories] = useState<Category[]>([]);
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useIonViewWillEnter(() => {
    const ctgrs = getCategories();
    setCategories(ctgrs);
    const rstrnts = getRestaurants();
    setRestaurants(rstrnts);
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
          {categories.map(m => <CategoryListItem key={m.id} category={m} />)}
        </HorizontalCardList>
        <Notice
          title="Contact-free delivery"
          content="Your rider will knock, place your order at your door and wait nearby to make sure you receive it."
        />
        <SectionHeader>New on Similaroo</SectionHeader>
        <HorizontalCardList>
          {restaurants.map(m => <RestaurantItem key={m.id} restaurant={m} />)}
        </HorizontalCardList>
        <SectionHeader>Highest rated</SectionHeader>
        <HorizontalCardList>
          {restaurants.map(m => <RestaurantItem key={m.id} restaurant={m} />)}
        </HorizontalCardList>
        <SectionHeader>Closest restaurants</SectionHeader>
        <HorizontalCardList>
          {restaurants.map(m => <RestaurantItem key={m.id} restaurant={m} />)}
        </HorizontalCardList>
      </IonContent>
    </IonPage>
  );
};

const SectionHeader = styled.div`
  font-weight: 800;
  font-size: 14px;
  color: black;
  padding: 24px 0 0 16px;
  margin-bottom: -8px;
`
export default Home;
