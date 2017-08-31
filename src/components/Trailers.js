import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default class Trailers extends Component {
    state = {  }
    render() {
        return (
            <View style={styles.container}>
                <Text style={{color: '#fff'}}>Trailers</Text>
            </View>
        );
    }
}
const styles= StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#181818',
    }
})