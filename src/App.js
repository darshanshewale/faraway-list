import { useState } from "react";
import Logo from "./Logo";
import Form from "./form";
import PackingList from "./PackingList";
import Stats from "./Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

//learning component of separation of concern  which help to understand the functioning better and analyzie which do according to responsibity of component,size and depending upon progrraming style

export default function App() {
  //state created for item list
  const [items, setitems] = useState([]);

  //this will add items to items state array
  function handleadditems(item) {
    setitems((items) => [...items, item]);
  }

  //this will mutate the array filter out through the item array select all apart from deleteitem id which got from item component
  function deleteitem(id) {
    setitems((items) => items.filter((item) => item.id !== id));
  }

  // get the id from item component for which checkbox is clicked update the item accordingly with packed object value
  function handletoggleitem(id) {
    setitems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  // this will create the list by setitems set empty also will check for confirmation for same
  function handleclearlist() {
    const confirm = window.confirm(
      "Are you sure want to delete all the list items"
    );
    if (confirm) {
      setitems([]);
    }
  }
  return (
    <div className="app">
      {/* //display header with Logo */}
      <Logo />
      {/* sent handleadditems as props to form  so that it will add object in list of items */}
      <Form onAdditems={handleadditems} />

      {/* handle the operation on the list provided the required props   */}
      <PackingList
        items={items}
        ondeleteitem={deleteitem}
        ontoggleitems={handletoggleitem}
        onclearlist={handleclearlist}
      />
      {/* provide info about how many item packed or in the list also shows the percentage for item packed  */}
      <Stats items={items} />
    </div>
  );
}
