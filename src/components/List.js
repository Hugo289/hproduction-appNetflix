import React, { Component } from 'react';
import {Text, View, ScrollView, StyleSheet, FlatList, Image, TouchableWithoutFeedback} from 'react-native';
import Slider from '../components/Slider';
import {getTwoItems} from '../api/api'
export default class List extends Component {
    newPushContent(item){
        this.props.navigation.navigate('Details',{
            item:item
        })
    }
    _renderItem(item){
        return(
            <TouchableWithoutFeedback onPress={() => this.newPushContent(item)}>
                <Image style={{width: 140, height: 200}}  source={{uri: item.image}}/>
            </TouchableWithoutFeedback>
        );
    }
    render() {
        return (
            <ScrollView style={{flex:1}}>
                <Slider />
                <View>
                    <Text style={styles.text}>My Movies List</Text>
                    <FlatList
                     
                        horizontal
                        ItemSeparatorComponent={ () => <View style={ { width: 5, height: 10 } } /> }
                        renderItem={({item}) => this._renderItem(item)}
                        data={getTwoItems[0]}
                    />
                </View>
                <View>
                    <Text style={styles.text}>My Series List</Text>
                    <FlatList
                     
                        horizontal
                        ItemSeparatorComponent={ () => <View style={ { width: 5, height: 10, } } /> }
                        renderItem={({item}) => this._renderItem(item)}
                        data={getTwoItems[1]}
                    />
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    text:{
        color: '#fff',
    },
    flatList:{
        marginHorizontal: 5,
    }
})