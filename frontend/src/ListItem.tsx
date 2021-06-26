import { TableRow, TableCell, Button } from '@material-ui/core';
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
    <TableRow>
      <TableCell>
        <Button onClick={() => onSave({ ...item, done: !item.done })}>
          {item.done ? 'zurück' : 'gekauft'}
        </Button>
      </TableCell>
      <TableCell style={{ textDecoration: item.done ? 'line-through' : 'none' }}>
        {item.amount} {item.unit}
      </TableCell>
      <TableCell
        style={{ textDecoration: item.done ? 'line-through' : 'none' }}
        onClick={() => onEdit(item._id)}
      >
        {item.title}
      </TableCell>
      <TableCell>
        <Button onClick={() => onDelete(item)}>löschen</Button>
      </TableCell>
    </TableRow>
  );
};

export default ListItem;
