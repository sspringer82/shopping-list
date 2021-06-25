import React, { useState } from 'react';
import Form from './Form';
import Item, { InputItem } from './Item';
import ListItem from './ListItem';

type Props = {
  items: Item[];
  onDelete: (item: Item) => void;
  onSave: (item: InputItem) => void;
};

const List: React.FC<Props> = ({ items, onDelete, onSave }) => {
  const [edit, setEdit] = useState('');
  let tbody: React.ReactElement[];
  if (items.length === 0) {
    tbody = [
      <tr>
        <td colSpan={5}>Keine Artikel auf der Liste.</td>
      </tr>,
    ];
  } else {
    tbody = items.map((item) => {
      if (item._id === edit) {
        return <Form onSave={onSave} item={item} />;
      } else {
        return (
          <ListItem
            key={item._id}
            item={item}
            onDelete={onDelete}
            onSave={onSave}
            onEdit={setEdit}
          />
        );
      }
    });
  }

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Menge</th>
          <th>Einheit</th>
          <th>Artikel</th>
        </tr>
      </thead>
      <tbody>
        {tbody}
        {edit === '' && <Form onSave={onSave} />}
      </tbody>
    </table>
  );
};

export default List;
