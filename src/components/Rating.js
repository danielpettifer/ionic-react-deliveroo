import React from 'react';
import styled from 'styled-components';
import { IonIcon } from '@ionic/react';
import { star } from 'ionicons/icons';
const Rating = props => (
  <Row>
    <RatingContainer
      className={`${props.rating > 0 ? "oneStar" : null}
             ${props.rating > 1 ? "twoStar" : null}
              ${props.rating > 2 ? "threeStar" : null} 
               ${props.rating > 3 ? "fourStar" : null}
                 ${props.rating > 4 ? "fiveStar" : null}`}
    >
      <IonIcon
        className="canChange"
        icon={star}
        color="primary"
        size="small"
      />
      {props.rating}
      <RatingLabel>
        {props.rating < 1 ? (
          <>Terrible</>
        ) : props.rating < 2 ? (
          <>Average</>
        ) : props.rating < 3 ? (
          <>Ok</>
        ) : props.rating < 4 ? (
          <>Good</>
        ) : props.rating < 4.5 ? (
          <>Very good</>
        ) : (
                    <>Excellent</>
                  )
        }
      </RatingLabel>
    </RatingContainer>
    <RatingMeta>({props.ratingCount}+) • {props.food}</RatingMeta>
  </Row>
)

const RatingMeta = styled.div`
  font-size: 14px;
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


const RatingLabel = styled.div`
  margin-right: 4px;
  margin-left: 8px;
`

const RatingContainer = styled.div`
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
      margin-right: 8pximport Rating from './Rating';
;
    }
  }
`



export default Rating;
