import React, { Component } from 'react';
import {
    Text, 
    View, 
    StyleSheet,
    TouchableWithoutFeedback,
    Image
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const Header = props =>(
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={()=> props.toggle()}>
                    <Icon 
                        name='bars'
                        color='#fff'
                        size={25}
                    />
                </TouchableWithoutFeedback>
                <Image source={require('../Images/logo.png')} style={styles.logo}/>
                <TouchableWithoutFeedback onPress={() => props.navigation.navigate('Search', {})}>
                    <Icon 
                    name='search'
                    color='#fff'
                    size={25}
                    />
                </TouchableWithoutFeedback>
            </View>        
)
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'black',
        paddingHorizontal: 15,
    },
    logo:{
        width: 120,
        height: 40
    }
})
export default Header;