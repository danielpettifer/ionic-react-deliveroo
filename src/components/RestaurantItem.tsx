import React from 'react';
import {
  IonCard,
  IonLabel,
  IonIcon
} from '@ionic/react';
import { Restaurant } from '../data/restaurants';
import styled from '../../node_modules/styled-components';
import { star, pricetagOutline } from 'ionicons/icons';

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
     
      <TimeLabel>
        {restaurant.deliveryTime}
        <Mins>
          min
        </Mins>
      </TimeLabel>
      <IonLabel>
        <Name>{restaurant.name}</Name>
        <Row>
          <Rating
            className={`${restaurant.rating > 0 ? "oneStar" : null}
             ${restaurant.rating > 1 ? "twoStar" : null}
              ${restaurant.rating > 2 ? "threeStar" : null} 
               ${restaurant.rating > 3 ? "fourStar" : null}
                 ${restaurant.rating > 4 ? "fiveStar" : null}`}
          >
            <IonIcon
              className="canChange"
              icon={star}
              color="primary"
              size="small"
            />
            {restaurant.rating}
            <RatingLabel>
              {restaurant.rating < 1 ? (
                <>Terrible</>
              ) : restaurant.rating < 2 ? (
                <>Average</>
              ) : restaurant.rating < 3 ? (
                <>Ok</>
              ) : restaurant.rating < 4 ?(
                <>Good</>
              ) : restaurant.rating < 4.5 ? (
                <>Very good</>
              ) : (
                <>Excellent</>
              )
            }
            </RatingLabel>
          </Rating>
          <h3>({restaurant.ratingCount}+) • {restaurant.food}</h3>
        </Row>
        <Row>
        <h3>{restaurant.distance} miles away • £{restaurant.deliveryCost} delivery</h3>
        </Row>
        {restaurant.bundle && 
        <Row className="orange">
          <IonIcon icon={pricetagOutline} />
          £20 family bundles
        </Row>
        }
      </IonLabel>
    </IonCard>
  );
};

const RatingLabel = styled.div`
  margin-right: 4px;
  margin-left: 8px;
`
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

  >. canChange {
    margin-right: 8px;
  }

  &.oneStar {
    color: red;

    > .canChange {
      fill: red !important;
      margin-right: 8px;
    }
  }
  &.twoStar {
    color: orange;

    > .canChange {
      fill: orange !important;
      margin-right: 8px;
    }
  }
  &.threeStar {
    color: yellow;

    > .canChange {
      fill: yellow !important;
      margin-right: 8px;
    }
  }
  &.fourStar {
    color: green;

    > .canChange {
      fill: green !important;
      margin-right: 8px;
    }
  }

  &.fiveStar {
    color: limegreen;

    > .canChange {
      fill: limegreen !important;
      margin-right: 8px;
    }
  }
`

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;

  &.orange {
    color: #ffa200;
    
    > svg {
      margin-right: 8px;
    }
  }
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
