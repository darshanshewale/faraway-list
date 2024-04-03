export default function Item({ item, ondeleteitem, ontoggleitems }) {
  return (
    <li>
      {/* take input as checkbox if item is packed onchange will sent item.id to mark as packed */}
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => {
          ontoggleitems(item.id);
        }}
      />
      {/*  then mark as line through for checked item  */}
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {/* display number of quantity and description */}
        {item.quantity} {item.description}
      </span>
      {/* onclicking on button will trigger the deleitem sending id for deleteitem list  */}
      <button onClick={() => ondeleteitem(item.id)}>❌</button>
    </li>
  );
}
