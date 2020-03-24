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
    <IonItem routerLink={`/home/categorydetail/${category.id}`} detail={false} lines="full">
      <IonAvatar slot="start">
        <img src={category.image} alt="restaurant" />
      </IonAvatar>
      <IonLabel>
        <h3>{category.name}</h3>
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

export default CategoryListItem;
