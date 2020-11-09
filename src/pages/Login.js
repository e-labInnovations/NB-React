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
  IonButton,
  IonAlert
  } from '@ionic/react';
  import firebase from '../Firebase';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  async function handleLogin() {
		try {
			await firebase.login(email, password)
			props.history.replace('/')
		} catch(error) {
			setErrorMessage(error.message);
      setShowErrorAlert(true);
		}
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

        <IonAlert
          isOpen={showErrorAlert}
          onDidDismiss={() => setShowErrorAlert(false)}
          header={'Error'}
          message={errorMessage}
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;