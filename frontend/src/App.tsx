import './App.css';
import Item from './Item';
import List from './List';

const items: Item[] = [
  {
    amount: 10,
    unit: 'St.',
    title: 'Schokolade',
  },
  {
    amount: 100,
    unit: 'g',
    title: 'Salami',
  },
];

function App() {
  return <List items={items} />;
}

export default App;
