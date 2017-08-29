import React, { Component } from 'react';
import{Text,View,Image, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';
const {width} = Dimensions.get('window');
const Slider = props = props =>(
    <View style={styles.container}>
        <Image style={styles.image} source={props.uri} />
    </View>
)

const styles={
  container:{
      flex: 1,
      justifyContent: 'center',
  }, 
  image:{
      flex: 1,
      width
  }
}
export default class extends Component {
    constructor(props){
        super(props)
        this.state={
            imageSlider:[
                require('../Images/image1.png'),
                require('../Images/2.jpg'),
                require('../Images/3.jpg')
            ]
        }
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <Swiper
                    autoplay
                    height={200}
                >
                    {
                        this.state.imageSlider.map((item, i) => <Slider 
                            uri={item}
                            key={i}
                        />)
                    }
                </Swiper>
            </View>
        );
    }
}