import React, { useRef, useState } from 'react';
import { Restaurant, getRestaurant } from '../data/restaurants';
import { MenuItem, getMenuItems } from '../data/menuItems';
import {
    IonContent,
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonButton,
    IonBackButton,
    IonTitle,
    useIonViewWillEnter,
    IonIcon,
    IonList,
    IonItem
} from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import styled from '../../node_modules/styled-components';
import { arrowBack, shareOutline, search } from 'ionicons/icons';
import { ScrollDetail } from '@ionic/core';
import Rating from '../components/Rating';
import LocationMap from '../components/LocationMap';
import MenuListItem from '../components/MenuListItem';

interface ViewRestaurantProps extends RouteComponentProps<{ id: string; }> { }

const RestaurantDetail: React.FC<ViewRestaurantProps> = ({ match }) => {
    const restaurantRef = useRef(undefined);
    const [height, setHeight] = useState(0);
    const [restaurant, setRestaurant] = useState<Restaurant>();
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

    useIonViewWillEnter(() => {
        const rstrnt = getRestaurant(parseInt(match.params.id, 10));
        setRestaurant(rstrnt);
        const mntms = getMenuItems();
        setMenuItems(mntms);
    });

    const onScroll = (e: CustomEvent<ScrollDetail>) => {
        setHeight(e.detail.scrollTop);
    };

    let imageScale = 1;
    if (height < 0) {
        imageScale = 1 - (height / 1000);
    }

    return (
        <IonPage ref={restaurantRef}>
            <IonHeader>
                <IonToolbar className="start-opacity-zero">
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/" text="" icon={arrowBack} />
                    </IonButtons>
                    <IonButtons slot="end">
                        <IonButton className="top-button" shape="round">
                            <IonIcon icon={shareOutline} />
                        </IonButton>
                        <IonButton className="top-button" shape="round">
                            <IonIcon icon={search} />
                        </IonButton>
                    </IonButtons>
                    <IonTitle>
                        {restaurant ? (<>{restaurant.name}</>) : <>Unkown</>}
                    </IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent
                fullscreen
                onIonScroll={onScroll}
                scrollEvents={true}
            >
                <IonHeader collapse="condense" className="header-large" no-border>
                    <IonToolbar className="bottom" color="transparent" >

                        <IonTitle color="transparent" className="transparent">
                            {restaurant ? (<>{restaurant.name}</>) : <>Unkown</>}
                        </IonTitle>
                    </IonToolbar>

                </IonHeader>
                <HeaderImage style={{ transform: `scale(${imageScale})` }}>
                    {restaurant ? (
                        <><img alt="Restaurant" src={restaurant.image} /></>
                    ) : (<></>)}
                </HeaderImage>

                {restaurant ? (
                    <ContentWrapper>
                        <ContentHeader>
                            {restaurant.name}
                        </ContentHeader>
                        <ContentSubHeader>
                            <Rating
                                rating={restaurant.rating}
                                ratingCount={restaurant.ratingCount}
                                food={restaurant.food}
                            />
                            <LocationMap
                                restaurantRef={restaurantRef.current}
                            />
                        </ContentSubHeader>
                        <IonList>
                            {menuItems.map(i => <MenuListItem key={i.id} menuItem={i} />)}

                        </IonList>
                        <SpaceLarge />
                    </ContentWrapper>) : null}


            </IonContent>

        </IonPage >
    );
};

const SpaceLarge = styled.div`
    height: 1000px;
`

const ContentHeader = styled.div`
    font-size:20px;
    color:#000;
    font-weight: 800;
    padding: 16px 16px 0;
    background: white;
    position: relative;
    top: -34px;
    margin-bottom: -32px;
`

const ContentSubHeader = styled.div`
    padding: 16px;
`

const ContentWrapper = styled.div`
    z-index: 9999999999;
    position: relative;
    background: white;
    font-size: 14px;
`

const HeaderImage = styled.div`
    animation: fadeIn .5s ;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    min-height: 150px;
    display:block;
    z-index: 0;
    transform:scale(1);
`

export default RestaurantDetail;
