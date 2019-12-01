import React, { Component } from 'react';
import Header from './components/Header.jsx';
import Form from './components/Form.jsx';

import CategoriesProvider from './context/CategoriesContext.jsx';

class App extends Component {


  render() {
    return (
        <CategoriesProvider>
          <Header/> 
          <div className="uk-container">
            <Form/>
          </div>
        </CategoriesProvider>
    );
  }
}



export default App;
