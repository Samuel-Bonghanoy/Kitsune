import user2 from "../assets/images/user2.jpg";
import user3 from "../assets/images/user3.jpg";

import "./MessageList.css";

function MessageList() {
  return (
    <>
      <h3 className="contacts-title">Messages</h3>
      <div className="message">
        <img className="user" src={user3} width="50" height="50" />
        <div className="post-text">
          <div className="user-handles">
            <div className="names">
              <p className="username-post">Elon Musk</p>
              <p className="gray">#69420</p>
            </div>
            <p className="space gray">1 min</p>
          </div>
          <p className="user-post-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
          </p>
        </div>
      </div>
      <div className="message">
        <img className="user" src={user2} width="50" height="50" />
        <div className="post-text">
          <div className="user-handles">
            <div className="names">
              <p className="username-post">Lebron James</p>
              <p className="gray">#69420</p>
            </div>
            <p className="space gray">31 mins</p>
          </div>
          <p className="user-post-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
          </p>
        </div>
      </div>
    </>
  );
}

export default MessageList;
