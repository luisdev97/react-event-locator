import React, { Component } from 'react';

class Form extends Component {

    state = {
        name: '',
        category: ''
    }


    render() {
        return (
           <form>

               <fieldset className="uk-fieldset uk-margin">
                   <legend className="uk-legend uk-text-center">
                       Find your event by name or category
                   </legend>
               </fieldset>



               <div className="uk-column-1-3@m uk-margin">

                    <div className="uk-margin" uk-margin="true">
                        <input type="text" name="name" className="uk-input" placeholder="name of event or city"/>
                    
                    </div>
            
               <div className="uk-margin" uk-margin="true">
                   <select name="category" className="uk-select">

                   </select>
               </div>

               <div>
                   <input type="submit" className="uk-button uk-button-danger"/>
               </div>
               
               </div>

           </form>

        );
    }

}

export default Form;