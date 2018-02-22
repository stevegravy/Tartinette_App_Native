import React from 'react';
import Children from './App/Components/Children';
import Home from './App/Components/Home';
import {Router, Scene} from 'react-native-router-flux';
import Connect from "./App/Components/Connect";

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="home"
                           component={Home}
                           title="Tartinette"
                           initial
                    />
                    <Scene key="child"
                           component={Children}
                           title="Tartinette"
                           hideNavBar
                    />
                    <Scene key="connexion"
                           direction="vertical"
                           component={Connect}
                           title="Tartinette"
                           hideNavBar
                    />
                </Scene>
            </Router>
        );
    }
}
