import React, { Component } from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import List from './components/List';
import Header from './components/Header'
import SideMenu from 'react-native-side-menu'
import Menu from './components/Menu'
class App  extends Component {
    constructor(props){
        super(props)
        this.state={
            isOpen: false,
        }
    }
    toggle(){
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    updateMenu(isOpen){
        this.setState({
           isOpen
        })
    }
    render() {
        return (
                <SideMenu
                    menu={<Menu />}
                    isOpen={this.state.isOpen}
                    onChange={(isOpen) => this.updateMenu(isOpen)}
                >
                    <View  style={[styles.conatiner,{flex: 1}]}>
                        <Header toggle={this.toggle.bind(this)}/>
                        <List />
                    </View>
                </SideMenu>
        );
    }
}
const styles = StyleSheet.create({
    conatiner:{
        backgroundColor: 'black'
    }
})
export default App;