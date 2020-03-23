import React from 'react';
import {
  IonItem,
  IonLabel,
  IonAvatar,
} from '@ionic/react';
import { Order } from '../data/orders';
import styled from '../../node_modules/styled-components';

interface OrderListItemProps {
  order: Order;
}

const OrderListItem: React.FC<OrderListItemProps> = ({ order }) => {
  return (
    // <IonItem routerLink={`/order/${order.id}`} detail={false}>
    //   <div slot="start" className="dot dot-unread"></div>
    //   <IonLabel className="ion-text-wrap">
    //     <h2>
    //       {order.status}
    //       <span className="date">
    //         <IonNote>{order.datetime}</IonNote>
    //       </span>
    //     </h2>
    //     <h3>{order.name}</h3>

    //   </IonLabel>
    // </IonItem>
    <IonItem routerLink={`/order/${order.id}`} detail={false} lines="full">
      <IonAvatar slot="start">
        <img src={order.image} alt="restaurant" />
      </IonAvatar>
      <IonLabel>
        <Status>{order.status}</Status>
        <h3>{order.name}</h3>
        <h3>£{order.total} • {order.datetime}</h3>
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

export default OrderListItem;
