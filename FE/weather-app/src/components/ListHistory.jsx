import { useState, useEffect } from 'react'
import axios from 'axios'
import React from 'react';

class ListHistory extends React.Component {

    state = { listResult: [] }

    search = async () => {
        await axios.get('http://localhost:8000/ViewHistory').then(res => {
            this.setState({ listResult: res.data })
            console.log(this.state.listResult)
        });
    }

    render() {
        return (
            <div className="container my-5">
                <button
                    onClick={this.search}>
                    View Search History
                </button>
                <h1>
                    {this.state.listResult.map(result => <div>{result.City}</div>)}
                </h1>
            </div>
        )
    }

}

export default ListHistory