import React from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import Sidemenu from './components/Sidemenu/SideMenu';

function App() {
    return (
        <div className="App">
            <Header/>
            <Sidemenu/>
            <Banner/>
        </div>
    );
}

export default App;
