import { IonContent, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle } from '@ionic/react';
import { homeOutline, helpCircleOutline, settingsOutline, bulbOutline } from 'ionicons/icons';
import './Menu.css'

export const Menu = () => {
    return (
        <IonMenu side='start' contentId='main' type='push'>
            <IonContent>
                <IonList class='image'>
                    <IonMenuToggle auto-hide="false">
                        <IonItem button routerLink={"/home"} routerDirection="none">
                            <IonIcon icon={homeOutline} />&nbsp;&nbsp;&nbsp;
                            <IonLabel>Home</IonLabel>
                        </IonItem>
                    </IonMenuToggle>
                    <IonMenuToggle auto-hide="false">
                        <IonItem button routerLink={"/tips"} routerDirection="none">
                            <IonIcon icon={bulbOutline} />&nbsp;&nbsp;&nbsp;
                            <IonLabel>Tips & Tricks</IonLabel>
                        </IonItem>
                    </IonMenuToggle>
                    <IonMenuToggle auto-hide="false">
                        <IonItem button routerLink={"/help"} routerDirection="none">
                            <IonIcon icon={helpCircleOutline} />&nbsp;&nbsp;&nbsp;
                            <IonLabel>Help & Support</IonLabel>
                        </IonItem>
                    </IonMenuToggle>
                    <IonMenuToggle auto-hide="false">
                        <IonItem button routerLink={"/settings"} routerDirection="none">
                            <IonIcon icon={settingsOutline} />&nbsp;&nbsp;&nbsp;
                            <IonLabel>Settings</IonLabel>
                        </IonItem>
                    </IonMenuToggle>
                </IonList>
            </IonContent>
        </IonMenu>
    );
};