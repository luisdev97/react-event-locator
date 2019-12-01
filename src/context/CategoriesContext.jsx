import React, { Component, createContext } from 'react';
import axios from 'axios';



const CategoriesContext = createContext();
export const CategoriesConsumer = CategoriesContext.Consumer;

class CategoriesProvider extends Component {

    API_KEY = "346GRTUM7G2C4NMYDHIV";
    state = {
        categories: []
    }

    getCategories = async() => {
        let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.API_KEY}&locale=es_ES`;
        const categories = await axios.get(url);
        this.setState({ categories: categories.data.categories });
    }

    componentDidMount(){
        this.getCategories();
    }

    render() {
        return (
            <CategoriesContext.Provider value={{
                categories: this.state.categories
            }}>
                {this.props.children }
            </CategoriesContext.Provider>
        );
    }

}

export default CategoriesProvider;