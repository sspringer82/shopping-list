export type BaseItem = {
  amount: number;
  unit: string;
  title: string;
}

type Item = {
  _id: string;
  _rev: string;
} & BaseItem;
export default Item;

export type InputItem = {
  _id?: string;
  _rev?: string;
} & BaseItem;


