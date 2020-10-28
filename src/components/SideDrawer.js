import React from 'react';
import { IonMenu, 
  IonContent, 
  IonList, 
  IonItem, 
  IonLabel,
  IonIcon,
  IonRouterOutlet,
  IonButton
  } from '@ionic/react';
import { newspaper, square, people } from 'ionicons/icons';
import './SideDrawer.css'

const MenuExample = () => (
  <>
    <IonMenu side="start" contentId="main">
      <IonContent>
        <div class="ion-text-center ion-padding">
          {false ? (
            <>
              <img src="http://placehold.it/300x300" class="custom-avatar" alt="name"/>
              <h2>Name</h2>
              <p>Number / Mail</p>
            </>
          ) : (
            <IonButton color="primary" href="/login" router-direction="forward">Login</IonButton>
          )}
        </div>
        <IonList>
          <IonItem>
            <IonIcon slot="start" icon={people} />
            <IonLabel>Customers</IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon slot="start" icon={newspaper} />
            <IonLabel>Products</IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon slot="start" icon={square} />
            <IonLabel>Customers</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
    <IonRouterOutlet></IonRouterOutlet>
  </>
);

export default MenuExample;