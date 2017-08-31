import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableWithoutFeedback,
    TouchableHighlight
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
export default class EpisodePicker extends Component {
    createData(seasons){
        const data = []
        for(let i=1; i <= seasons; i++){
            data.push({key: i, season: i})
        }
        return data
    }
    _renderItem(item){
        const {currentSeason} = this.props.navigation.state.params
            if(currentSeason == item.season){
                return(
                <TouchableHighlight style={styles.row} onPress={() => this.saveSeason(item)}>
                    <View style={styles.seasonChecked}>
                        <Text style={styles.textList}> Season {item.season}</Text>
                        <Icon 
                            name='check'
                            size={18}
                            color='#fff'
                        />
                    </View>
                </TouchableHighlight>
                );
            }else{
                return(
                <TouchableHighlight style={styles.row} onPress={() => this.saveSeason(item)}>   
                    <View>
                        <Text style={styles.textList}> Season {item.season}</Text>
                    </View>              
                </TouchableHighlight>
                )
            }
    }
    saveSeason(item){
        const {goBack} = this.props.navigation
        this.props.navigation.state.params.getSeason(item.season)
        goBack()
    }
    goBack(){
        const {goBack} = this.props.navigation
        goBack()
    }
    render() {
        //alert(this.props.navigation.state.params)
        const {seasons} = this.props.navigation.state.params
        return (
            <View style={styles.container}>
               <View style={styles.header}>
                       <View>
                            <Text style={styles.textTitle}>
                                Seasons
                            </Text>
                       </View>
                       <View style={styles.cancelButtonView}>
                           <TouchableWithoutFeedback onPress={() => this.goBack()}>
                               <View style={styles.containerButton}>
                                   <Text style={styles.textCancel}>
                                       Cancel
                                   </Text>
                               </View>
                           </TouchableWithoutFeedback>
                       </View>
               </View>
               <FlatList 
                    style={{flex: 1}}
                    renderItem={({item}) => this._renderItem(item)}
                    data={this.createData(seasons)}
               />  
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#181818'
    },
    header:{
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 60,
        backgroundColor: '#000',
        paddingBottom: 10
    },
    textTitle:{
        color: '#fff',
        fontSize: 21,
        fontWeight: '600'
    },
    cancelButtonView:{
        position: 'absolute',
        right: 10,
        top:23
    },
    containerButton:{

    },
    textCancel:{
        color: '#f9f9f9',
        fontSize: 18,
    },
    textList:{
        color: '#f9f9f9',
        fontSize: 18,
    },
    seasonChecked:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    row:{
        paddingVertical: 20,
        paddingHorizontal: 5,
        borderBottomWidth: 1,
        borderColor: '#000'
    }
})