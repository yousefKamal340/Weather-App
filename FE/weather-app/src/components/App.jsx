import React from 'react';
import axios from 'axios';
import '../Style.css'
import CitySearch from './CitySearch';
import ListHistory from './ListHistory';

class App extends React.Component{

    state = {weatherResult: null}

    onSearchSubmit = async (searchInputValue) => {
        console.log(searchInputValue, " test ");
        const response = await axios.post(`http://localhost:8000/WeatherDetails`, { searchInputValue })
        console.log(response, " response ");
        this.setState({weatherResult: response.data})
     }

    render() {
        return(
            <div className="container my-5">
                <h1 className="text-center title">Weather App</h1>
                 <CitySearch onSearchSubmit = {this.onSearchSubmit} />
                 <h1>
                     {this.state.weatherResult}
                 </h1>
                 <ListHistory/>
            </div>
        )
    }

}

export default App;