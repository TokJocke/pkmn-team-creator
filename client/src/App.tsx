import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import DisplayView from './components/displayView';

/* 
This needs to be the source of truth for my api calls in order for the app work as intended

Add state here or in pokemons that calculates allTeams.length to be able to calculate the last teams id and ++ its value 
Also add state for should update to be able to create rerender when new team added. 
and send array with selectedPokemons to save as state 
move up pokemon and teams state to this component and pass them down as props
*/

function App() {
  return (
    <BrowserRouter>
        <DisplayView />    
    </BrowserRouter>
  );
}

export default App;
