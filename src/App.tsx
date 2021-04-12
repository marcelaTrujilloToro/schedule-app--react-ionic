/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

import React from "react";

import AllActivities from "./pages/AllActivities/AllActivities";
import AddActivity from "./pages/AddActivity/AddActivity";

import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";

import { body, newspaper } from "ionicons/icons";

import {
  IonApp,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ActividadesContextProvider from "./data/actividadesContextProvider";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      {/* contentId :como redireccionarnos o que configuracion de routeo usar */}
      <IonMenu side="start" contentId="scheduleAppM1">
        <IonHeader>
          <IonToolbar color="secondary">
            <IonTitle>Calendario App</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <IonList>
            {/* ionMenuToggle hace que al dar click en el boton del menu, se cierre y queda en la pagina */}
            <IonMenuToggle>
              {/* se convierte en boton que nos redirige a la direccion puesta */}
              <IonItem
                routerLink="all-activities"
                routerDirection="none"
                lines="none"
              >
                {/* slot para posicionar */}
                <IonIcon color="secondary" slot="start" icon={body}></IonIcon>
                <IonLabel>Actividades</IonLabel>
              </IonItem>
            </IonMenuToggle>

            <IonMenuToggle>
              <IonItem
                routerLink="add-activity"
                routerDirection="none"
                lines="none"
              >
                {/* slot para posicionar */}
                <IonIcon
                  color="secondary"
                  slot="start"
                  icon={newspaper}
                ></IonIcon>
                <IonLabel>Agregar actividad</IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>

      <ActividadesContextProvider>
        {/* id: es el mismo del IonMenu contentId, para linkear el menu */}
        <IonRouterOutlet id="scheduleAppM1">
          {/* exact: para que la ruta se cargue justo cuando este en la URL */}
          <Route path="/all-activities" component={AllActivities} exact></Route>
          <Route path="/add-activity" component={AddActivity} exact></Route>

          {/* cuando ninguna de las dos url haga match nos redireccione a la pagina principal */}
          <Redirect to="/all-activities"></Redirect>
        </IonRouterOutlet>
      </ActividadesContextProvider>
    </IonReactRouter>
  </IonApp>
);

export default App;
