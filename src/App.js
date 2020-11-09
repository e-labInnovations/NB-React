import React, { useState, useEffect } from "react";
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
  import firebase from './Firebase';

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
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);

  useEffect(() => {
    firebase.isInitialized().then((val) => {
      setFirebaseInitialized(val);
    });
  });

  return firebaseInitialized !== false ? (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/" component={HomeMain} exact={true} />
          <Route path="/home" render={() => <Redirect to="/" />} exact={true} />
          <Route path="/home/:areaId" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/create-account" component={CreateAccount} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  ) : (
    <div id='loader'>
      Loading...
    </div>
  );
}