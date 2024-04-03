import { useState } from "react";
export default function Form({ onAdditems }) {
  const [description, setdescription] = useState("");
  // created state for number of quantity set initially at 1st
  const [quantity, setquantity] = useState(1);

  function handlesubmit(e) {
    e.preventDefault();

    // if not description return the same
    if (!description) return;

    // accordingly created the object with below parameter and store the same in the list by using onAdditems prop from form
    const newitem = { description, quantity, packed: false, id: Date.now() };
    console.log(newitem);
    onAdditems(newitem);
  }
  return (
    // created the form gets onsubmit will handle
    <form className="add_form" onSubmit={handlesubmit}>
      <h3>What do you need for your 🎒 trip</h3>

      {/* onchange setquantity after selection and store in quantity state hook  */}
      <select
        value={quantity}
        onChange={(e) => setquantity(Number(e.target.value))}
      >
        {/* created 20 numbers of quantity option from Array.from methond */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      {/* onchange setdecription  and store in description state hook  */}
      <input
        type="text"
        placeholder="Item"
        value={description}
        onChange={(e) => setdescription(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}
