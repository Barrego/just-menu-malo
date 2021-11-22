import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonBadge, IonButton, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonMenuToggle, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Inicio/Home';

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
import Pagina from './pages/Pagina';
import { calendar, informationCircle, map, personCircle, restaurantOutline } from "ionicons/icons";

const App: React.FC = () => (
  <IonApp>
  <IonMenu side="start" contentId="scheduleAppM1">
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Start Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
        <IonMenuToggle> 
          <IonItem routerLink="/Home" routerDirection="none" lines="none">
          <IonIcon color="medium" slot="start" icon={calendar} />
          <IonLabel>Productos</IonLabel>
          </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
          <IonItem routerLink="/Pagina" routerDirection="none" lines="none">
          <IonIcon color="medium" slot="start" icon={informationCircle} />
          <IonLabel>Platos</IonLabel>
          </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
   
    <IonReactRouter>
      
      <IonTabs>
      <IonRouterOutlet id="scheduleAppM1">
      <Route path="/home" component={Home} exact/>
          <Route path="/pagina" component={Pagina} exact/>
          <Redirect to="/home"/>
      </IonRouterOutlet>  
    <IonTabBar slot="bottom">
      <IonTabButton tab="Home" href="/Home">
        <IonIcon icon={restaurantOutline} />
        <IonLabel>Platos</IonLabel>
      </IonTabButton>

      <IonTabButton tab="Pagina" href="/Pagina">
        <IonIcon icon={personCircle} />
        <IonLabel>Speakers</IonLabel>
      </IonTabButton>

      <IonTabButton tab="speakers">
        <IonIcon icon={personCircle} />
        <IonLabel>Speakers</IonLabel>
      </IonTabButton>

      <IonTabButton tab="map">
        <IonIcon icon={map} />
        <IonLabel>Map</IonLabel>
      </IonTabButton>

      <IonTabButton tab="about">
        <IonIcon icon={informationCircle} />
        <IonLabel>About</IonLabel>
      </IonTabButton>
    </IonTabBar>
  </IonTabs>
    </IonReactRouter>
  </IonApp>       
);

export default App;
