import React from 'react';
import Item, { InputItem } from './Item';

type Props = {
  item: Item;
  onDelete: (item: Item) => void;
  onSave: (item: InputItem) => void;
  onEdit: (id: string) => void;
};

const ListItem: React.FC<Props> = ({ item, onDelete, onSave, onEdit }) => {
  return (
    <tr>
      <td>
        <button onClick={() => onSave({ ...item, done: !item.done })}>
          done
        </button>
      </td>
      <td style={{ textDecoration: item.done ? 'line-through' : 'none' }}>
        {item.amount} {item.unit}
      </td>
      <td
        style={{ textDecoration: item.done ? 'line-through' : 'none' }}
        onClick={() => onEdit(item._id)}
      >
        {item.title}
      </td>
      <td>
        <button onClick={() => onDelete(item)}>löschen</button>
      </td>
    </tr>
  );
};

export default ListItem;
