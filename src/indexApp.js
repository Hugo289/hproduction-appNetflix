import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import Search from './components/Search';
import HomeApp from './app';
import Details from './components/Details'
import VideoPlayer from './components/VideoPlayerView'
import EpisodePicker from './components/EpisodePicker'
const IndexApp = StackNavigator({
    Home: {
        screen: HomeApp,
    },
    Search:{
        screen: Search
    },
    Details:{
        screen: Details,
    },
    VideoPlayer: {
        screen: VideoPlayer,
    },
    EpisodePicker: {
        screen: EpisodePicker,
    }
},{
    initialRouteName: 'Home',
    headerMode: 'none',
})

export default IndexApp;