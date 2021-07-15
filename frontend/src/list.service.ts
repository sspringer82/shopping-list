import PouchDB from "pouchdb";
import Item, { BaseItem, InputItem } from './Item';

const db = new PouchDB<BaseItem>("shopping-list");

export const changes = db.changes({since: 'now', live: true});

db.sync('http://localhost:5984/shopping-list', { live: true });

export function save(item: InputItem): Promise<Item> {
  if (item._id) {
    return update(item as Item);
  } else {
    return insert(item);
  }
}

async function update(item: Item): Promise<Item> {
  const {id: _id, rev: _rev} = await db.put(item);
  return {...item, _id, _rev };
}

async function insert(item: InputItem): Promise<Item> {
  const { id: _id, rev: _rev } = await db.post(item);
  return { ...item, _id, _rev };
}

export async function getAll(): Promise<Item[]> {
  return (await db.allDocs({ include_docs: true, descending: true })).rows
    .map((row) => row.doc)
    .filter((doc) => doc !== undefined) as unknown as Item[];
}

export async function remove(item: Item): Promise<void> {
  db.remove(item);
}