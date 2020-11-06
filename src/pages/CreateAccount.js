import React, { useState } from 'react';
import { IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonButtons, 
  IonBackButton, 
  IonCard, 
  IonCardContent, 
  IonItem, 
  IonLabel,
  IonInput,
  IonButton
  } from '@ionic/react';

const CreateAccount = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateAccount = () => {
    alert("Login")
  }
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Create Account</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen>
        <IonCard>
          <IonCardContent>
            <IonItem>
              <IonLabel position="floating">Name</IonLabel>
              <IonInput value={name} type="text" onIonChange={e => setName(e.detail.value)} clearInput autocomplete="name" enterkeyhint="next" inputmode="text"></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Email</IonLabel>
              <IonInput value={email} type="email" onIonChange={e => setEmail(e.detail.value)} clearInput autocomplete="email" enterkeyhint="next" inputmode="email"></IonInput>
            </IonItem>
            
            <IonItem>
              <IonLabel position="floating">Password</IonLabel>
              <IonInput value={password} type="password" onIonChange={e => setPassword(e.detail.value)} clearInput enterkeyhint="done"></IonInput>
            </IonItem>
            
            <IonButton expand="full" shape="round" onClick={handleCreateAccount}>
              Create Account
            </IonButton>
            
            <IonButton color="danger" expand="full" fill="outline" shape="round" href="/login">
              Login
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default CreateAccount;