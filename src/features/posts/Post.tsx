import { IonIcon } from "@ionic/react";
import {
  heartOutline,
  chatbubbleOutline,
  shareSocialOutline,
} from "ionicons/icons";

import user1 from "../../assets/images/user1.jpg";

import "./Post.css";

interface Props {
  postBody: string;
}

function Post({ postBody }: Props) {
  return (
    <div className="full">
      <div className="post-body">
        <div className="prof-pic">
          <img className="user" src={user1} width="50" height="50" />
        </div>
        <div className="post-text">
          <div className="user-handles">
            <div className="names">
              <p className="username-post">sethonne</p>
              <p className="gray">#69420</p>
            </div>
            <p className="space gray">31 mins</p>
          </div>
          <p className="user-post-text">{postBody}</p>
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
