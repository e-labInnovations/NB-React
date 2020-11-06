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

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    alert("Login")
  }
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen>
        <IonCard>
          <IonCardContent>
            <IonItem>
              <IonLabel position="floating">Email</IonLabel>
              <IonInput value={email} type="email" onIonChange={e => setEmail(e.detail.value)} clearInput autocomplete="email" enterkeyhint="next" inputmode="email"></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Password</IonLabel>
              <IonInput value={password} type="password" onIonChange={e => setPassword(e.detail.value)} clearInput enterkeyhint="done"></IonInput>
            </IonItem>

            <IonButton expand="full" shape="round" onClick={handleLogin}>
              Login
            </IonButton>

            <IonButton color="danger" expand="full" fill="outline" shape="round" href="/create-account">
              Create Account
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Login;