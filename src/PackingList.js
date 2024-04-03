import { useState } from "react";
import Item from "./Item.js";

export default function PackingList({
  items,
  ondeleteitem,
  ontoggleitems,
  onclearlist,
}) {
  // according to input this will sort the list
  const [sortby, setsortby] = useState("input");
  let sorteditems;

  // initially as per provided the input so same as item list
  if (sortby === "input") {
    sorteditems = items;
  }

  // according to which got packed
  if (sortby === "packed") {
    sorteditems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  return (
    <div className="list">
      <ul>
        {sorteditems.map((items) => (
          <Item
            item={items}
            ondeleteitem={ondeleteitem}
            ontoggleitems={ontoggleitems}
            key={items.id}
          />
        ))}
      </ul>

      <div className="actions">
        {/* provide the input for sorting on change will sort the list */}
        <select value={sortby} onChange={(e) => setsortby(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="packed">Sort by packed status</option>
        </select>
        {/* this will clear the list  */}
        <button onClick={onclearlist}>Clear List </button>
      </div>
    </div>
  );
}
