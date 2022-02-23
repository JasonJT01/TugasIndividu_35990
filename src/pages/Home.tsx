import { IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonImg, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { copyOutline, qrCodeOutline, searchOutline } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NavButtons } from '../components/NavButtons';
import Splash from '../components/splash/Splash';
import './Home.css';

const Home: React.FC = () => {
  const [mostrarSplash, setMostrarSplash] = useState(false);

  useEffect(() => {
    setMostrarSplash(true);
    setTimeout(() => {
      setMostrarSplash(false)
    }, 5000);
  }, [])

  return (
    <IonPage>
      {
        mostrarSplash ? <Splash /> : null
      }
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <NavButtons />
          </IonButtons>
          <IonButtons slot='end'>
            <Link to={'/searchpage'} className='search'>Search <IonIcon icon={searchOutline} className='searchIcon'></IonIcon></Link>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className='combine'>
          <IonText class='joule'>Get your Joule. Be <br />Happy.</IonText>
          <IonText class='explore'>Explore</IonText>
          <IonImg src='../assets/icon/home.jpg'></IonImg>
        </div>
        <IonText className='titm'>Search By Type</IonText>
        <IonGrid>
          <IonRow>
            <IonCol size='4'>
              <IonCard class='cardSize'>
                <IonCardContent class='contentSet'>
                  <IonImg src='../assets/icon/pork.svg' className='images'></IonImg>
                  <IonText><p className='type'>Pork</p></IonText>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size='4'>
              <IonCard class='cardSize'>
                <IonCardContent class='contentSet'>
                  <IonImg src='../assets/icon/game.svg' className='images'></IonImg>
                  <IonText><p className='type'>Game</p></IonText>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size='4'>
              <IonCard class='cardSize'>
                <IonCardContent class='contentSet'>
                  <IonImg src='../assets/icon/beef.svg' className='images'></IonImg>
                  <IonText><p className='type'>Beef</p></IonText>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size='4'>
              <IonCard class='cardSize'>
                <IonCardContent class='contentSet'>
                  <IonImg src='../assets/icon/poultry.svg' className='images'></IonImg>
                  <IonText><p className='type'>Poultry</p></IonText>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size='4'>
              <IonCard class='cardSize'>
                <IonCardContent class='contentSet'>
                  <IonImg src='../assets/icon/lamb.svg' className='images'></IonImg>
                  <IonText><p className='type'>Lamb</p></IonText>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size='4'>
              <IonCard class='cardSize'>
                <IonCardContent class='contentSet'>
                  <IonImg src='../assets/icon/seafood.svg' className='images'></IonImg>
                  <IonText><p className='type'>Seafood</p></IonText>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size='4'>
              <IonCard class='cardSize'>
                <IonCardContent class='contentSet'>
                  <IonImg src='../assets/icon/vegetables.svg' className='images'></IonImg>
                  <IonText><p className='type'>Vegetables</p></IonText>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size='4'>
              <IonCard class='cardSize'>
                <IonCardContent class='contentSet'>
                  <IonImg src='../assets/icon/desserts.svg' className='images'></IonImg>
                  <IonText><p className='type'>Desserts</p></IonText>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size='4'>
              <IonCard class='cardSize'>
                <IonCardContent class='contentSet'>
                  <IonImg src='../assets/icon/other.svg' className='images'></IonImg>
                  <IonText><p className='type'>Other</p></IonText>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonFab vertical="bottom" horizontal="center" slot="fixed" >
          <IonButton color="light" shape="round" type="button" size="small" class="btnBottom">
            <IonText className='searchButton'>Search for Joule</IonText>
          </IonButton>
        </IonFab>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton color="light">
            <IonIcon icon={qrCodeOutline} />
          </IonFabButton>
        </IonFab>
        <IonText className='titm'>Cooking Guides</IonText>
        <IonGrid class='gridSet'>
          <IonCard className='cards'>
            <IonRow>
              <IonCol size='6'>
                <IonImg src='../assets/icon/venison.jpg' className='guideImg'></IonImg>
              </IonCol>
              <IonCol size='6'>
                <IonCardContent className='textGuide'>
                  <IonText className='guides'>Welcome Guides: Hello UK Cooks</IonText>
                  <IonImg src='../assets/icon/uk.svg' className='flag'></IonImg>
                  <IonIcon icon={copyOutline} className='icons'></IonIcon>
                </IonCardContent>
              </IonCol>
            </IonRow>
          </IonCard>
          <IonCard className='cards'>
            <IonRow>
              <IonCol size='6'>
                <IonImg src='../assets/icon/roastbeef.jpg' className='guideImg'></IonImg>
              </IonCol>
              <IonCol size='6'>
                <IonCardContent className='textGuide'>
                  <IonText className='guides'>Sunday Roast Centerpieces</IonText>
                  <IonImg src='../assets/icon/uk.svg' className='flag'></IonImg>
                  <IonIcon icon={copyOutline} className='icons'></IonIcon>
                </IonCardContent>
              </IonCol>
            </IonRow>
          </IonCard>
          <IonCard className='cards'>
            <IonRow>
              <IonCol size='6'>
                <IonImg src='../assets/icon/beluga.jpg' className='guideImg'></IonImg>
              </IonCol>
              <IonCol size='6'>
                <IonCardContent className='textGuide'>
                  <IonText className='guides'>Batch Cook Like a Pro</IonText>
                  <IonIcon icon={copyOutline} className='icons'></IonIcon>
                </IonCardContent>
              </IonCol>
            </IonRow>
          </IonCard>
          <IonCard className='cards'>
            <IonRow>
              <IonCol size='6'>
                <IonImg src='../assets/icon/salmon.jpg' className='guideImg'></IonImg>
              </IonCol>
              <IonCol size='6'>
                <IonCardContent className='textGuide'>
                  <IonText className='guides'>Quick & Easy</IonText>
                  <IonIcon icon={copyOutline} className='icons'></IonIcon>
                </IonCardContent>
              </IonCol>
            </IonRow>
          </IonCard>
          <IonCard className='cards'>
            <IonRow>
              <IonCol size='6'>
                <IonImg src='../assets/icon/barbecue.jpeg' className='guideImg'></IonImg>
              </IonCol>
              <IonCol size='6'>
                <IonCardContent className='textGuide'>
                  <IonText className='guides'>Guide Boosts</IonText>
                  <IonIcon icon={copyOutline} className='icons'></IonIcon>
                </IonCardContent>
              </IonCol>
            </IonRow>
          </IonCard>
          <IonCard className='cards'>
            <IonRow>
              <IonCol size='6'>
                <IonImg src='../assets/icon/venison.jpg' className='guideImg'></IonImg>
              </IonCol>
              <IonCol size='6'>
                <IonCardContent className='textGuide'>
                  <IonText className='guides'>Cook in a Jar—No Bag Required!</IonText>
                  <IonIcon icon={copyOutline} className='icons'></IonIcon>
                </IonCardContent>
              </IonCol>
            </IonRow>
          </IonCard>
          <IonCard className='cards'>
            <IonRow>
              <IonCol size='6'>
                <IonImg src='../assets/icon/roastbeef.jpg' className='guideImg'></IonImg>
              </IonCol>
              <IonCol size='6'>
                <IonCardContent className='textGuide'>
                  <IonText className='guides'>All the Guides</IonText>
                  <IonImg src='../assets/icon/uk.svg' className='flag'></IonImg>
                  <IonIcon icon={copyOutline} className='icons'></IonIcon>
                </IonCardContent>
              </IonCol>
            </IonRow>
          </IonCard>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
