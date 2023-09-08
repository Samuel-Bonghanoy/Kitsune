import { IonIcon } from "@ionic/react";
import { colorWandOutline } from "ionicons/icons";
import "./MainHeader.css";

function MainHeader() {
  return (
    <div className="main-nav">
      <p className="main-nav-text">Home</p>
      <IonIcon icon={colorWandOutline} />
    </div>
  );
}

export default MainHeader;
