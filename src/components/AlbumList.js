import React, { Component } from 'react';
import axios from 'axios';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = {
    albumList: []
  };

  componentDidMount() {
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(results => {
        this.setState({ albumList: results.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  renderAlbums() {
    const { albumList } = this.state;

    return albumList.map(album => <AlbumDetail album={album} />);
  }

  render() {
    return <ScrollView>{this.renderAlbums()}</ScrollView>;
  }
}

export default AlbumList;
