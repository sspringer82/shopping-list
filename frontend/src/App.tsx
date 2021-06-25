import "./App.css";
import Item from "./Item";
import List from "./List";

import PouchDB from "pouchdb";
import { useEffect, useState } from "react";
import Form from "./Form";

const db: PouchDB.Database<Item> = new PouchDB("shopping-list");

async function insert(item: Item): Promise<Item> {
  const {id: _id, rev: _rev} = await db.post(item);
  return { ...item, _id, _rev };
}

async function getAll(): Promise<Item[]> {
  return (await db.allDocs({ include_docs: true, descending: true })).rows
    .map((row) => row.doc)
    .filter((doc) => doc !== undefined) as unknown as Item[];
}

function App() {
  const [items, setItems] = useState<Item[]>([]);
  useEffect(() => {
    getAll().then((data) => setItems(data));
  });

  return (
    <>
      <Form onSave={insert} />
      <List items={items} />
    </>
  );
}

export default App;
