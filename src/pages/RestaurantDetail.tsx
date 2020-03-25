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
import styled from '../../node_modules/styled-components';
import { arrowBack } from 'ionicons/icons';
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
                <IonToolbar className="start-opacity-zero">
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/" text="" icon={arrowBack} />
                    </IonButtons>
                    <IonTitle>
                        {restaurant ? (<>{restaurant.name}</>) : <>Unkown</>}
                    </IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense" className="header-large" no-border>
                    <IonToolbar className="bottom" color="transparent" >

                        <IonTitle color="transparent" className="transparent">
                            {restaurant ? (<>{restaurant.name}</>) : <>Unkown</>}
                        </IonTitle>
                    </IonToolbar>

                </IonHeader>
                <HeaderImage>
                    {restaurant ? (
                        <><img src={restaurant.image} /></>
                    ) : (<></>)}
                </HeaderImage>
                <ContentWrapper>
                    <ContentHeader>
                        {restaurant ? (<>{restaurant.name}</>) : <>Unkown</>}
                    </ContentHeader>
                    <h1>row</h1>
                    <h1>row</h1>
                    <h1>row</h1>
                    <h1>row</h1>
                    <h1>row</h1>
                    <h1>row</h1>
                    <h1>row</h1>
                    <h1>row</h1>
                    <h1>row</h1>

                    <h1>row</h1>
                    <h1>row</h1>
                    <h1>row</h1>
                    <h1>row</h1>
                    <h1>row</h1>
                    <h1>row</h1>
                    <h1>row</h1>
                    <h1>row</h1>
                    <h1>row</h1>
                </ContentWrapper>


            </IonContent>

        </IonPage >
    );
};

const ContentHeader = styled.div`
    font-size:20px;
    color:#000;
    font-weight: 800;
    padding: 16px 16px 32px;
    background: white;
    position: relative;
    top: -34px;
`

const ContentWrapper = styled.div`
    z-index: 9999999999;
    position: relative;
    background: white;
`

const HeaderImage = styled.div`

position: fixed;
top: 0;
left: 0;
right: 0;
min-height: 150px;
display:block;
z-index: 0;
`

export default RestaurantDetail;
