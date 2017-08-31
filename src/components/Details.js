import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight,
    TouchableWithoutFeedback,
    ScrollView,
    Dimensions,
    Share,
    Animated
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import TabEpisodes from './TabEpisodes'
import TextGradient from 'react-native-linear-gradient'
import Orientation from 'react-native-orientation'
const {width, height} = Dimensions.get('window')
export default class Details extends Component {
    constructor(props){
        super(props)
        this.state={
            measuresTitle: 0,
            measuresSeason: 0,
            scrollY: new Animated.Value(0),
            currentSeason: 1
        }
    }
    componentWillMount(){
        Orientation.lockToPortrait()
    }
    onShare(){
        Share.share({
            title: 'Designated Survivor',
            url: 'www.youtube.com',
            message: 'Awesome Tv Show'
        },{
            dialogTitle: 'Share this awesome content'
        })
    }
    getSeason(season){
        this.setState({
            currentSeason: season
        })
    }
    render() {
        console.log(this.state.currentSeason)
        const headerNameToggle=this.state.scrollY.interpolate({
            inputRange : [this.state.measuresTitle, this.state.measuresTitle + 1],
            outputRange: [0, 1]
        })
        const headerSeasonHide = this.state.scrollY.interpolate({
            inputRange: [this.state.measuresSeason -1, this.state.measuresSeason, this.state.measuresSeason + 1],
            outputRange: [-width, 0, 0]
        })
        const headerSeasonToggle = this.state.scrollY.interpolate({
            inputRange: [this.state.measuresSeason, this.state.measuresSeason + 1],
            outputRange: [0, 1]
        })
        const {params} = this.props.navigation.state
        const {name } = params.item
        const {thumbnail, cast, description, year, creator, numOfEpisodes, season, episodes} = params.item.details
        return (
           <View style={{flex: 1}}>
               <Animated.View style={[styles.header, {opacity: headerNameToggle}]}>
                   <Text style={styles.textHeader}>{name}</Text>
               </Animated.View>
               <Animated.View 
               style={
                   [
                       styles.header, 
                       {opacity: headerSeasonToggle, 
                       transform: [{translateY: 0}, {translateX: headerSeasonHide}]
                    }]}
               >
               <TouchableHighlight onPress={() => this.props.navigation.navigate('EpisodePicker',{
                        getSeason: this.getSeason.bind(this),
                        seasons: season,
                        currentSeason: this.state.currentSeason
                   })}>
                   <Text style={styles.textHeader}> Season {this.state.currentSeason}</Text>
               </TouchableHighlight>
               </Animated.View>
               
                <Animated.ScrollView 
                    scrollEventThrottle={1}
                    onScroll={
                        Animated.event(
                            [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}],
                            {useNativeDriver: true}
                        )
                    }
                    style={styles.container}
                >
                    <Image
                        style={styles.thumbnail}
                        source={{uri: thumbnail}}
                    >
                        <View style={styles.buttonPlay}>
                            <TouchableWithoutFeedback
                                onPress={() => this.props.navigation.navigate('VideoPlayer',  {title: name})}
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
                        <View 
                            onLayout={({nativeEvent}) => {
                                this.setState({
                                    measuresTitle: nativeEvent.layout.y
                                })
                            }}
                            style={styles.nameContainer}
                        >
                            <TextGradient 
                            colors={['transparent', '#181818', '#181818']}>
                                <Text style={[styles.text, styles.titleShow]}>{name}</Text>
                            </TextGradient>
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
                            <TouchableHighlight onPress={() => this.onShare()}>
                                <View style={styles.myShareIcon}>
                                    <Icon 
                                        style={styles.shareIcon}
                                        name='share-alt'
                                        color='grey'
                                        size={25}
                                    />
                                    <Text style={styles.text}>Share</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View
                        onLayout={({nativeEvent}) => {
                            this.setState({
                                measuresSeason: nativeEvent.layout.y + 5
                            })
                        }}
                    >
                        <TabEpisodes 
                            season={season}
                            getSeason={this.getSeason.bind(this)}
                            navigation={this.props.navigation}
                            data={episodes}
                            currentSeason={this.state.currentSeason}    
                        />
                    </View>
                </Animated.ScrollView>
           </View>
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
    },
    nameContainer:{
        backgroundColor: 'transparent',
    },
    titleShow:{
        fontSize: 35,
        paddingLeft: 10,
        marginBottom: 10,
        color: '#fff'
    },
    header:{
        backgroundColor: '#181818',
        paddingVertical: 10,
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
    },
    textHeader:{
        color: '#fff',
        fontSize: 20,
    }
})