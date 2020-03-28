import React, { useState } from 'react';
import { MenuItem, getMenuItem } from '../data/menuItems';
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

interface ViewMenuItemProps extends RouteComponentProps<{ id: string; }> { }

const MenuItemDetail: React.FC<ViewMenuItemProps> = ({ match }) => {

    const [menuItem, setMenuItem] = useState<MenuItem>();

    useIonViewWillEnter(() => {
        const mntm = getMenuItem(parseInt(match.params.id, 10));
        setMenuItem(mntm);
    });

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton
                            defaultHref="/account"
                            text="My Orders"
                        />

                    </IonButtons>
                    <IonTitle>
                        {menuItem ? (
                            <>
                                {menuItem.name}
                            </>

                        ) :

                            <>
                                unkown
                            </>
                        }


                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent color="light">
                {menuItem ? (
                    <>
                        {menuItem.name}
                    </>

                ) : <div>No orders</div>}

            </IonContent>
        </IonPage>
    );
};

export default MenuItemDetail;
