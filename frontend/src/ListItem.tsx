import React from 'react';
import Item from './Item';

type Props = {
  item: Item;
  onDelete: (item: Item) => void;
};

const ListItem: React.FC<Props> = ({ item, onDelete }) => {
  return (
    <tr>
      <td>{item.amount}</td>
      <td>{item.unit}</td>
      <td>{item.title}</td>
      <td><button onClick={() => onDelete(item)}>löschen</button></td>
    </tr>
  );
};

export default ListItem;
