import Expenses from './components/Expenses';

function App(props) {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 3.99,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'New Monitor',
      amount: 599.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'Sim Rig',
      amount: 1150,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;