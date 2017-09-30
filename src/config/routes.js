import Search from '../components/Search';
import HomeApp from '../app';
import Details from '../components/Details'
import VideoPlayer from '../components/VideoPlayerView'
import EpisodePicker from '../components/EpisodePicker'
import {StackNavigator} from 'react-navigation'
const Routes={    
        Home: {
            screen: HomeApp,
        },
        Search:{
            screen: Search
        },
        Details:{
            screen: Details,
        },
        VideoPlayer: {
            screen: VideoPlayer,
        },
        EpisodePicker: {
            screen: EpisodePicker,
        }
}
export default Routes;