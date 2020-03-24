import React from 'react';
import {
  IonItem,
  IonLabel,
  IonAvatar,
} from '@ionic/react';
import { Restaurant } from '../data/restaurants';
import styled from '../../node_modules/styled-components';

interface RestaurantListItemProps {
  restaurant: Restaurant;
}

const RestaurantListItem: React.FC<RestaurantListItemProps> = ({ restaurant }) => {
  return (
    <IonItem routerLink={`/home/account/restaurants/restaurantdetail/${restaurant.id}`} detail={false} lines="full">
      <IonAvatar slot="start">
        <img src={restaurant.image} alt="restaurant" />
      </IonAvatar>
      <IonLabel>
        <Status>{restaurant.status}</Status>
        <h3>{restaurant.name}</h3>
        <h3>£{restaurant.total} • {restaurant.datetime}</h3>
      </IonLabel>

    </IonItem>
  );
};

const Status = styled.div`
    text-transform: capitalize;
    font-size: 14px;
    margin-bottom: 4px;
    color: var(--ion-color-medium-tint)
`

export default RestaurantListItem;
