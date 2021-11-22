import { IonCol, IonRow } from "@ionic/react";
import "./DishListItem.scss";

export interface IDishListItemProps {
    dish: any;
}

const DishListItem: React.FC<IDishListItemProps> = ({dish}) => {
    return (
        <IonRow className="dish-list-item">
            <IonCol>
                <p className="dish-title">{dish.name}</p>
            </IonCol>
            <IonCol>
            <img src={dish.imgUrl} />
            </IonCol>
        </IonRow>
    );
}

export default DishListItem;