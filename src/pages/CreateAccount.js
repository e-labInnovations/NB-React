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

const CreateAccount = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('+91');
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  async function handleCreateAccount() {
    if (phone === '' || name === '') {
      setErrorMessage('Complete all fields ');
      setShowErrorAlert(true)
    } else {
      if(!phone.includes('+91')){
        setPhone('+91' + phone)
      }
      try {
        await firebase.register(name, email, password, phone);
        await firebase.updateProfile(name, phone);
        props.history.replace('/');
      } catch (error) {
        setErrorMessage(error.message);
        setShowErrorAlert(true)
      }
    }
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
              <IonInput value={password} type="password" onIonChange={e => setPassword(e.detail.value)} clearInput enterkeyhint="next"></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Phone</IonLabel>
              <IonInput value={phone} type="tel" onIonChange={e => setPhone(e.detail.value)} clearInput autocomplete="tel" enterkeyhint="done" inputmode="tel"></IonInput>
            </IonItem>
            
            <IonButton expand="full" shape="round" onClick={handleCreateAccount}>
              Create Account
            </IonButton>
            
            <IonButton color="danger" expand="full" fill="outline" shape="round" href="/login">
              Login
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

export default CreateAccount;