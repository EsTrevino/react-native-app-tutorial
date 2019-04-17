import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = props => {
  return (
    <Card>
      <CardSection
        style={{ flexDirection: 'column', justifyContent: 'flex-start' }}
      >
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 10,
            marginRight: 10
          }}
        >
          <Image
            style={{ height: 50, width: 50, borderRadius: 10 }}
            source={{ uri: props.album.thumbnail_image }}
          />
        </View>
        <View
          style={{ flexDirection: 'column', justifyContent: 'space-around' }}
        >
          <Text style={styles.headerText}>{props.album.title}</Text>
          <Text>{props.album.artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
          style={{
            height: 300,
            flex: 1,
            width: null
          }}
          source={{ uri: props.album.image }}
        />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(props.album.url)}>
          Buy Now
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerText: {
    fontSize: 18
  }
};

export default AlbumDetail;
