export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        {" "}
        <em>start adding some items to your packingg list </em>
      </p>
    );
  //this will give the number of item in the list
  const numitems = items.length;

  //this will give the number of item in the list got packed
  const numpacked = items.filter((item) => item.packed).length;

  //calculate the percentage and show the content accordingly as below
  const per = Math.round((numpacked / numitems) * 100);
  return (
    <footer className="stats">
      <em>
        {per === 100
          ? `you got everything ! readt to go `
          : ` You have ${numitems} items on your list, and you already packed 
          ${numpacked} (${per}%)`}
      </em>
    </footer>
  );
}
