import { IonButtons, IonContent, IonHeader, IonLabel, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import { IonDatetime, IonButton,IonGrid, IonRow,IonModal } from '@ionic/react';
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
          <IonTitle>Ejemplo Date Picker</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonContent class="ion-padding-start ion-padding-end" fullscreen>
          <IonGrid>
            <IonRow>
              <IonTitle color='primary'>Initial Value</IonTitle>
              <IonDatetime value="2012-12-15T13:47:20.789"></IonDatetime>
            </IonRow>
            <IonRow  >
               <IonTitle color='primary'>Readonly </IonTitle>
              <IonDatetime readonly></IonDatetime>
            </IonRow>
            <IonRow  >
               <IonTitle color='primary'>Disabled </IonTitle>
              <IonDatetime disabled></IonDatetime>
            </IonRow>
            <IonRow  >
               <IonTitle color='primary'>Custom Locale </IonTitle>
              <IonDatetime locale="en-GB"></IonDatetime>
            </IonRow>
            <IonRow  >
               <IonTitle color='primary'>Max and min </IonTitle>
              <IonDatetime min="1994-03-14" max="2012-12-09" value="2008-09-02"></IonDatetime>
            </IonRow>
            <IonRow  >
               <IonTitle color='primary'>15 minute increments </IonTitle>
              <IonDatetime minute-values="0,15,30,45"></IonDatetime>
            </IonRow>
            <IonRow  >
               <IonTitle color='primary'>Specific days/months/years </IonTitle>
              <IonDatetime
                month-values="6,7,8"
                year-values="2014,2015"
                day-values="01,02,03,04,05,06,08,09,10,11,12,13,14"
              ></IonDatetime>
            </IonRow>
            <IonRow  >
               <IonTitle color='primary'>Time Only </IonTitle>
              <IonDatetime presentation="time"></IonDatetime>
            </IonRow>
            <IonRow  >
               <IonTitle color='primary'>Time First, Date Second </IonTitle>
              <IonDatetime presentation="time-date"></IonDatetime>
            </IonRow>
            <IonRow  >
               <IonTitle color='primary'>Custom Hour Cycle </IonTitle>
              <IonDatetime hour-cycle="h23"></IonDatetime>
            </IonRow>
            <IonRow  >
               <IonTitle color='primary'>Custom First Day Of Week </IonTitle>
              <IonDatetime first-day-of-week="1"></IonDatetime>
            </IonRow>
            <IonRow  >
               <IonTitle color='primary'>Custom Title </IonTitle>
              <IonDatetime>
                 <IonTitle color='primary'>My Custom Title </IonTitle>
              </IonDatetime>
            </IonRow>
            
          </IonGrid>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Page;
