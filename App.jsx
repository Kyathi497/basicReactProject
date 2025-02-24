// import { useState } from 'react';
// import {CORE_CONCEPTS} from './ComponentsList.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
// import { EXAMPLES } from './ComponentsList.jsx';
import Header from './components/Header.jsx';
import Examples from './components/Examples.jsx';


function App() {


  return (
    <div>

      <Header />

      <main>
        <CoreConcepts />
        <Examples />
      </main>


    </div>
  );
}

export default App;
