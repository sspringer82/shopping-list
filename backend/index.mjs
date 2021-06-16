import nano from "nano";

const user = "admin";
const password = "secret";
const host = "localhost";
const port = 5984;
const dbName = "shopping-list";
const reset = false;
const debug = true;

try {
  const connection = nano(`http://${user}:${password}@${host}:${port}`);

  let dbExists = (await connection.db.list()).includes(dbName);

  if (reset) {
    await connection.db.destroy(dbName);
    dbExists = false;
  }

  if (dbExists === false) {
    await connection.db.create(dbName);
  }

  const shoppingList = await connection.db.use(dbName);

  const data = {
    title: "Chocolate",
    amount: 4,
    unit: "pieces",
  };

  await create(shoppingList, data);
  const allItems = await getAll(shoppingList);
  console.log(allItems);

  console.log(`count: ${await getCount(shoppingList)}`);
  await deleteById(shoppingList, allItems[0]['_id'], allItems[0]['_rev']);
  console.log(`count: ${await getCount(shoppingList)}`);


} catch (e) {
  console.error(e);
}

async function create(table, data) {
  const response = await table.insert(data);
  if (response.ok && debug) {
    console.log(`insert was fine: ${response.id}`);
  }
  return response.id;
}

async function getAll(table) {
  const docs = [];
  const doclist = await table.list();
  doclist.rows.forEach((doc) => {
    docs.push(getOneById(table, doc.id));
  });
  return Promise.all(docs);
}

async function getCount(table) {
  return (await table.list()).rows.length;
}
function getOneById(table, id) {

  return table.get(id);
}

async function deleteById(table, id) {
  const doc = await getOneById(table, id);
  return table.destroy(doc['_id'], doc['_rev']);
}
