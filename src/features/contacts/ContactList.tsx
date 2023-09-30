import "./ContactList.css";

import user3 from "../../assets/images/user3.jpg";

function ContactList() {
  return (
    <>
      <h3 className="contacts-title">Contacts</h3>
      <div className="contacts">
        <div className="contact-tab">
          <img className="user" src={user3} width="50" height="50" />
          <div className="contact-name">
            <p>Elon</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactList;
