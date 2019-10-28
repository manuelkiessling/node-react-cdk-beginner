import React from 'react';
import './App.css';

const App = ({ numberOfClicks, onClick }) => (
    <div className="App">
        <h1>Hello, World!</h1>
        <h2>Number of clicks: {numberOfClicks}</h2>
        <button onClick={e => { e.preventDefault(); onClick(); } }>Click me</button>
    </div>
);

export default App;
