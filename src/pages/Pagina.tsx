import React from "react";
import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react"; 

const Pagina: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar> 
                <IonButton slot="start" color="none">
                    <IonMenuButton />
                </IonButton>
                    <IonTitle>Just menu</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <h1>Just menu</h1>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>

            </IonPage>

    );

};
export default Pagina;