import React, { useContext, useRef, useState } from 'react'
import ActividadesContext, { ActividadType } from '../../data/actividades-context';

import {
    IonButton,
    IonCol,
    IonContent,
    IonDatetime,
    IonGrid,
    IonHeader, 
    IonInput, 
    IonItem, 
    IonLabel, 
    IonMenuButton, 
    IonPage, 
    IonRow, 
    IonSegment, 
    IonSegmentButton, 
    IonTitle, 
    IonToast, 
    IonToolbar 
} from '@ionic/react';

import {useHistory} from "react-router-dom"

const AddActivity: React.FC = () => {

    // ayuda a controlar la forma en que se mueve por la aplicacion
    const historial = useHistory();

    const tituloInput = useRef<HTMLIonInputElement>(null);
    const descripcionInput = useRef<HTMLIonInputElement>(null);
    const tipoActividadInput = useRef<HTMLIonSegmentElement>(null);
    const horaInicioInput = useRef<HTMLIonDatetimeElement>(null);

    const actividadesCtxt = useContext(ActividadesContext);

    const [toastMensaje, setToastMensaje] = useState<string>("");

    const agregarActividad = () => {
        const titulo = tituloInput.current?.value as string;
        const descripcion = descripcionInput.current?.value as string;
        const tipoActividad = tipoActividadInput.current?.value as ActividadType;
        // esto se hace por que el IonDate devuelve la fecha completa, no solo la hora
        const fechaInicio = new Date(horaInicioInput.current?.value as string);
        const horaInicio = fechaInicio.getHours() + ":" + fechaInicio.getMinutes();

        if(titulo && descripcion && tipoActividad && horaInicio){
            actividadesCtxt.agregarActividad(titulo, descripcion, horaInicio, tipoActividad);

            setToastMensaje("La actividad ha sido guardada");

            // va a reemplazar la navegacion actual que es agregar actividad por la lista de actividades
            historial.replace("/all-activities");
        }


    };

    return (

        <React.Fragment>
            {/* el isOpen es como un swicth, se muestra si es true, el = !! para convertir a booleano,  el onDidDismiss = hace que actualice el mensaje a vacio para volverlo a usar al guardar una nueva tarea, sino solo funcionaria la priera vez*/} 
            <IonToast isOpen = {!!toastMensaje} message = {toastMensaje} duration= {4000} color = "success" onDidDismiss= {() => setToastMensaje('')}></IonToast>
            
            <IonPage>
                
                <IonHeader>
                    <IonToolbar>
                        <IonButton slot = "start" color = "secondary">
                                <IonMenuButton></IonMenuButton>
                        </IonButton>
                        <IonTitle>Agregar actividad</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent>
                    <IonGrid>
                        <IonRow>
                            <IonCol className = "ion-text-center">
                                <IonSegment ref = {tipoActividadInput} color= "secondary">
                                    <IonSegmentButton value = "trabajo">
                                        <IonLabel>Trabajo</IonLabel>
                                    </IonSegmentButton>
                                    <IonSegmentButton value = "descanso">
                                        <IonLabel>Descanso</IonLabel>
                                    </IonSegmentButton>
                                    <IonSegmentButton value = "hobby">
                                        <IonLabel>Hobby</IonLabel>
                                    </IonSegmentButton>
                                </IonSegment>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position = "floating">Título actividad</IonLabel>
                                    <IonInput ref = {tituloInput} type = "text"></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position = "floating">Descripción actividad</IonLabel>
                                    <IonInput ref = {descripcionInput} type = "text"></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position = "floating">Hora de inicio actividad</IonLabel>
                                    <IonDatetime ref = {horaInicioInput} displayFormat = "h:mm A" pickerFormat = "h:mm A" value = {new Date().toISOString()}></IonDatetime>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol className = "ion-text-center ion-margin-top">
                                <IonButton 
                                    expand = "block" 
                                    fill = "outline" 
                                    color = "secondary"
                                    onClick = {agregarActividad}
                                >Agregar actividad</IonButton>

                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonContent>

            </IonPage>
        </React.Fragment>
    )
}

export default AddActivity;
