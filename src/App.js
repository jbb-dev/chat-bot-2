import React from 'react';
import './App.css';
import Contact from './components/Contact';

const person1 = {
  name : 'Johnny',
  avatar : 'https://randomuser.me/api/portraits/thumb/men/76.jpg',
  online : true,
  text : {
    online : "salut je suis connecté",
    offline : "désolé, je suis déconnecté"
  }

}

const person2 = {
  name : 'Danny',
  avatar : 'https://randomuser.me/api/portraits/thumb/men/77.jpg',
  online : false,
  text : {
    online : "salut je suis connecté",
    offline : "désolé, je suis déconnecté"
  }

}

const person3 = {
  name: 'Paul',
  avatar : 'https://randomuser.me/api/portraits/thumb/men/78.jpg',
  online : true,
  text : {
    online : "salut je suis connecté",
    offline : "désolé, je suis déconnecté"
  }

  
}

function App() {
  return (
    <div className="App">
      <Contact {...person1} />
      <Contact {...person2} />
      <Contact {...person3} />
    </div>
  );
}

export default App;
