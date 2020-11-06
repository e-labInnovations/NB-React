import React from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton
} from "@ionic/react";

const Customers = ({match}) => {
  const areaId = match.params.areaId;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Customers</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen>
        <IonButton
          expand="full"
        >
          NEXT PAGE
        </IonButton>
        {areaId}
      </IonContent>
    </IonPage>
  );
};

export default Customers;