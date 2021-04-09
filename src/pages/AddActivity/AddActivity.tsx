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

export const AddActivity: React.FC = () => {
    return (
        <IonPage>
            
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Add activity</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <h1>Add activity work!</h1>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>

        </IonPage>
    )
}
