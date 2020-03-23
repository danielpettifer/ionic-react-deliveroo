import React, { useState } from 'react';
import { Order, getOrder } from '../data/orders';
import {
    IonContent,
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonTitle,
    useIonViewWillEnter
} from '@ionic/react';
import { RouteComponentProps } from 'react-router';

interface ViewOrderProps extends RouteComponentProps<{ id: string; }> { }

const OrderDetail: React.FC<ViewOrderProps> = ({ match }) => {

    const [order, setOrder] = useState<Order>();

    useIonViewWillEnter(() => {
        const ordr = getOrder(parseInt(match.params.id, 10));
        setOrder(ordr);
    });

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton
                            defaultHref="/account"
                            text="{order.name}"
                        />

                    </IonButtons>
                    <IonTitle>Order detail</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent color="light">
                {order ? (
                    <>
                        test
                    </>

                ) : <div>No orders</div>}

            </IonContent>
        </IonPage>
    );
};

export default OrderDetail;
