import { TableRow, TableCell, Button, IconButton } from '@material-ui/core';
import React from 'react';
import Item, { InputItem } from './Item';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';

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
          {item.done ? <ClearIcon style={{color: 'red'}} /> : <CheckIcon style={{color: 'green'}} />}
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
        <IconButton onClick={() => onDelete(item)}><DeleteIcon style={{color: 'darkred'}} /></IconButton>
      </TableCell>
    </TableRow>
  );
};

export default ListItem;
