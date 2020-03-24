import React, { useState } from 'react';
import { Category, getCategory } from '../data/categories';
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

interface ViewCategoryProps extends RouteComponentProps<{ id: string; }> { }

const CategoryDetail: React.FC<ViewCategoryProps> = ({ match }) => {

    const [category, setCategory] = useState<Category>();

    useIonViewWillEnter(() => {
        const ctgry = getCategory(parseInt(match.params.id, 10));
        setCategory(ctgry);
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
                        {category ? (
                            <>
                                {category.name}
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
                {category ? (
                    <>
                        {category.name}
                    </>

                ) : <div>No categories</div>}

            </IonContent>
        </IonPage>
    );
};

export default CategoryDetail;
