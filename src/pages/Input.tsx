import { IonButtons, IonContent, IonHeader, IonLabel, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonList, IonListHeader,IonInput, IonTextarea,IonItem } from '@ionic/react';
import './Page.css';


const Page: React.FC = () => {



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Ejemplo Input</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList lines="full" class="ion-no-margin">
          <IonListHeader lines="full">
            <IonLabel> Label Positions </IonLabel>
          </IonListHeader>
          <IonItem>
            <IonLabel>Default Label</IonLabel>
            <IonInput placeholder="placeholder"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="fixed">Fixed Label</IonLabel>
            <IonInput placeholder="placeholder"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Stacked Label</IonLabel>
            <IonInput placeholder="placeholder"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Floating Label</IonLabel>
            <IonInput></IonInput>
          </IonItem>
        </IonList>

        <IonList lines="full" class="ion-no-margin">
          <IonListHeader lines="full">
            <IonLabel> Input Types </IonLabel>
          </IonListHeader>

          <IonItem>
            <IonLabel>Text Input</IonLabel>
            <IonInput placeholder="placeholder" type="text"></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel>Number Input</IonLabel>
            <IonInput placeholder="placeholder" type="number"></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel>Password Input</IonLabel>
            <IonInput placeholder="placeholder" type="password"></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Multiple Inputs</IonLabel>
            <IonInput placeholder="Address Line 1"></IonInput>
            <IonInput placeholder="Address Line 2"></IonInput>
            <IonInput placeholder="City"></IonInput>
            <IonInput placeholder="State"></IonInput>
            <IonInput placeholder="Zip Code"></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Textarea</IonLabel>
            <IonTextarea placeholder="placeholder"></IonTextarea>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Page;
