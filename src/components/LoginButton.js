import React from 'react';
import {
  IonButton
  } from '@ionic/react';

const LoginButton = () => (
  <IonButton color="primary" routerLink="/login" router-direction="forward">Login</IonButton>    
);

export default LoginButton;