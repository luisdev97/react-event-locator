import React, { Component, createContext } from 'react';
import axios from 'axios';

const EventsContext = createContext();
export const EventsConsumer = EventsContext.Consumer;

class EventsProvider extends Component {

    //Add your own EventBrite Token
    token = "";
    ordenar = 'date'

    state = {
        events: []
    }

    getEvents = async(search) => {
        const { name, category } = search;
        let url = `https://www.eventbriteapi.com/v3/events/search/?token=${this.token}&q=${ name }&categories=${ category }`

        const events = await axios.get(url);
        this.setState({
            events: events.data.events
        })
    }
    
    render() {
        return (
            <EventsContext.Provider value={{
                events: this.state.events,
                getEvents: this.getEvents
            }}>
                {this.props.children }
            </EventsContext.Provider>
        );
    }
}

export default EventsProvider;