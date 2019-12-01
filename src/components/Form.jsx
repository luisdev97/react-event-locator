import React, { Component } from 'react';
import { CategoriesConsumer } from '../context/CategoriesContext.jsx';

class Form extends Component {

    state = {
        name: '',
        category: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    getFormData = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    renderCategories = categories => 
        categories.map(category => (
            <option 
               key={ category.id } 
               value={ category.id }
               data-uk-form-select >
                   { category.name }
            </option>
        ))
    
         
    
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
                        <input onChange={ this.handleChange } type="text" name="name" className="uk-input" placeholder="name of event or city"/>
                    
                    </div>
            

               <div className="uk-margin" uk-margin="true">
                   <select onChange={ this.handleChange } name="category" className="uk-select">
                        <option> --- Select Category --- </option>
                        <CategoriesConsumer>
                            { value => this.renderCategories(value.categories) }
                        </CategoriesConsumer>
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