'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
//	Image
} from 'react-native';
import Camera from 'react-native-camera';
import Image from 'react-native-transformable-image';

const {width, height} = Dimensions.get('window');

const uri1 = '';
const uri2 = '';

const images = {
  '895' :'',
  '404' : 'TAG404-cropped.png'
}

export default class App extends Component<{}> {

  constructor(props) {
    super(props);

    this.state = {
      uri: uri1
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
			    <Image
            source={require('./img/' + images['404'])
            pixels={{width: 1043, height: 829}}
            style={{width: width, height: height}}
            } />
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE!]</Text>


        </Camera>
      </View>
    );
  }

  takePicture() {
    const options = {};
    //options.location = ...
    this.camera.capture({metadata: options})
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});
