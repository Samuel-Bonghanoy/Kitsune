import { IonIcon } from "@ionic/react";
import { searchOutline } from "ionicons/icons";
import "./Search.css";

function Search() {
  return (
    <div className="search-bar">
      <IonIcon icon={searchOutline} />
      <input
        type="text"
        className="form search"
        name="username"
        placeholder="Search"
      />
    </div>
  );
}

export default Search;
