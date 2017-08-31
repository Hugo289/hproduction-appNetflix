import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    Image,
    ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Orientation from 'react-native-orientation'
export default class Episodes extends Component {
    componentWillMount(){
        Orientation.lockToPortrait()
    }
    _renderEpisodes(){
        const {currentSeason} = this.props
        return this.props.episodes.filter(function(element){
            return element.season == currentSeason
        }).map((item, i) => {
            const img = item.image == null ? 'https://static.tvmaze.com/uploads/images/medium_landscape/76/190262.jpg': item.image.medium
            return (
                <View style={styles.video} key={i}>
                    <View style={styles.videoEpisode}>
                        <Image
                            style={styles.image}
                            source={{uri: img}}
                        >
                            <View  style={styles.buttonPlay}>
                                <TouchableWithoutFeedback>
                                    <View style={{backgroundColor: 'transparent'}}>
                                        <Icon 
                                            name='play-circle'
                                            size={50}
                                            color='#fff'
                                            style={styles.iconPlay}
                                        />
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        </Image>
                        <View style={styles.episodeName}>
                            <Text style={styles.text}>
                                {item.number}. {item.name}
                            </Text>
                            <Text style={styles.text}>
                                {item.runtime}
                            </Text>
                        </View>
                    </View>
                    <Text style={styles.summary}>{item.summary}</Text>
                </View>
            )
        })
    }
    render() {
        const {navigate} = this.props.navigation
        return (
            <View style={styles.container}>
                {this.props.season == 1 ? 
                <TouchableWithoutFeedback>
                    <View>
                        <Text> Season {this.props.currentSeason}</Text>
                    </View>
                </TouchableWithoutFeedback>
                :
                <TouchableWithoutFeedback onPress={() => navigate('EpisodePicker', {
                        getSeason: this.props.getSeason, seasons: this.props.season, currentSeason: this.props.currentSeason
                    })}>
                    <View style={styles.buttonWithIcon}>
                        <Text> Season {this.props.currentSeason}</Text>
                        <Icon 
                            name='chevron-down'
                            color='#fff'
                            size={10}
                        />
                    </View>
                </TouchableWithoutFeedback> 
               }
                {this._renderEpisodes()}
            </View>
        );
    }
}
const styles= StyleSheet.create({
    container:{
        backgroundColor: '#181818',
    },
    buttonWithIcon:{
        flexDirection: 'row'
    },
    image:{
        width: 150,
        height: 80,
        marginRight: 10,
    },
    buttonPlay:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    videoEpisode:{
        flexDirection:'row'
    },
    text:{
        color: '#fff'
    },
    summary:{
        color: 'grey',
        marginVertical: 10,
    },
    video:{
        marginHorizontal: 10,
    },
    episodeName:{
        justifyContent:'center'
    }
})