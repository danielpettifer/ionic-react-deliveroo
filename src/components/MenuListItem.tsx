import React from 'react';
import {
  IonCard,
  IonLabel
} from '@ionic/react';
import { MenuItem } from '../data/menuItems';
import styled from '../../node_modules/styled-components';

interface MenuItemProps {
  menuItem: MenuItem;
}

const MenuListItem: React.FC<MenuItemProps> = ({ menuItem }) => {

  return (
    <IonCard
      className="card-width-large"
      routerLink={`/home/restaurantdetail/${menuItem.id}`}
    >

      <img
        className="card-image-wide"
        src={menuItem.image}
        alt="restaurant"
      />

      <IonLabel>
        <Name>{menuItem.name}</Name>
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


export default MenuListItem;
