import React, { useState } from 'react';
import { Restaurant, getRestaurant } from '../data/restaurants';
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

interface ViewRestaurantProps extends RouteComponentProps<{ id: string; }> { }

const RestaurantDetail: React.FC<ViewRestaurantProps> = ({ match }) => {

    const [restaurant, setRestaurant] = useState<Restaurant>();

    useIonViewWillEnter(() => {
        const rstrnt = getRestaurant(parseInt(match.params.id, 10));
        setRestaurant(rstrnt);
    });

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton
                            defaultHref="/"
                            text=""
                        />

                    </IonButtons>
                    <IonTitle>
                        {restaurant ? (
                            <>
                                {restaurant.name}
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
                {restaurant ? (
                    <>
                        {restaurant.name}
                    </>

                ) : <div>No categories</div>}

            </IonContent>
        </IonPage>
    );
};

export default RestaurantDetail;
