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
      {restaurant.deliveryCost < 2.5 ? (
        <DeliveryLabel>
          £{restaurant.deliveryCost} Delivery
      </DeliveryLabel>
      ) : (<></>)}
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
