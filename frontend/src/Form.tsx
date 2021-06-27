import { TableCell, Button, TextField, IconButton } from '@material-ui/core';
import React, { ChangeEvent, useState } from "react";
import Item, { InputItem } from "./Item";
import StyledTableRow from './TableRow';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';

type Props = {
  onSave: (item: InputItem) => void;
  onCancel: () => void;
  item?: Item;
};

const Form: React.FC<Props> = ({ onSave, onCancel, item: inputItem }) => {
  const initial = inputItem
    ? inputItem
    : {
        done: false,
        amount: "",
        unit: "",
        title: "",
      };

  const [item, setItem] = useState<InputItem>(initial);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setItem((oldItem) => ({ ...oldItem, [e.target.name]: e.target.value }));
  }

  return (
    <StyledTableRow>
      <TableCell></TableCell>
      <TableCell style={{minWidth: 125}}>
        <TextField
          name="amount"
          id="amount"
          label="Menge"
          value={item.amount}
          onChange={handleChange}
          style={{ width: 60 }}
        />
        &nbsp;
        <TextField
          name="unit"
          id="unit"
          label="Einheit"
          value={item.unit}
          onChange={handleChange}
          style={{ width: 60 }}
        />
      </TableCell>
      <TableCell>
        <TextField
          name="title"
          id="title"
          label="Artikel"
          value={item.title}
          onChange={handleChange}
        />
      </TableCell>
      <TableCell style={{minWidth: 100}}>
        <IconButton
          onClick={() => {
            onSave(item);
            setItem(initial);
          }}
          color="primary"
        >
          <SaveIcon />
        </IconButton>
        &nbsp;
        <IconButton
          onClick={() => {
            setItem(initial);
            onCancel();
          }}
          color="secondary"
        >
          <CancelIcon />
        </IconButton>
      </TableCell>
    </StyledTableRow>
  );
};

export default Form;
