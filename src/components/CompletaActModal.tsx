// elemento sobrepuesto a una pagina

import { IonButton, IonCol, IonContent, IonGrid, IonImg, IonRow, IonText } from '@ionic/react';
import React, { useContext } from 'react'
import ActividadesContext, { Actividad } from '../data/actividades-context';

interface CompletaActModalProps{
    actividad : Actividad;
    dismissModal : () => void;

}

const CompletaActModal: React.FC <CompletaActModalProps>= (props) => {


    const actividadesCtxt = useContext(ActividadesContext);

    const confirmarCompletar = (actividadId : string) => {
        actividadesCtxt.completarActividad(actividadId);
        props.dismissModal();
    }

    return (
       <IonContent>
           <IonGrid className ="ion-no-padding">
                <IonRow>
                    <IonCol className = "ion-no-padding">
                        <IonImg src= {props.actividad.imagenUrl} ></IonImg>
                    </IonCol>                    
                </IonRow>

                <IonRow>
                    <IonCol className = "ion-text-center">
                        <IonText>
                            <h2>{props.actividad.titulo}</h2>
                        </IonText>
                    </IonCol>                    
                </IonRow>

                <IonRow>
                    <IonCol className = "ion-text-center ion-no-padding">
                        <IonText color = "medium">
                            <p>¿Estas seguro que deseas marcar esta actividad como completa?</p>
                        </IonText>
                    </IonCol>                    
                </IonRow>

                <IonRow>
                    <IonCol className = "ion-text-center">
                        <IonButton 
                            color ="danger" 
                            fill = "clear"
                            onClick ={props.dismissModal}
                    >Cancelar</IonButton>
                    </IonCol>
                    <IonCol className = "ion-text-center">
                        <IonButton 
                            color ="primary" 
                            fill = "clear"
                            onClick = {() => confirmarCompletar(props.actividad.id)}
                            
                        >Completar</IonButton>
                    </IonCol>
                    
                </IonRow>
           </IonGrid>
       </IonContent>
    )
};
export default CompletaActModal;