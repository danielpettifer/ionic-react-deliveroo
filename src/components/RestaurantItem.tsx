import React from 'react';
import {
  IonCard,
  IonLabel,
  IonIcon
} from '@ionic/react';
import { Restaurant } from '../data/restaurants';
import styled from '../../node_modules/styled-components';
import { star } from 'ionicons/icons';

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
      <TimeLabel>
        {restaurant.deliveryTime}
        <Mins>
          min
        </Mins>
      </TimeLabel>
      <IonLabel>
        <Name>{restaurant.name}</Name>
        <Row>
          <Rating>
            <IonIcon icon={star} color="primary" size="small" />
            {restaurant.rating}
          </Rating>
          <h3>({restaurant.ratingCount}+) • {restaurant.food}</h3>

        </Row>
      </IonLabel>
    </IonCard>
  );
};

const TimeLabel = styled.div`
  position: absolute;
  top: 115px;
  right: 16px;
  display; flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  background: #fff;
  color: #000;
  font-weight: 800;
  padding: 6px 24px;
  border-radius: 30px;
  box-shadow: 0 3px 10px 5px rgba(0,0,0,0.1);
`
const Mins = styled.div`
color: red;
text-align: center;
font-weight: 400;
color: var(--ion-color-medium)
`

const Name = styled.div`
  font-size: 14px;
  font-weight: 800;
  margin-top: 12px;
  color: black;
  margin-bottom: 4px;
`

const Rating = styled.div`
  color: green;
  display: flex;
  align-items: center;
`

const Row = styled.div`
  display: flex;
  align-items: center;
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
