import { TableRow, TableCell, Button, TextField } from '@material-ui/core';
import React, { ChangeEvent, useState } from "react";
import Item, { InputItem } from "./Item";
import StyledTableRow from './TableRow';

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
      <TableCell>
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
      <TableCell>
        <Button
          onClick={() => {
            onSave(item);
            setItem(initial);
          }}
          color="primary"
          variant="contained"
        >
          speichern
        </Button>
        &nbsp;
        <Button
          onClick={() => {
            setItem(initial);
            onCancel();
          }}
          color="secondary"
          variant="contained"
        >
          abbrechen
        </Button>
      </TableCell>
    </StyledTableRow>
  );
};

export default Form;
