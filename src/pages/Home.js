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
import Tab3 from './Tab3';
import MenuExample from '../components/SideDrawer'

export default function Home() {
  return (
    <>
    <MenuExample />
    <IonTabs>
      <IonRouterOutlet id="main">
        <Route path="/home/customers" component={Customers} exact={true} />
        <Route path="/home/products" component={Products} exact={true} />
        <Route path="/home/tab3" component={Tab3} />
        <Route path="/home" render={() => <Redirect to="/home/customers" />} exact={true} />
        <Route path="/" render={() => <Redirect to="/home/customers" />} exact={true} />
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="customers" href="/home/customers">
          <IonIcon icon={people} />
          <IonLabel>Customers</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/home/products">
          <IonIcon icon={newspaper} />
          <IonLabel>Products</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/home/tab3">
          <IonIcon icon={square} />
          <IonLabel>Tab 3</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
    </>
  );
}
