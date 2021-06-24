import React, { useState } from 'react';
import Item from './Item';

const Form: React.FC = () => {
  const [item, setItem] = useState<Item>({
    amount: 0,
    unit: '',
    title: '',
  });

  return (
    <tr>
      <td>
        <input
          type="text"
          name="amount"
          id="amount"
          placeholder="amount"
          value={item.amount}
        />
      </td>
      <td>
        <input
          type="text"
          name="unit"
          id="unit"
          placeholder="unit"
          value={item.unit}
        />
      </td>
      <td>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="title"
          value={item.title}
        />
      </td>
    </tr>
  );
};

export default Form;
