import React, { ChangeEvent, useState } from 'react';
import Item, { InputItem } from './Item';

type Props = {
  onSave: (item: InputItem) => void;
  item?: Item;
};

const Form: React.FC<Props> = ({ onSave, item: inputItem }) => {
  const initial = inputItem
    ? inputItem
    : {
        done: false,
        amount: 0,
        unit: '',
        title: '',
      };

  const [item, setItem] = useState<InputItem>(initial);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setItem((oldItem) => ({ ...oldItem, [e.target.name]: e.target.value }));
  }

  return (
    <tr>
      <td>
        <input
          type="text"
          name="amount"
          id="amount"
          placeholder="amount"
          value={item.amount}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="unit"
          id="unit"
          placeholder="unit"
          value={item.unit}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="title"
          value={item.title}
          onChange={handleChange}
        />
      </td>
      <td>
        <button onClick={() => onSave(item)}>speichern</button>
      </td>
    </tr>
  );
};

export default Form;
