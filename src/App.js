import React, { Component } from "react";
import {Products, NavBar} from './components';
class App extends Component {
    render(){
        return (
            <div>
                <NavBar />
                <Products />
            </div>
        )
    }
}

export default App;