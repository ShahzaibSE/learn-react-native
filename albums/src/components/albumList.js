import  React, {Component} from 'react';
import { ScrollView } from 'react-native';

//Library to make http request.
import axios from 'axios';

//Album Detail Component.
import AlbumDetail from './albumDetail';


/*const AlbumList = () => {
    return(
        <View>
            <Text>Album List!!!</Text>
        </View>
    )
};*/

class AlbumList extends Component {

    // state = {}; //This is empty state
    state = {    //This is state which contains an empty list.
        albums: []
    }

    componentWillMount() {
        console.log('Component will mount');

        axios.get('https://rallycoding.herokuapp.com/api/music_albums').then((resp) => {
            console.log('Music album list');
            console.log(resp);
            console.log('State with album list'); //Album list initially empty

            //Setting state.
            this.setState({ albums: resp.data });
        });
    }

    componentDidMount() {
        console.log('Component did mount');
    }

    renderAlbums() {
       return this.state.albums.map((album) => {
           console.log(album);
        //    return <Text key={album.title}>{album.title}</Text>;
           return <AlbumDetail key={album.title} album={album} />;
       });
    }

    render() {
        console.log('Rendering component');
        console.log(this.state);

        return (
        <ScrollView>
         {this.renderAlbums()}
        </ScrollView>
        );
    }

}

export default AlbumList;
