import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton, 
  IonCard, 
  IonCardHeader, 
  IonCardSubtitle, 
  IonCardTitle, 
  IonCardContent, 
  IonItem, IonIcon, IonLabel, IonButton
} from "@ionic/react";
import { chevronDownOutline } from 'ionicons/icons';
import SideMenu from '../components/SideDrawer'

const HomeMain = () => {
  const areas = [
    { areaId : "rsdtt54",
      name: "Appla",
      distributer: "Mohammed Ashad"
    }
  ]
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Area</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen>
      {areas.map(area => {
        return (
          <IonCard button href={"/home/" + area.areaId} key={area.areaId}>
            <IonCardHeader>
              <IonCardTitle>Appla</IonCardTitle>
              <IonCardSubtitle>Mohammed Ashad</IonCardSubtitle>
            </IonCardHeader>
          </IonCard>
        )
      })}
        
      </IonContent>
    </IonPage>
  );
};

export default HomeMain;