import { IonIcon } from "@ionic/react";
import { chevronDownOutline, earthOutline } from "ionicons/icons";

import user1 from "./assets/images/user1.jpg";

function PostInput() {
  return (
    <div className="posting">
      <div className="posting-top">
        <img className="user" src={user1} width="50" height="50" />

        <div className="posting-right">
          <div className="publicity">
            <p className="btn-text">Everyone</p>
            <IonIcon icon={chevronDownOutline} />
          </div>

          <textarea
            className="form post"
            name="post"
            placeholder="What do you want to write about?"
          ></textarea>

          <div className="post-bottom">
            <div className="post-options">
              <IonIcon icon={earthOutline} />
              <p className="btn-text">Anyone can reply</p>
              <IonIcon icon={chevronDownOutline} />
            </div>

            <button className="post-btn">Post</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostInput;
