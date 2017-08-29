import React, { Component } from 'react';
import {Text, View, ScrollView, StyleSheet, FlatList, Image} from 'react-native';
import Slider from '../components/Slider';
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

export default class List extends Component {
    _renderItem(item){
        return(
            <Image style={{width: 140, height: 200}}  source={{uri: item.image}}/>
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
                        data={show_first}
                    />
                </View>
                <View>
                    <Text style={styles.text}>My Series List</Text>
                    <FlatList 
                        horizontal
                        ItemSeparatorComponent={ () => <View style={ { width: 5, height: 10, } } /> }
                        renderItem={({item}) => this._renderItem(item)}
                        data={show_second}
                    />
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    text:{
        color: '#fff',
    }
})