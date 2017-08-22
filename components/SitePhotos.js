
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import Carousel from 'react-native-looped-carousel';
import { Actions } from 'react-native-router-flux';
import { TRANS } from '../styles/colors'

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  caption: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 1000,
    padding: 4,
    backgroundColor: TRANS,
    width: width,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  credit: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1000,
    padding: 4,
    backgroundColor: TRANS,
    width: width,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  floatingText: {
    color: 'white',
    fontSize: 13
  },
  infoContainer: {
    position: 'absolute',
    bottom: 44,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
  pageInfoTextStyle: {
    color: 'white'
  }
});

export default class SitePhotos extends Component {

  constructor(...args) {
    super(...args);

    const size = this.setSize({width});

    this.state ={
      size
    };

    this.renderImages = this.renderImages.bind(this);
    this._onPageChange = this._onPageChange.bind(this);
    this._onClickImage = this._onClickImage.bind(this);
  }

  componentDidMount() {
    const { caption, credit } = this.props.photos[0];
    this.setState({ caption, credit });
  }

  setSize({width}) {
    return {
      width,
      height: width * 0.75,
    };
  }

  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setSize(layout);
  }

  _onPageChange(i) {
    const { caption, credit } = this.props.photos[i];
    this.setState({ caption, credit });
  }

  _onClickImage(fullUrl) {
    Actions.sitePhotoDetail({fullUrl})
  }

  renderImages() {
    return this.props.photos.map(({previewUrl, fullUrl}, i) =>
      <TouchableHighlight key={i} onPress={ () => this._onClickImage(fullUrl) }>
       <Image style={this.state.size} source={ previewUrl } />
      </TouchableHighlight>)
  }

  render() {
    return (
      <View style={this.state.size}>
        <View style={styles.caption}>
          <Text style={styles.floatingText}>
            {this.state.caption }
          </Text>
        </View>
        <Carousel
          pageInfo
          pageInfoTextStyle={ styles.pageInfoTextStyle }
          pageInfoBackgroundColor={ TRANS }
          pageInfoBottomContainerStyle={ styles.infoContainer }
          delay={3000}
          style={this.state.size}
          autoplay
          onLayout={ this._onLayoutDidChange }
          onAnimateNextPage={ this._onPageChange }
        >
          { this.renderImages() }
        </Carousel>
        { this.state.credit ?
          <View style={styles.credit}>
            <Text style={styles.floatingText}>
              { this.state.credit }
            </Text>
          </View> : <View></View>
        }
      </View>
    );
  }
}
