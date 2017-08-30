import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight,
    TouchableWithoutFeedback,
    ScrollView,
    Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import TabEpisodes from './TabEpisodes'
const {width, height} = Dimensions.get('window')
export default class Details extends Component {
    render() {
        const {name } = this.props.navigation.state.params.item
        const {thumbnail, cast, description, year, creator, numOfEpisodes, season} = this.props.navigation.state.params.item.details
        return (
            <ScrollView style={styles.container}>
                <Image
                    style={styles.thumbnail}
                    source={{uri: thumbnail}}
                >
                    <View style={styles.buttonPlay}>
                        <TouchableWithoutFeedback
                            onPress={() => alert(1)}
                        >
                            <View>
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
                <View style={styles.descriptionContainer}>
                    <View style={styles.subtitle}>
                        <Text style={[styles.text,  styles.light, styles.subTitleText]}>{year}</Text>
                        <Text style={[styles.text,  styles.light, styles.subTitleText]}>{numOfEpisodes}</Text>
                        <Text style={[styles.text,  styles.light, styles.subTitleText]}>{season}</Text>
                    </View>
                    <View style={styles.description}>
                        <Text style={[styles.text,]}>{description}</Text>
                    </View>
                    <Text style={[styles.text]}>Cast: {cast}</Text>
                    <Text style={[styles.text]}>Creator: {creator}</Text>
                    <View style={styles.shareListIcons}>
                        <View style={styles.myListIcon}>
                            <Ionicons 
                                name='md-checkmark'
                                style={styles.listIcon}
                                color='grey'
                                size={25}
                            />
                            <Text style={styles.text}>My List</Text>
                        </View>
                        <View style={styles.myShareIcon}>
                            <Icon 
                                style={styles.shareIcon}
                                name='share-alt'
                                color='grey'
                                size={25}
                            />
                            <Text style={styles.text}>Share</Text>
                        </View>
                    </View>
                </View>
                <TabEpisodes />
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#181818',
    },
    thumbnail:{
        width: width,
        height: 200
    },
    buttonPlay:{
        justifyContent: 'center',
        flex:1,
        alignItems: 'center',
    },
    iconPlay:{
        opacity: 0.4,
        backgroundColor: 'transparent',
    },
    descriptionContainer:{
        paddingHorizontal: 20,

    },
    subtitle:{
        flexDirection: 'row'
    },
    subTitleText:{
        marginRight: 20
    },
    text:{
        color: '#b3b3b3',
        fontSize: 16
    },
    shareListIcons:{
        flexDirection:'row',
        marginVertical: 30,
    },
    listIcon: {
        height: 25
    },
    shareIcon:{
        height: 25,
    },
    myListIcon:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 40,
    },
    myShareIcon:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    description: {
        marginVertical: 10,
    },
    light:{
        fontWeight: '600',
    }

})