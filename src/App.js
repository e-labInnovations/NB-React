import React from "react";
import { Route, Redirect } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import "@ionic/react/css/core.css";
import "./styles.css";
import "./variables.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import HomeMain from './pages/HomeMain'; 

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

export default function App() {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/home" component={HomeMain} exact={true} />
          <Route path="/home/:areaId" component={Home} />
          <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
          <Route path="/login" component={Login} />
          <Route path="/create-account" component={CreateAccount} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
}