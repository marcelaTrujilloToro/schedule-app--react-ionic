import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import { Redirect, Route } from 'react-router-dom';
import AllActivities from './pages/AllActivities/AllActivities';
import { AddActivity } from './pages/AddActivity/AddActivity';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        
        {/* exact: para que la ruta se cargue justo cuando este en la URL */}
        <Route path = "/all-activities" component = {AllActivities} exact></Route> 
        <Route path = "/add-activity" component = {AddActivity} exact></Route>
        
        {/* cuando ninguna de las dos url haga match nos redireccione a la pagina principal */}
        <Redirect to = "/all-activities"></Redirect>
      
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
