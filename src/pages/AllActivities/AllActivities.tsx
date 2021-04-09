import React from 'react'

import {
    IonCol,
    IonContent,
    IonGrid,
    IonHeader, 
    IonPage, 
    IonRow, 
    IonTitle, 
    IonToolbar 
} from '@ionic/react';


const AllActivities: React.FC = () => {
    return (
        <IonPage>
            
            <IonHeader>
                <IonToolbar>
                    <IonTitle>All activities</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <h1>All activities work!</h1>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>

        </IonPage>
    )
}

export default AllActivities;
