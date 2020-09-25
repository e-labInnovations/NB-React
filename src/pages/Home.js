import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage
} from "@ionic/react";

export default function Home() {
  return (
    <IonPage id="support-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Walleto</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent></IonContent>
    </IonPage>
  );
}
