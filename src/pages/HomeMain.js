import React, { useState} from "react";
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
  IonIcon,
  IonButton,
  IonPopover,
  IonList,
  IonItem
} from "@ionic/react";
import { add } from 'ionicons/icons';
import SideMenu from '../components/SideDrawer';
import LoginButton from '../components/LoginButton';
import firebase from '../Firebase';

const HomeMain = (props) => {
  const [showPopover, setShowPopover] = useState({
  open: false,
  event: undefined,
});

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
          <IonTitle>Newspaper Boy</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen>
        <LoginButton />
      </IonContent>
    </IonPage>
    )
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>

          <IonButtons slot="end">
            <IonButton  onClick={(e) => setShowPopover({open: true, event: e.nativeEvent})}>
              <IonIcon icon={add} slot="icon-only" />
            </IonButton>
          </IonButtons>
          <IonTitle>Newspaper Boy</IonTitle>
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

      <IonPopover
        isOpen={showPopover.open}
        event={showPopover.event}
        backdropDismiss={true}
        onDidDismiss={e => setShowPopover({open: false, event: undefined})}
      >
        <IonList>
          <IonItem button routerLink="/area/join" router-direction="forward"> Join</IonItem>
          <IonItem button lines="none" routerLink="/area/create" router-direction="forward"> Create New Area</IonItem>    
        </IonList>
      </IonPopover>
      
      </IonContent>
    </IonPage>
  );
};

export default HomeMain;