import { IonBadge, IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonLabel, IonMenuButton, IonPage, IonRow, IonSearchbar, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import DishListItem from '../../components/DishListItem';
import './Home.css';

const DATOS_PRUEBA = [
  {
    "id": "619a7343051eceaebe743123",
    "name": "Rice with eggs and sauce",
    "imgUrl": "https://d36fw6y2wq3bat.cloudfront.net/assets/images/cache/recipes/arroz-con-huevo-y-tomate/900/arroz-con-huevo-y-tomate.jpg",
    "steps": [
      "Cook rice with garlic",
      "Fry the egg with olive oil at the term you like",
      "Put the egg and the rice together",
      "Add tomato sauce"
    ],
    "ingredientsQuantity": [
      {
        "ingredient": {
          "id": "619a6f467f694f791ad05514",
          "name": "Tomato Sause",
          "measurementUnit": "ml"
        },
        "quantity": 0.5
      },
      {
        "ingredient": {
          "id": "6199a47b2a4fd062536542c2",
          "name": "Olive Oil",
          "measurementUnit": "ml"
        },
        "quantity": 0.25
      },
      {
        "ingredient": {
          "id": "619a6f727f694f791ad05516",
          "name": "Egg",
          "measurementUnit": "unit"
        },
        "quantity": 2
      },
      {
        "ingredient": {
          "id": "619a6f8e7f694f791ad05518",
          "name": "Rice",
          "measurementUnit": "kg"
        },
        "quantity": 1
      }
    ]
  },
  {
    "id": "619a7343051eceaebe7431323",
    "name": "Taquitos",
    "imgUrl": "https://d36fw6y2wq3bat.cloudfront.net/assets/images/cache/recipes/arroz-con-huevo-y-tomate/900/arroz-con-huevo-y-tomate.jpg",
    "steps": [
      "Cook rice with garlic",
      "Fry the egg with olive oil at the term you like",
      "Put the egg and the rice together",
      "Add tomato sauce"
    ],
    "ingredientsQuantity": [
      {
        "ingredient": {
          "id": "619a6f467f694f791ad05514",
          "name": "Tomato Sause",
          "measurementUnit": "ml"
        },
        "quantity": 0.5
      },
      {
        "ingredient": {
          "id": "6199a47b2a4fd062536542c2",
          "name": "Olive Oil",
          "measurementUnit": "ml"
        },
        "quantity": 0.25
      },
      {
        "ingredient": {
          "id": "619a6f727f694f791ad05516",
          "name": "Egg",
          "measurementUnit": "unit"
        },
        "quantity": 2
      },
      {
        "ingredient": {
          "id": "619a6f8e7f694f791ad05518",
          "name": "Rice",
          "measurementUnit": "kg"
        },
        "quantity": 1
      }
    ]
  }
]

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
                <IonToolbar> 
                <IonButton slot="start" color="none">
                    <IonMenuButton />
                </IonButton> 
                   <IonSearchbar placeholder="Elige tus platos"></IonSearchbar>
                </IonToolbar>
            </IonHeader>  
            <IonContent>

                <IonGrid>
                    { DATOS_PRUEBA.map(dish => (
                     <DishListItem key={dish.id} dish={dish} />
                    ))
                    }
                    <IonRow>
                        <IonCol>
                            <h1></h1>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
      </IonPage>
/*   <IonPage>
  <IonTabs>
    <IonTabBar slot="bottom">
      <IonTabButton tab="schedule">
        <IonIcon icon={calendar} />
        <IonLabel>Schedule</IonLabel>
        <IonBadge>6</IonBadge>
      </IonTabButton>

      <IonTabButton tab="speakers">
        <IonIcon icon={personCircle} />
        <IonLabel>Speakers</IonLabel>
      </IonTabButton>

      <IonTabButton tab="map">
        <IonIcon icon={map} />
        <IonLabel>Map</IonLabel>
      </IonTabButton>

      <IonTabButton tab="about">
        <IonIcon icon={informationCircle} />
        <IonLabel>About</IonLabel>
      </IonTabButton>
    </IonTabBar>
  </IonTabs>
    </IonPage>*/
  );
};

export default Home;
