import React, { Component } from 'react';
import {
    Text, 
    View, 
    StyleSheet,
    TouchableNativeFeedback,
    Image
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const Header = props =>(
            <View style={styles.container}>
                <TouchableNativeFeedback onPress={()=> props.toggle()}>
                    <Icon 
                        name='bars'
                        color='#fff'
                        size={25}
                    />
                </TouchableNativeFeedback>
                <Image source={require('../Images/logo.png')} style={styles.logo}/>
                <Icon 
                  name='search'
                  color='#fff'
                  size={25}
                />
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