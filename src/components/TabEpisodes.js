import React, { PureComponent } from 'react';

import{
    View,
    StyleSheet
} from 'react-native';
import Episode from './Episodes';
import Trailers from './Trailers';
import {Tab, Tabs} from 'native-base'
export default class TabEpisodes extends PureComponent {
    
    render() {
        return(
                <Tabs tabBarUnderlineStyle={styles.underline}>
                    <Tab  tabStyle={styles.tab} activeTabStyle={styles.activeTab} heading='Episodes'>
                        <Episode 
                            episodes={this.props.data} 
                            currentSeason={this.props.currentSeason}
                            season={this.props.season}
                            navigation={this.props.navigation}
                            getSeason={this.props.getSeason}
                        />
                    </Tab>
                    <Tab tabStyle={styles.tab} activeTabStyle={styles.activeTab} heading='Trailers'>
                        <Trailers />
                    </Tab>
                </Tabs>
        );
    }
}
const styles = StyleSheet.create({
    tab:{
        backgroundColor: '#181818',
    },
    activeTab:{
        backgroundColor: 'transparent',
    },
    underline:{
        top: 0,
        backgroundColor: 'red'
    },
})