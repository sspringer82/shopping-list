import React from 'react';
import Item from './Item';

type Props = {
  item: Item;
};

const ListItem: React.FC<Props> = ({ item }) => {
  return (
    <tr>
      <td>{item.amount}</td>
      <td>{item.unit}</td>
      <td>{item.title}</td>
    </tr>
  );
};

export default ListItem;
