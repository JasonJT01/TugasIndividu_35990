import { IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonLabel, IonPage, IonRow, IonSearchbar, IonSegment, IonSegmentButton, IonText, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './SearchPage.css';

const SearchPage: React.FC = () => {

    const [segment, setSegment] = useState<'all' | 'jouleapp' | 'chefsteps'>('all');
    const [searchText, setSearchText] = useState('');

    const showsegment = () => {
        if (segment === 'all') {
            return (
                <IonContent>
                    <IonGrid id='All' class='gridSet'>
                        <IonText><p className='title'>Visual Doneness Guides</p></IonText>
                        <IonCard class='cards'>
                            <IonRow>
                                <IonCol size='5'>
                                    <IonImg src='../assets/icon/venison.jpg' class='displayImg'></IonImg>
                                </IonCol>
                                <IonCol size='7'>
                                    <IonCardContent class='content'>
                                        <IonText class='textTitle'>Venison</IonText><br />
                                        <IonText class='textDesc'>VISUAL DONENESS GUIDES</IonText>
                                    </IonCardContent>
                                </IonCol>
                            </IonRow>
                        </IonCard>
                        <IonCard class='cards'>
                            <IonRow>
                                <IonCol size='5'>
                                    <IonImg src='../assets/icon/roastbeef.jpg' class='displayImg'></IonImg>
                                </IonCol>
                                <IonCol size='7'>
                                    <IonCardContent>
                                        <IonText class='textTitle'>Roast Beef</IonText><br />
                                        <IonText class='textDesc'>VISUAL DONENESS GUIDES</IonText>
                                    </IonCardContent>
                                </IonCol>
                            </IonRow>
                        </IonCard>
                        <IonText><p className='title'>Just Time & Temp</p></IonText>
                        <IonCard class='cards'>
                            <IonRow>
                                <IonCol size='5' class='tempImg'>
                                    <div className='bgTemp'>
                                        <p className='range'>Range</p>
                                        <p className='derajat'>65°C</p>
                                        <p className='derajat'>85°C</p>
                                    </div>
                                </IonCol>
                                <IonCol size='7'>
                                    <IonCardContent>
                                        <IonText class='textTitle'>Chicken Leg</IonText><br />
                                        <IonText class='textDesc'>1 HOUR 15 MINUTES - 1 HOUR 45 MINUTES</IonText>
                                    </IonCardContent>
                                </IonCol>
                            </IonRow>
                        </IonCard>
                        <IonCard class='cards'>
                            <IonRow>
                                <IonCol size='5' class='tempImg'>
                                    <div className='bgTemp'>
                                        <p className='range'>Range</p>
                                        <p className='derajat'>65°C</p>
                                        <p className='derajat'>80°C</p>
                                    </div>
                                </IonCol>
                                <IonCol size='7'>
                                    <IonCardContent>
                                        <IonText class='textTitle'>Chicken Breast</IonText><br />
                                        <IonText class='textDesc'>45 MINUTES - 2 HOUR 15 MINUTES</IonText>
                                    </IonCardContent>
                                </IonCol>
                            </IonRow>
                        </IonCard>
                        <IonText><p className='title'>ChefSteps.com Results</p></IonText>
                        <IonCard class='cards'>
                            <IonRow>
                                <IonCol size='5' class='tempImg'>
                                    <div className='imgTemp1'></div>
                                </IonCol>
                                <IonCol size='7'>
                                    <IonCardContent>
                                        <IonText class='textTitle'>Salmon</IonText><br />
                                        <IonText class='textDesc'>CHEFSTEPS.COM</IonText>
                                    </IonCardContent>
                                </IonCol>
                            </IonRow>
                        </IonCard>
                        <IonCard class='cards'>
                            <IonRow>
                                <IonCol size='5' class='tempImg'>
                                    <div className='imgTemp2'></div>
                                </IonCol>
                                <IonCol size='7'>
                                    <IonCardContent>
                                        <IonText class='textTitle'>Burger</IonText><br />
                                        <IonText class='textDesc'>CHEFSTEPS.COM</IonText>
                                    </IonCardContent>
                                </IonCol>
                            </IonRow>
                        </IonCard>
                    </IonGrid>
                </IonContent >
            )
        }
        if (segment === 'jouleapp') {
            return (
                <IonContent>
                    <IonGrid id='All' class='gridSet'>
                        <IonText><p className='title'>Visual Doneness Guides</p></IonText>
                        <IonCard class='cards'>
                            <IonRow>
                                <IonCol size='5'>
                                    <IonImg src='../assets/icon/venison.jpg' class='displayImg'></IonImg>
                                </IonCol>
                                <IonCol size='7'>
                                    <IonCardContent class='content'>
                                        <IonText class='textTitle'>Venison</IonText><br />
                                        <IonText class='textDesc'>VISUAL DONENESS GUIDES</IonText>
                                    </IonCardContent>
                                </IonCol>
                            </IonRow>
                        </IonCard>
                        <IonCard class='cards'>
                            <IonRow>
                                <IonCol size='5'>
                                    <IonImg src='../assets/icon/roastbeef.jpg' class='displayImg'></IonImg>
                                </IonCol>
                                <IonCol size='7'>
                                    <IonCardContent>
                                        <IonText class='textTitle'>Roast Beef</IonText><br />
                                        <IonText class='textDesc'>VISUAL DONENESS GUIDES</IonText>
                                    </IonCardContent>
                                </IonCol>
                            </IonRow>
                        </IonCard>
                        <IonText><p className='title'>Just Time & Temp</p></IonText>
                        <IonCard class='cards'>
                            <IonRow>
                                <IonCol size='5' class='tempImg'>
                                    <div className='bgTemp'>
                                        <p className='range'>Range</p>
                                        <p className='derajat'>65°C</p>
                                        <p className='derajat'>85°C</p>
                                    </div>
                                </IonCol>
                                <IonCol size='7'>
                                    <IonCardContent>
                                        <IonText class='textTitle'>Chicken Leg</IonText><br />
                                        <IonText class='textDesc'>1 HOUR 15 MINUTES - 1 HOUR 45 MINUTES</IonText>
                                    </IonCardContent>
                                </IonCol>
                            </IonRow>
                        </IonCard>
                        <IonCard class='cards'>
                            <IonRow>
                                <IonCol size='5' class='tempImg'>
                                    <div className='bgTemp'>
                                        <p className='range'>Range</p>
                                        <p className='derajat'>65°C</p>
                                        <p className='derajat'>80°C</p>
                                    </div>
                                </IonCol>
                                <IonCol size='7'>
                                    <IonCardContent>
                                        <IonText class='textTitle'>Chicken Breast</IonText><br />
                                        <IonText class='textDesc'>45 MINUTES - 2 HOUR 15 MINUTES</IonText>
                                    </IonCardContent>
                                </IonCol>
                            </IonRow>
                        </IonCard>
                    </IonGrid>
                </IonContent >
            )
        }
        if (segment === 'chefsteps') {
            return (
                <IonContent>
                    <IonGrid id='All' class='gridSet'>
                        <IonCard class='cards'>
                            <IonRow>
                                <IonCol size='5' class='tempImg'>
                                    <div className='imgTemp1'></div>
                                </IonCol>
                                <IonCol size='7'>
                                    <IonCardContent>
                                        <IonText class='textTitle'>Salmon</IonText><br />
                                        <IonText class='textDesc'>CHEFSTEPS.COM</IonText>
                                    </IonCardContent>
                                </IonCol>
                            </IonRow>
                        </IonCard>
                        <IonCard class='cards'>
                            <IonRow>
                                <IonCol size='5' class='tempImg'>
                                    <div className='imgTemp2'></div>
                                </IonCol>
                                <IonCol size='7'>
                                    <IonCardContent class='content'>
                                        <IonText class='textTitle'>Burger</IonText><br />
                                        <IonText class='textDesc'>CHEFSTEPS.COM</IonText>
                                    </IonCardContent>
                                </IonCol>
                            </IonRow>
                        </IonCard>
                    </IonGrid>
                </IonContent >
            )
        }
    }

    const inputChangeHandler = (event: CustomEvent) => {
        setSegment(event.detail.value);
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonSearchbar class='searchbar' value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
                    <IonButtons slot='end'>
                        <Link to={'/home'} className='cancel'>Cancel</Link>
                    </IonButtons>
                </IonToolbar>
                <IonToolbar>
                    <IonSegment onIonChange={inputChangeHandler} value={segment} color="dark">
                        <IonSegmentButton value="all">
                            <IonLabel class='segLab'>All</IonLabel>
                        </IonSegmentButton>
                        <IonSegmentButton value="jouleapp">
                            <IonLabel class='segLab'>Joule App</IonLabel>
                        </IonSegmentButton>
                        <IonSegmentButton value="chefsteps">
                            <IonLabel class='segLab'>ChefSteps.com</IonLabel>
                        </IonSegmentButton>
                    </IonSegment>
                </IonToolbar>
            </IonHeader>
            {showsegment()}
        </IonPage>
    );
};

export default SearchPage;