import React from 'react';
import {
  IonItem,
  IonLabel,
  IonThumbnail
} from '@ionic/react';
import { MenuItem } from '../data/menuItems';
import { Restaurant } from '../data/restaurants';
import styled from '../../node_modules/styled-components';

interface MenuItemProps {
  menuItem: MenuItem;
}


const MenuListItem: React.FC<MenuItemProps> = ({ menuItem }) => {

  return (
    <IonItem
      className="menu-item"
      routerLink={`/home/restaurantdetail/menuitemdetail/${menuItem.id}`}
      detail={false}
      lines="full"
    >
      <IonThumbnail slot="end">
        <img
          className="thumbnail-large"
          src={menuItem.image}
          alt="item"
        />
      </IonThumbnail>

      <IonLabel>
        <Name>{menuItem.name}</Name>
        <Description>{menuItem.description}</Description>
        <Row>
          <Price>£{menuItem.price.toFixed(2)}</Price>
          {menuItem.popular &&
            <Popular>• Popular</Popular>
          }
        </Row>
      </IonLabel>
    </IonItem>
  );
};

const Popular = styled.div`
  color: orange;
  margin-left: 4px;
  font-size: 12px;`

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
`

const Price = styled.div`
  font-size: 12px;
  color: var(--ion-color-medium-tint);
`

const Description = styled.div`
  display: block;
  font-size: 12px;
  color: var(--ion-color-medium-tint);
`

const Name = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: black;
  margin-bottom: 2px;
`


export default MenuListItem;
