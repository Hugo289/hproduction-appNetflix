import React, { Component } from 'react';
import{
    View,
    Text,
    StyleSheet
} from 'react-native'
import VideoPlayer from 'react-native-video-controls'
import Orientation from 'react-native-orientation'
import {BackAndroid, BackHandler, ToastAndroid,} from 'react-native';
export default class VideoPlayerView extends Component {
    componentWillMount(){
        Orientation.lockToLandscape();
    }
    componentDidMount(){
        BackHandler.addEventListener('hardwareBackPress', this._backHardwareButton);
    }
    componentWillUnmount(){
        BackHandler.removeEventListener('hardwareBackPress', this._backHardwareButton);
    }
    _back(){
        Orientation.lockToPortrait()
        this.props.navigation.goBack()
    }
    _backHardwareButton(){
        Orientation.lockToPortrait()
    }
    render() {
        return (
            <View style={styles.container}>
                <VideoPlayer
                    source={{ uri: 'https://vjs.zencdn.net/v/oceans.mp4' }}
                    title={this.props.navigation.state.params.title}
                    onBack={ () => this._back()} 
                />
            </View>
        );
    }
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
    }
})