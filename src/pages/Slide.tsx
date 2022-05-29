import { IonButtons, IonContent, IonHeader,IonMenuButton, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { IonSlide, IonSlides,IonImg, IonGrid,IonRow } from '@ionic/react';
import './Page.css';
import image1 from '../img/slide-1.png';
import image2 from '../img/slide-2.png';
import image3 from '../img/slide-3.png';

const Page: React.FC = () => {

  const slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Ejemplo Slide</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonSlides pager={true} options={slideOpts}>
          <IonSlide>
            <IonGrid>
              <IonRow>
                <IonImg src={image1} />
              </IonRow>
              <IonRow> 
                <IonText color='primary'>         
                  <h2>Welcome</h2>
                </IonText>
              </IonRow>
              <IonRow>
                <IonText>
                  <p>
                    The <b>ionic conference app</b> is a practical preview of the ionic framework in action, and a
                    demonstration of proper code use.
                  </p>
                </IonText>
              </IonRow>
            </IonGrid>
          
          </IonSlide>
          <IonSlide>
            <IonGrid>
              <IonRow>
                <IonImg src={image2} />
              </IonRow>
              <IonRow> 
                <IonText color='primary'>         
                  <h2>What is Ionic?</h2>
                </IonText>
              </IonRow>
              <IonRow>
                <IonText>
                <p>
                  <b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps
                  with web technologies like HTML, CSS, and JavaScript.
                </p>
                </IonText>
              </IonRow>
            </IonGrid>
          </IonSlide>
          <IonSlide>
            <IonGrid>
              <IonRow>
                <IonImg src={image3} />
              </IonRow>
              <IonRow> 
                <IonText color='primary'>         
                  <h2>What is Appflow?</h2>
                </IonText>
              </IonRow>
              <IonRow>
                <IonText>
                  <p>
                    <b>Appflow</b> is a powerful set of services and features built on top of Ionic Framework that brings a
                    totally new level of app development agility to mobile dev teams.
                  </p>
                </IonText>
              </IonRow>
            </IonGrid>
          </IonSlide>
        </IonSlides>
      </IonContent>

    </IonPage>
  );
};

export default Page;
