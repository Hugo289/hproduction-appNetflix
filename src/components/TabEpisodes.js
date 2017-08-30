import React, { Component } from 'react';

import{
    View,
    StyleSheet
} from 'react-native';
import Episode from './Episodes';
import Trailers from './Trailers';
import {TabViewAnimated, TabBar, SceneMap} from 'react-native-tab-view'
const FirstRoute = () => <Episode />
const SecondRoute = () => <Trailers />
export default class TabEpisodes extends Component {
    state = {
        index: 0,
        routes: [
          { key: '1', title: 'Episodes' },
          { key: '2', title: 'Trailers' },
        ],
      };
    _handleChangeTab(index){
        this.setState({
            index
        })
    }
    _renderHeader(props){
        return <TabBar {...props} />
    }
    _renderScene = SceneMap({
        '1': FirstRoute,
        '2': SecondRoute,
    })
    
    render() {
        return(
            <TabViewAnimated 
                styles={styles.container}
                navigationState={this.state}
                renderScene={this._renderScene}
                renderHeader={this._renderHeader}
                onIndexChange={this._handleChangeTab.bind(this)}
            />
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})