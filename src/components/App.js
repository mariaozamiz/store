import React from 'react';
import '../stylesheets/App.css';
import api from '../services/api';

api().then((data) => {
    console.log(data);
});

function App() {
    return <div className="App">Hola Mundo</div>;
}

export default App;
