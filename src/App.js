import './App.css';
import { Array } from './components/Array';
const comment = [
  { id:1,
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'http://placekitten.com/g/62/62',
    },
  },
  {
    id:2,
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'http://placekitten.com/g/64/64',
    },
  },
  { 
    id:3,
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'http://placekitten.com/g/64/64',
    },
  },
];



function App() {

  return (
    <div className="App">
        <Array array={comment}/>

    </div>
  );
}

export default App;
