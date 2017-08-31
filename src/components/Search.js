import React, { Component } from 'react';
import {
    View, 
    Text, 
    StyleSheet,
    TouchableWithoutFeedback,
    TextInput,
    Dimensions,
    FlatList,
    ScrollView,
    Image
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import {getAll} from '../api/api'
const {width, height} = Dimensions.get('window')
export default class Search extends Component {
    constructor(props){
        super(props)
        this.state={
            text: '',
            data: '',
        }
    }
    filter(text){
        const data = getAll()
        const newData= data.filter(function(item){
            const itemData =item.name.toUpperCase()
            const textData = text.toUpperCase()
            return itemData.indexOf(textData) > -1
        })
        this.setState({
            data: newData,
            text: text,
        })
    }
    deleteData(){
        this.setState({
            text: '',
            data: '',
        })
    }
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
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Icon 
                        name="search"
                        size={18}
                        color="grey"
                        style={styles.searchIcon}
                    />
                    <TextInput 
                        value={this.state.text}
                        onChangeText={(text) =>this.filter(text)}
                        style={styles.input}
                        placeholder="Search"
                        placeholderTextColor='grey'
                        underlineColorAndroid='transparent'
                        keyboardAppearance="dark"
                        autoFocus={true}
                    />
                    {this.state.text ?
                        <TouchableWithoutFeedback onPress={() => this.deleteData()}>
                            <Icon 
                                name='times-circle'
                                color='grey'
                                size={18}
                                style={styles.iconInputClose}
                            />
                        </TouchableWithoutFeedback>
                    : null}
                    
                    <TouchableWithoutFeedback style={styles.cancelButton} onPress={() => this.props.navigation.goBack()}>
                        <View style={styles.containerButton}>
                            <Text style={styles.textCancelButton}>Cancel</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <ScrollView>
                    <FlatList 
                        style={styles.flatMovies}
                        data={this.state.data}
                        numColumns={3}
                        columnWrapperStyle={{marginTop: 5, marginLeft: 5}}
                        renderItem={({item}) => this._renderItem(item)}
                    />
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
   container:{
        flex:1,
        backgroundColor: '#181818'
   },
   header:{
        height: 45,
        backgroundColor: '#181818',
        borderBottomWidth: 1,
        borderColor: '#3a3a3a',
        paddingBottom: 5,
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
   },
   searchIcon:{
        position: 'absolute',
        top: 10,
        left: 15,
        zIndex: 1,
        backgroundColor:'transparent',
   },
   iconInputClose:{
        position: 'absolute',
        top: 10,
        right: 85,
        backgroundColor: 'transparent',
        zIndex: 1,
   },
   input:{
        marginTop: 3,
        width: width - (width / 4),
        height: 35,
        backgroundColor: '#323232',
        marginHorizontal: 10,
        paddingLeft: 30,
        borderRadius: 3,
   },
   textCancelButton:{
       color: '#fff',
   },
   flatMovies:{
     marginHorizontal: 5,  
   },
   image:{
    marginRight: 5,
    height: 170,
    width: 115,
   },
})