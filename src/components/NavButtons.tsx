import { IonButton, IonMenuButton } from "@ionic/react";
import React, { useEffect } from "react";

export const NavButtons = () => {
    const [mQuery, setMQuery] = React.useState<any>({
        matches: window.innerWidth > 768 ? true : false,
    });

    useEffect(() => {
        window.matchMedia("(min-width: 768px)").addListener(setMQuery);
    });

    console.log(mQuery.matches);

    return (
        <div>
            {mQuery && !mQuery.matches ? (
                <IonMenuButton />
            ) : (
                <>
                    <IonButton routerLink="/home">Home</IonButton>
                    <IonButton routerLink="/tips">Tips & Tricks</IonButton>
                    <IonButton routerLink="/help">Help & Support</IonButton>
                    <IonButton routerLink="/settings">Settings</IonButton>
                </>
            )}
        </div>
    );
};