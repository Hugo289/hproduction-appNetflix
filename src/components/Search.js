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
const show_first = [
    {
        key: 1,
        name: 'Rambo I',
        image: 'http://st-listas.20minutos.es/images/2010-12/265298/2781377_640px.jpg',
    },
    {
        key: 2,
        name: 'Rambo II',
        image: 'http://cartelesmix.es/images/CartelesR/rambo28507.jpg',
    },
    {
        key: 3,
        name: 'Casino Royale',
        image: 'https://i.pinimg.com/736x/6b/ec/ca/6becca73af445887ebadbe0aad97cf2b.jpg' ,
    },
    {
        key: 4,
        name: 'Avatar',
        image: 'http://nolomires.com/static/img_mediana/380_08b282be63095c5b73eef006d0af310b.jpg',
    },
    {
        key: 5,
        name: 'Transformers La Era De La Extincion',
        image: 'http://es.web.img2.acsta.net/pictures/14/06/23/11/40/441402.jpg',
    },
    {
        key: 6,
        name: 'Undisputed IV',
        image: 'http://www.filmizletsene.net/uploads/film/2017/08/yenilmez-4-boyka-full-hd-turkce-dublajli-1080p-583.jpg',
    },
    {
        key: 7,
        name: 'Need For Speed',
        image: 'https://pics.filmaffinity.com/need_for_speed-821158567-large.jpg',
    }

];
const show_second =[
    {
        key: 7,
        name: 'The Walking Dead',
        image: 'http://image.tmdb.org/t/p/w396/vxuoMW6YBt6UsxvMfRNwRl9LtWS.jpg',
    },
    {
        key: 8,
        name: 'Prison Break',
        image: 'http://www.seriespapaya.com/uploads/Prison-Break20.jpg',
    },
    {
        key: 9,
        name: 'Lost',
        image: 'http://www.seriespapaya.com/uploads/Lost-(Perdidos)93.jpg',
    },
    {
        key: 10,
        name: 'Breaking Bad',
        image: 'http://www.caratulasylogos.com/sites/default/files/breaking_bad_2.jpg',
    },
    {
        key: 10,
        name: 'The 100',
        image: 'http://4.bp.blogspot.com/-KPQz9KMDI34/VCzSv08_cOI/AAAAAAAAOU8/acWLgEYTRn0/s1600/1002-seriesytv.jpg',
    },
    {
        key: 11,
        name: 'Spartacus',
        image: 'http://3.bp.blogspot.com/-EDeM3Kk0fnc/VDaAIqNYCTI/AAAAAAAAD_o/QQuY5rQNuvI/s1600/Ver%2BSpartacus%2B(2013).jpg',
    },
    {
        key: 12,
        name: 'Game of trones',
        image: 'https://vignette3.wikia.nocookie.net/gameofthrones/images/2/2c/Season_1_Poster.jpg',
    },
    {
        key: 13,
        name: 'Narcos',
        image: 'http://ocio10.es/wp-content/uploads/2015/08/Narcos-serie-sobre-Pablo-Escobar.jpg',
    },
    {
        key: 14,
        name: 'Arrow',
        image: 'https://vignette3.wikia.nocookie.net/arrow/images/4/45/Arrow_season_4_poster_-_Aim._Higher..png',
    },
]
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
        const newData= show_first.filter(function(item){
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
    _renderItem(item){
        return(
            <Image 
               key={item.key} 
               style={styles.image} 
               source={{uri: item.image}} 
            />
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