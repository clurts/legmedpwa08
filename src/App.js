import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import PWAPrompt from 'react-ios-pwa-prompt'

function App() {
  return (
    <>
            <header>
                <p>This is header</p>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <p>Do it properly!!</p>
            </footer>
            <PWAPrompt copyTitle="Føj til hjemmeskærm" />
        </>
  );
}

export default App;
