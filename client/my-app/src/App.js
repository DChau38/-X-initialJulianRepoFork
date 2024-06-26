import '../src/styles/App.css';

import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

import Header from './components/Header.js';
import ClassFormByManual from './pages/ClassFormByManual';
import ClassFormByFile from '.pages/ClassFormByFile';
//import TimeSubmission from './pages/TimeForm';
//import HelpSection from '.pages/HelpSection';
//import SchedulePage from './pages/SchedulePage';


function App(){
  return (
    <Router>
      <div className="App"> 
        <Header/>
        <Routes>
          <Route path='/' element={<ClassFormByManual/>}/>
          <Route path='/degreeAudit' element={<ClassFormByFile/>}/>
          {/*<Route path='TimeForm' element={<TimeSubmission/>}/>
          <Route path='help' element={<HelpSection/>}/>
          <Route path='schedulePage' element={<SchedulePage/>}/>*/}
        </Routes>
      </div>
    </Router>
  );
}
export default App;
