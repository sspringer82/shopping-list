export type BaseItem = {
  amount: string | number;
  unit: string;
  title: string;
  done: boolean;
};

type Item = {
  _id: string;
  _rev: string;
} & BaseItem;
export default Item;

export type InputItem = {
  _id?: string;
  _rev?: string;
} & BaseItem;
