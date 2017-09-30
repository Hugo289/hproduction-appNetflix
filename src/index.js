import React, { Component } from 'react';
import{Provider, connect} from 'react-redux'
import {StackNavigator, addNavigationHelpers} from 'react-navigation';
import {AsyncStorage} from 'react-native'
import Routes from './config/routes'
import getStore from './store'
const Navigation = StackNavigator(Routes, {
    initialRouteName: 'Home',
    headerMode: 'none',
})

const navReducer = (state, action) => {
    const newState = Navigation.router.getStateForAction(action, state)
    return newState || state
}

class App extends Component {
    render(){
        return(
            <Navigation 
              Navigation={addNavigationHelpers({
                  dispatch: this.props.dispatch,
                  state: this.props.nav,
              })}
            />
        )
    }
}

const store = getStore(navReducer)
const AppIndex = connect (state => ({nav: state.nav}))(App)
export default Index = () => {
    return(
        <Provider store={store}>
            <AppIndex />
        </Provider>
    )
}
