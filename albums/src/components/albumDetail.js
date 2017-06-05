import React from 'react';
import { Text, View } from 'react-native';

//Reusable Component 'Card' and 'Card Section'
import Card from './card';
import CardSection from './cardSection';

const AlbumDetail = (props) => {
    return (
        <Card>
            <CardSection>
              <Text>{props.album.title}</Text>
              </CardSection>
        </Card>
    );
};

export default AlbumDetail;
