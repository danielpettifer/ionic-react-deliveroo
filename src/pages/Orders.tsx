import React, { useState } from 'react';
import { Order, getOrder, getOrders } from '../data/orders';
import OrderListItem from '../components/OrderListItem';
import {
    IonContent,
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonTitle,
    IonList,
    useIonViewWillEnter
} from '@ionic/react';

import styled from '../../node_modules/styled-components';

const Orders: React.FC = () => {

    const [orders, setOrders] = useState<Order[]>([]);

    useIonViewWillEnter(() => {
        const ordrs = getOrders();
        setOrders(ordrs);
    })

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton
                            defaultHref="/account"
                            text="Account"
                        />
                    </IonButtons>
                    <IonTitle>My Orders</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent color="light">
                <OrderTotal>COMPLETED ({getOrder.length})</OrderTotal>
                <IonList>
                    {orders.map(m => <OrderListItem key={m.id} order={m} />)}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

const OrderTotal = styled.div`
    font-weight: 800;
    font-size:14px;
    padding: 16px;
`

export default Orders;
