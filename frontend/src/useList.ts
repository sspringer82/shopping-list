import { useState, useEffect } from 'react';
import Item from './Item';
import { getAll, changes } from './list.service';

export function useList() {
  const [items, setItems] = useState<Item[]>([]);
  useEffect(() => {
    getAll().then((data) => setItems(data));

    function handleChange() {
      getAll().then((data) => setItems(data));
    }

    changes.on('change', handleChange);

    return () => {changes.removeListener('change', handleChange)};
  }, []);

  return items;
}