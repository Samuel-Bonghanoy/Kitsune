import { IonIcon } from "@ionic/react";
import {
  heartOutline,
  chatbubbleOutline,
  shareSocialOutline,
} from "ionicons/icons";

function Post() {
  return (
    <div className="full">
      <div className="post-body">
        <div className="prof-pic">
          <img
            className="user"
            src="../images/user1.jpg"
            width="50"
            height="50"
          />
        </div>
        <div className="post-text">
          <div className="user-handles">
            <div className="names">
              <p className="username-post">sethonne</p>
              <p className="gray">#69420</p>
            </div>
            <p className="space gray">31 mins</p>
          </div>
          <p className="user-post-text">
            I seriously hate Javascript bruh I am actually losing my mind making
            this project rn please get me out of here hoooooolly
          </p>
          <div className="post-icons">
            <div className="heart-container">
              <IonIcon icon={heartOutline} />
              <span className="number-likes"></span>
            </div>
            <IonIcon icon={chatbubbleOutline} />
            <IonIcon icon={shareSocialOutline} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
