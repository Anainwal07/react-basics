import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  //(item  : string) =>void
  onSelectItem: (item: string) => void;
}
//returning multiple elements are not alowed in react
function ListGroup({ items, heading, onSelectItem }: Props) {
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    //Fragments (<></> can be used to wrap the elements)
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found </p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
