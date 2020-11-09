import React, { useState } from 'react';
import { IonMenu,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonRouterOutlet,
  IonButton,
  IonAlert
  } from '@ionic/react';
import { newspaper, square, people, logOut } from 'ionicons/icons';
import './SideDrawer.css'
import firebase from '../Firebase';

const SideMenu = (props) => {
  const [showLogOutAlert, setShowLogOutAlert] = useState(false);
  const user = firebase.getCurrentUser();

  async function handleLogOut() {
    await firebase.logout();
    props.history.replace('/');
  }

  return (
    <>
      <IonMenu side="start" contentId="main">
        <IonContent>
          <div className="ion-text-center ion-padding">
            {firebase.getCurrentUsername() ? (
              <>
                <img src="http://placehold.it/300x300" className="custom-avatar" alt="name"/>
                <h2>{firebase.getCurrentUsername()}</h2>
                <p>{user.email}</p>
              </>
            ) : (
              <IonButton color="primary" routerLink="/login" router-direction="forward">Login</IonButton>
            )}
          </div>
          <IonList>
            <IonItem>
              <IonIcon slot="start" icon={people} />
              <IonLabel>Customers</IonLabel>
            </IonItem>
            <IonItem>
              <IonIcon slot="start" icon={newspaper} />
              <IonLabel>Products</IonLabel>
            </IonItem>
            <IonItem>
              <IonIcon slot="start" icon={square} />
              <IonLabel>Customers</IonLabel>
            </IonItem>
            
            <IonItem button onClick={()=> setShowLogOutAlert(true)} >
              <IonIcon slot="start" icon={logOut} />
              <IonLabel>Log Out</IonLabel>
            </IonItem>
          </IonList>

        <IonAlert
          isOpen={showLogOutAlert}
          onDidDismiss={() => setShowLogOutAlert(false)}
          header={'Log Out'}
          message={'Do you really want to Log Out'}
          buttons={[
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary'
            },
            {
              text: 'Log Out',
              handler: () => {
                handleLogOut();
              }
            }
          ]}
        />
        </IonContent>
      </IonMenu>
      <IonRouterOutlet></IonRouterOutlet>
    </>
  );
  };

export default SideMenu;