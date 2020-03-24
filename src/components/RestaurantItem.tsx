import React from 'react';
import {
  IonCard,
  IonItem,
  IonLabel,
  IonAvatar,
} from '@ionic/react';
import { Restaurant } from '../data/restaurants';
import styled from '../../node_modules/styled-components';

interface RestaurantItemProps {
  restaurant: Restaurant;
}

const RestaurantItem: React.FC<RestaurantItemProps> = ({ restaurant }) => {
  return (
    <IonCard
      className="card-width-large"
      routerLink={`/home/restaurantdetail/${restaurant.id}`}
    >
      <img
        className="card-image-wide"
        src={restaurant.image}
        alt="restaurant"
      />
      <DeliveryLabel>
        £{restaurant.deliveryCost} Delivery
      </DeliveryLabel>
      <IonLabel>
        <h3>{restaurant.name}</h3>
        <h3>{restaurant.rating}</h3>
        <h3>£{restaurant.food} • {restaurant.status}</h3>
      </IonLabel>
    </IonCard>
  );
};

const DeliveryLabel = styled.div`
  position: absolute;
  top: 4px;
  left: 4px;
  display: block;
  background: #fff;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 4px;
`

export default RestaurantItem;
