import React from 'react';
import {
  IonItem,
  IonLabel,
  IonAvatar,
} from '@ionic/react';
import { Category } from '../data/categories';
import styled from '../../node_modules/styled-components';

interface CategoryListItemProps {
  category: Category;
}

const CategoryListItem: React.FC<CategoryListItemProps> = ({ category }) => {
  return (
    <>
      <IonItem routerLink={`/home/categorydetail/${category.id}`} detail={false} lines="full">
        <IonAvatar slot="start">
          <img src={category.image} alt="restaurant" />
        </IonAvatar>
        <IonLabel>
          <h3>{category.name}</h3>
        </IonLabel>

      </IonItem>

      {/* <Cardbase>
        <Title>{category.name}</Title>
        <img src={category.image} alt="restaurant" />
      </Cardbase> */}
    </>
  );
};

const Title = styled.div`
    font-size: 12px;
    line-height: 12px;
    text-transform: capitalize;
    color: #fff;
    font-weight: 600;
    margin-bottom: 4px;
    z-index: 1;
`

const Cardbase = styled.div`
    display: flex;
    min-width: 80px;
    height: 80px;
    border-radius: 5px;
    background: var(--ion-color-light-shade);
    background-image: url({category.name})
    margin-right: 8px;
    align-items: flex-end;
    padding: 8px;
    font-size: 10px;
    background-size: contain;
    position: relative;
    overflow: hidden;
    `

export default CategoryListItem;
