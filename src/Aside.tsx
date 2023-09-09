import Search from "./Search";
import ContactList from "./ContactList";
import "./Aside.css";

function Aside() {
  return (
    <aside className="contacts-main">
      <Search />
      <ContactList />
    </aside>
  );
}

export default Aside;
