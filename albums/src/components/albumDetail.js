import React from 'react';
import { Text, View, Image } from 'react-native';

//Reusable Component 'Card' and 'Card Section'
import Card from './card';
import CardSection from './cardSection';

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image } = album;
    const { thumnbnailStyle, headerStyleContent } = styles;
    console.log('Album');
    console.log(album.thumbnail_image);

    return (
        <Card>
            <CardSection>
                <View>
                 <Image style={thumnbnailStyle} source={{ uri: thumbnail_image }} />
                </View>
                <View style={headerStyleContent}>
                 <Text>{title}</Text>
                 <Text>{artist}</Text>
                </View>
              </CardSection>
        </Card>
    );
};

const styles = {
    headerStyleContent: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumnbnailStyle: {
        height: 50,
        width: 50
    } 
};

export default AlbumDetail;
