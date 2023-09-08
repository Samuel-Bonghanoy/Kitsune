// import { useState } from "react";
import { IonIcon } from "@ionic/react";

function Navbar() {
  return (
    <nav className="navbar">
      <img
        className="logo"
        src="../images/kitsune-logo.png"
        width="500"
        height="500"
      />
      <div className="flex nav-icon">
        <IonIcon icon="home-outline" />
        <p className="nav-text">Home</p>
      </div>
      <div className="flex nav-icon">
        <IonIcon icon="mail-outline" />
        <p className="nav-text">Messages</p>
      </div>
      <div className="flex nav-icon">
        <IonIcon icon="notifications-outline" />
        <p className="nav-text">Notifications</p>
      </div>
      <div className="flex nav-icon">
        <IonIcon icon="person-circle-outline" />
        <p className="nav-text">Profile</p>
      </div>
      <div className="flex nav-icon">
        <IonIcon icon="settings-outline" />
        <span className="nav-text">Settings</span>
      </div>
      <div className="nav-bottom">
        <button className="write">Write</button>
        <div className="profile">
          <img
            className="nav-user user"
            src="../images/user1.jpg"
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
