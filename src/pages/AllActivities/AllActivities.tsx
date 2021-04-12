import React, {useContext, useState} from 'react'
import classes from "./AllActivities.module.css";

import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader, 
    IonIcon, 
    IonItem, 
    IonMenuButton, 
    IonModal, 
    IonPage, 
    IonRow, 
    IonTitle, 
    IonToolbar 
} from '@ionic/react';
import ActividadesContext, { Actividad} from '../../data/actividades-context';
import CompletaActModal from '../../components/CompletaActModal';
import {checkmarkDone} from 'ionicons/icons';

const AllActivities: React.FC = () => {

    const [actividadCompleta, setActividadCompleta] = useState<Actividad>();
    
    const actividadesCtxt = useContext(ActividadesContext);

    // se abre cuando exista una actividad
    const abrirModal = (actividad: Actividad) => {
        setActividadCompleta(actividad);
    };


    // se pasa undefined por uqe se va a brir el modal siempre y cuando la actividad exista
    const cerrarModal = () => {
        setActividadCompleta(undefined);
    };



    return (

        <React.Fragment>

            <IonModal isOpen = {!!actividadCompleta} swipeToClose= {true}>
                <CompletaActModal actividad = {actividadCompleta as Actividad} dismissModal= {cerrarModal}></CompletaActModal>
            </IonModal>

            <IonPage>
            
                <IonHeader>
                    <IonToolbar>
                        <IonButton slot = "start" color = "secondary">
                            <IonMenuButton></IonMenuButton>
                        </IonButton>
                        <IonTitle>Actividades</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent>
                    <IonGrid>

                        {actividadesCtxt.actividades.map(actividad => (
                            <IonRow key = {actividad.id}>
                                <IonCol className="ion-text-center">
                                    <IonCard>
                                        <img src = {actividad.imagenUrl} alt ="Actividad"></img>
                                        <IonCardHeader>
                                            <IonCardTitle>{actividad.hora}</IonCardTitle>
                                            <IonCardSubtitle>{actividad.titulo}</IonCardSubtitle>                                    
                                        </IonCardHeader>
                                        <IonCardContent>
                                            <p>{actividad.descripcion}</p>

                                            <IonItem lines = "none">

                                                {/* si actividad es diferente de completa : muestra los botones cancelar y completar si es true muestra el icono check */}
                                                {!actividad.siCompleta ?
                                                    <IonButton
                                                    fill = "clear"
                                                    className = {classes.FullWidth}
                                                    color = "secondary"
                                                    onClick = { () => abrirModal(actividad)}
                                                    >Completar actividad</IonButton>
                                                    :
                                                    <IonIcon 
                                                        color = "success" 
                                                        className = {classes.FullWidth} 
                                                        icon = {checkmarkDone}>
                                                    
                                                    </IonIcon>
                                                }
                                                
                                            </IonItem>

                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                        </IonRow>
                        ))}

                        
                    </IonGrid>
                </IonContent>

            </IonPage>
        </React.Fragment>
    )
}

export default AllActivities;
