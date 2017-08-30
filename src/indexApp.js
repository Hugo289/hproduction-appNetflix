import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import Search from './components/Search';
import HomeApp from './app';
import Details from './components/Details'
const IndexApp = StackNavigator({
    Home: {
        screen: HomeApp,
    },
    Search:{
        screen: Search
    },
    Details:{
        screen: Details,
    }
},{
    initialRouteName: 'Home',
    headerMode: 'none',
})

export default IndexApp;