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
} from "@ionic/react";
import SideMenu from '../components/SideDrawer';
import LoginButton from '../components/LoginButton';
import firebase from '../Firebase';

const HomeMain = (props) => {
  const areas = [
    { areaId : "rsdtt54",
      name: "Appla",
      distributer: "Mohammed Ashad"
    }
  ]

  if (!firebase.getCurrentUsername()) {
    // not logged in
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
        <LoginButton />
      </IonContent>
    </IonPage>
    )
  }

  return (
    <>
    <SideMenu {...props} />
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
          <IonCard button routerLink={"/home/" + area.areaId} key={area.areaId}>
            <IonCardHeader>
              <IonCardTitle>Appla</IonCardTitle>
              <IonCardSubtitle>Mohammed Ashad</IonCardSubtitle>
            </IonCardHeader>
          </IonCard>
        )
      })}
        
      </IonContent>
    </IonPage>
    </>
  );
};

export default HomeMain;