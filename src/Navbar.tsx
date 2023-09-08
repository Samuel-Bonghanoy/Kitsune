// import { useState } from "react";
import { IonIcon } from "@ionic/react";
import {
  homeOutline,
  mailOutline,
  notificationsOutline,
  personCircleOutline,
  settingsOutline,
} from "ionicons/icons";

function Navbar() {
  return (
    <nav className="navbar">
      <img
        className="logo"
        src="./assets/images/kitsune-logo.png"
        width="500"
        height="500"
      />
      <div className="flex nav-icon">
        <IonIcon icon={homeOutline} />
        <p className="nav-text">Home</p>
      </div>
      <div className="flex nav-icon">
        <IonIcon icon={mailOutline} />
        <p className="nav-text">Messages</p>
      </div>
      <div className="flex nav-icon">
        <IonIcon icon={notificationsOutline} />
        <p className="nav-text">Notifications</p>
      </div>
      <div className="flex nav-icon">
        <IonIcon icon={personCircleOutline} />
        <p className="nav-text">Profile</p>
      </div>
      <div className="flex nav-icon">
        <IonIcon icon={settingsOutline} />
        <span className="nav-text">Settings</span>
      </div>
      <div className="nav-bottom">
        <button className="write">Write</button>
        <div className="profile">
          <img
            className="nav-user user"
            src="./assets/images/user1.jpg"
            width="75"
            height="75"
          />
          <div className="nav-names">
            <p className="username">sethonne</p>
            <p className="id">#69420</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
