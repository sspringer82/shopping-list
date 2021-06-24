import React from 'react';
import Item from './Item';
import ListItem from './ListItem';

type Props = {
  items: Item[];
};

const List: React.FC<Props> = ({ items }) => {
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
          <ListItem item={item} />
        ))}
      </tbody>
    </table>
  );
};

export default List;
