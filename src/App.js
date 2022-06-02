import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Appbar from './components/Appbar';
import HomePage from './components/HomePage';
import  DateAndTime  from './components/DateAndTime';
import Confirm from './components/Confirm';
import Contact from './components/Contact';
import Message from './components/Message';
import Form from './components/Form';
import Notfound from './components/Notfound';
// import Choose from './components/Choose';

import { RecoilRoot } from 'recoil';
import './css/style1.css';

const App = () => {
  return (
    
  
  <div className="App">
    <RecoilRoot>
           <div className='row'>
                <div className='col-xs-10 col-xs-0ffset-1'>
               <Appbar></Appbar>
            </div>
            
  </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="HomePage" element={<HomePage />} />
        <Route path="Form" element={<Form />} />
        <Route path="DateAndTime" element={<DateAndTime />} />
        <Route path="Confirm" element={<Confirm />} />
        <Route path="Message" element={<Message />} />

        <Route path="*" element={<Notfound />} />

      </Routes>
    </RecoilRoot>
  </div>
  );
}

export default App;
