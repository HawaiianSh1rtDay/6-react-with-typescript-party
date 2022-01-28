import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export interface IState {
  people: {
    id: number,
    name: string,
    age: number,
    img: string,
    note?: string
  }[],
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      id: 1,
      name: "Lebron James",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx4yh-BaXbXfCvbwt1pFcUyLE3ldeojdL6vg&usqp=CAU",
      age: 43,
      note: "Trouble staying on one team"
    }
  ])

  return (
    <div className="App">
        <h1>People invited to my party</h1>
        <List people={people} setPeople={setPeople} />
        <AddToList people={people} setPeople={setPeople}  />
    </div>
  );
}

export default App;
