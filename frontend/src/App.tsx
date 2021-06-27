import "./App.css";
import Item, { BaseItem, InputItem } from "./Item";
import List from "./List";

import PouchDB from "pouchdb";
import { useEffect, useState } from "react";
import { Grid, Card, CardContent } from "@material-ui/core";

const db: PouchDB.Database<BaseItem> = new PouchDB("shopping-list");

function save(item: InputItem): Promise<Item> {
  if (item._id) {
  } else {
  }
  return insert(item);
}

async function insert(item: InputItem): Promise<Item> {
  const { id: _id, rev: _rev } = await db.post(item);
  return { ...item, _id, _rev };
}

async function getAll(): Promise<Item[]> {
  return (await db.allDocs({ include_docs: true, descending: true })).rows
    .map((row) => row.doc)
    .filter((doc) => doc !== undefined) as unknown as Item[];
}

async function remove(item: Item): Promise<void> {
  db.remove(item);
}

function App() {
  const [items, setItems] = useState<Item[]>([]);
  useEffect(() => {
    getAll().then((data) => setItems(data));
  });

  return (
    <Grid container>
      <Grid md={2}></Grid>
      <Grid item md={8} sm={12}>
        <Card>
          <CardContent style={{ padding: 0 }}>
            <List items={items} onDelete={remove} onSave={save} />
          </CardContent>
        </Card>
      </Grid>
      <Grid md={2}></Grid>
    </Grid>
  );
}

export default App;
