import React from 'react';
import { Text, View, Image } from 'react-native';

//Reusable Component 'Card' and 'Card Section'
import Card from './card';
import CardSection from './cardSection';
import Button  from './button';

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image } = album;
    const { thumbnailStyle, headerStyleContent, thumbnailContainerStyle, headerStyle, imageStyle } = styles;
    // console.log('Album');
    // console.log(album.thumbnail_image);

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                 <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
                </View>
                <View style={headerStyleContent}>
                 <Text style={headerStyle}>{title}</Text>
                 <Text>{artist}</Text>
                </View>
              </CardSection>
              <CardSection>
                <Image style={imageStyle} source={{ uri: image }} />    
              </CardSection>
              <CardSection>
                  <Button />
              </CardSection>
        </Card>
    );
};

const styles = {
    headerStyleContent: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginLeft: 10
    },
    headerStyle: {
      fontSize: 18  
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    } 
};

export default AlbumDetail;
