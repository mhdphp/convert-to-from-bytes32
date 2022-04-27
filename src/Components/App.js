import React, { Component } from 'react';
import NavbarCustom from './NavbarCustom.js';
import Main from './Main.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
        <div>
            <div className='mb-5'>
              <NavbarCustom/>
            </div>
            <Main/>
        </div>
    )
  }
}

export default App;