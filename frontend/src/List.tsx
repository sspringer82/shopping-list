import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import React, { useState } from "react";
import Form from "./Form";
import { InputItem } from "./Item";
import { save } from './list.service';
import ListItem from "./ListItem";
import { useList } from './useList';

const List= (): JSX.Element => {
  const items = useList();

  const [edit, setEdit] = useState("");

  function handleSave(inputItem: InputItem) {
    setEdit("");
    save(inputItem);
  }

  function handleCancel() {
    setEdit("");
  }

  let tbody: React.ReactElement[];
  if (items.length === 0) {
    tbody = [
      <TableRow key="empty">
        <TableCell colSpan={5}>Keine Artikel auf der Liste.</TableCell>
      </TableRow>,
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
