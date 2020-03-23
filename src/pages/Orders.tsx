import OrderListItem from '../components/OrderListItem';
import React, { useState } from 'react';
import { Order, getOrders } from '../data/orders';

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

const Orders: React.FC = () => {

    const [orders, setOrders] = useState<Order[]>([]);

    useIonViewWillEnter(() => {
        const ordrs = getOrders();
        setOrders(ordrs);
    })

    return (
        <IonPage id="orders-page">
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
                <IonList>
                    {orders.map(m => <OrderListItem key={m.id} order={m} />)}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Orders;
