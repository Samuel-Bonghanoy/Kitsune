import Search from "./Search";
import ContactList from "../features/contacts/ContactList";
import MessageList from "./MessageList";
import "./Aside.css";

function Aside() {
  return (
    <aside className="contacts-main">
      <Search />
      <ContactList />
      <MessageList />
    </aside>
  );
}

export default Aside;
