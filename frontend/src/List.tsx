import React from 'react';
import Item, { InputItem } from './Item';
import ListItem from './ListItem';

type Props = {
  items: Item[];
  onDelete: (item: Item) => void;
  onSave: (item: InputItem) => void;
};

const List: React.FC<Props> = ({ items, onDelete, onSave }) => {
  if (items.length === 0) {
    return <div>Keine Artikel auf der Liste.</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Menge</th>
          <th>Einheit</th>
          <th>Artikel</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <ListItem item={item} onDelete={onDelete} onSave={onSave} />
        ))}
      </tbody>
    </table>
  );
};

export default List;
