import React from 'react';
import './App.css';

const App = ({ numberOfClicks, onClick, additionalText }) => (
    <div className="App">
        <h1>Hello, World!</h1>
        <button onClick={e => { e.preventDefault(); onClick(); } }>Load additional text</button>
        <h3>Additional text (click to load):</h3>
        <h4>{additionalText}</h4>
        <div>Number of clicks: {numberOfClicks}</div>
    </div>
);

export default App;
