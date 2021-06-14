import nano from 'nano';

const user = 'admin';
const password = 'secret';
const host = 'localhost';
const port = 5984;
const dbName = 'shopping-list';
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
    title: 'Chocolate',
    amount: 4,
    unit: 'pieces'
  }

  const response = await shoppingList.insert(data);

  if (response.ok) {
    console.log('insert was fine');
  }





} catch (e) {
  console.error(e);
}

async function create(table) {
  const response = await shoppingList.insert(data);
  if (response.ok && debug) {
    console.log(`insert was fine: ${response.id}`);
  }
  return response.id;
}

async function getAll(table) {

}

async function getOneById(table, id) {

}

async function getOneByTitle(table, title) {

}

async function deleteById(table, id) {

}