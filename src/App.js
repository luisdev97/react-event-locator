import React, { Component } from 'react';
import Header from './components/Header.jsx';
import Form from './components/Form.jsx';
import EventList from './components/EventList';


import CategoriesProvider from './context/CategoriesContext.jsx';
import EventsProvider from './context/EventsContext.jsx';

class App extends Component {


  render() {
    return (
        <CategoriesProvider>
          <EventsProvider>

            <Header/> 
            
            <div className="uk-container">
              <Form/>
              <EventList/>
            </div>

          </EventsProvider>
        </CategoriesProvider>
    );
  }
}



export default App;
