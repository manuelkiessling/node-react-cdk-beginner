import React from 'react';
import './App.css';

const App = ({ numberOfClicks, backendData, onClick }) => (
    <div className="App">
        <h1>Hello, World!</h1>
        <button onClick={e => { e.preventDefault(); onClick(numberOfClicks); } }>Load additional text</button>
        <h3>Additional text (click to load):</h3>
        <div>Number of clicks: {numberOfClicks}</div>
        <pre>{JSON.stringify(backendData, null, '  ')}</pre>
    </div>
);

export default App;
