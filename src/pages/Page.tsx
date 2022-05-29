import { IonButtons, IonContent, IonHeader, IonLabel, IonMenuButton, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import { IonImg } from '@ionic/react';
import './Page.css';
import { useRef } from 'react';
import { calendar } from 'ionicons/icons';
import { format, parseISO, getDate, getMonth, getYear } from 'date-fns';


const Page: React.FC = () => {



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Demo de componentes</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonImg src='https://strapi.alanmontgomery.co.uk/uploads/Ionic_React_Onboarding_screens_ui_e018e954d9.png' />
        <IonImg src='https://ionicframework.com/img/react/music-player-thumb.png' />
        <IonText color ='primary'>
          <h3>
          En esta aplicacion podras ver varias implementaciones de componentes utiles para el desarrollo de aplicaciones IONIC-Reac
          </h3>        
        </IonText>
        
      </IonContent>
    </IonPage>
  );
};

export default Page;
