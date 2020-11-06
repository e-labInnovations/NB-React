import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { newspaper, square, people } from 'ionicons/icons';
import Customers from './Customers';
import Products from './Products';
import HomeMain from './HomeMain';
import SideMenu from '../components/SideDrawer'

export default function Home({match}) {
  const areaId = match.params.areaId;
  return (
    <>
    <SideMenu />
    <IonTabs>
      <IonRouterOutlet id="main">
        <Route path="/home/:areaId/customers" component={Customers} exact={true} />
        <Route path="/home/:areaId/products" component={Products} exact={true} />
        <Route path="/home/:areaId/main" component={HomeMain} />
        <Route path="/home/:areaId" render={() => <Redirect to={`/home/${areaId}/customers`} />} exact={true} />
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="customers" href={`/home/${areaId}/customers`}>
          <IonIcon icon={people} />
          <IonLabel>Customers</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href={`/home/${areaId}/products`}>
          <IonIcon icon={newspaper} />
          <IonLabel>Products</IonLabel>
        </IonTabButton>
        <IonTabButton tab="main" href={`/home/${areaId}/main`}>
          <IonIcon icon={square} />
          <IonLabel>{areaId}</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
    </>
  );
}
