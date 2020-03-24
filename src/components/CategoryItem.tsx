import React from 'react';
import {
  IonCard,
  IonLabel,
} from '@ionic/react';
import { Category } from '../data/categories';

interface CategoryListItemProps {
  category: Category;
}

const CategoryListItem: React.FC<CategoryListItemProps> = ({ category }) => {
  return (
    <>
      <IonCard
        className="category-list-item"
        routerLink={`/home/categorydetail/${category.id}`}
      >
        <img src={category.image} alt="restaurant" />
        <IonLabel className="label-bottom">
          <h3>{category.name}</h3>
        </IonLabel>
      </IonCard>
    </>
  );
};

export default CategoryListItem;
