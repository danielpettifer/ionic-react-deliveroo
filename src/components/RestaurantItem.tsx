import React from 'react';
import {
  IonItem,
  IonLabel,
  IonAvatar,
} from '@ionic/react';
import { Restaurant } from '../data/restaurants';

interface RestaurantItemProps {
  restaurant: Restaurant;
}

const RestaurantItem: React.FC<RestaurantItemProps> = ({ restaurant }) => {
  return (
    <IonItem routerLink={`/home/restaurantdetail/${restaurant.id}`} detail={false} lines="full">
      <IonAvatar slot="start">
        <img src={restaurant.image} alt="restaurant" />
      </IonAvatar>
      <IonLabel>
        <h3>{restaurant.status}</h3>
        <h3>{restaurant.name}</h3>
        <h3>£{restaurant.food} • {restaurant.status}</h3>
      </IonLabel>
    </IonItem>
  );
};

export default RestaurantItem;
