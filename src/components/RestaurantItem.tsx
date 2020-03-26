import React from 'react';
import {
  IonCard,
  IonLabel
} from '@ionic/react';
import { Restaurant } from '../data/restaurants';
import styled from '../../node_modules/styled-components';
import Rating from './Rating';
import Location from './Location';
import Bundle from './Bundle';
import TimeBadge from './TimeBadge';
import Promo from './Promo';

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

      <Promo deliveryCost={restaurant.deliveryCost} />
      <TimeBadge deliveryTime={restaurant.deliveryTime} />
      <IonLabel>
        <Name>{restaurant.name}</Name>
        <Rating
          rating={restaurant.rating}
          ratingCount={restaurant.ratingCount}
          food={restaurant.food}
        />
        <Location
          distance={restaurant.distance}
          deliveryCost={restaurant.deliveryCost}
        />
        <Bundle bundle={restaurant.bundle} />
      </IonLabel>
    </IonCard>
  );
};



const Name = styled.div`
  font-size: 14px;
  font-weight: 800;
  margin-top: 12px;
  color: black;
  margin-bottom: 4px;
`


export default RestaurantItem;
