import React, { ChangeEvent, useState } from "react";
import Item, { InputItem } from "./Item";

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
    <tr>
      <td></td>
      <td>
        <input
          type="text"
          name="amount"
          id="amount"
          placeholder="Menge"
          value={item.amount}
          onChange={handleChange}
          style={{ width: 40 }}
        />
        <input
          type="text"
          name="unit"
          id="unit"
          placeholder="Einheit"
          value={item.unit}
          onChange={handleChange}
          style={{ width: 40 }}
        />
      </td>
      <td>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Artikel"
          value={item.title}
          onChange={handleChange}
        />
      </td>
      <td>
        <button
          onClick={() => {
            onSave(item);
            setItem(initial);
          }}
        >
          speichern
        </button>
        <button
          onClick={() => {
            setItem(initial);
            onCancel();
          }}
        >
          abbrechen
        </button>
      </td>
    </tr>
  );
};

export default Form;
