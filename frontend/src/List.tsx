import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import React, { useState } from "react";
import Form from "./Form";
import Item, { InputItem } from "./Item";
import ListItem from "./ListItem";

type Props = {
  items: Item[];
  onDelete: (item: Item) => void;
  onSave: (item: InputItem) => void;
};

const List: React.FC<Props> = ({ items, onDelete, onSave }) => {
  const [edit, setEdit] = useState("");

  function handleSave(inputItem: InputItem) {
    setEdit("");
    onSave(inputItem);
  }

  function handleCancel() {
    setEdit("");
  }

  let tbody: React.ReactElement[];
  if (items.length === 0) {
    tbody = [
      <tr key="empty">
        <td colSpan={5}>Keine Artikel auf der Liste.</td>
      </tr>,
    ];
  } else {
    tbody = items.map((item) => {
      if (item._id === edit) {
        return (
          <Form
            onSave={handleSave}
            item={item}
            onCancel={handleCancel}
            key="form"
          />
        );
      } else {
        return (
          <ListItem
            key={item._id}
            item={item}
            onDelete={onDelete}
            onSave={handleSave}
            onEdit={setEdit}
          />
        );
      }
    });
  }

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Menge</TableCell>
            <TableCell>Artikel</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tbody}
          {edit === "" && (
            <Form onSave={handleSave} onCancel={handleCancel} key="form" />
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
