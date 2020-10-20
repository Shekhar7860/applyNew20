import React, { Component } from 'react';
//Import React
import { Platform, StyleSheet, Text, View, ScrollView } from 'react-native';
import YouTube from 'react-native-youtube';
import firebase from 'react-native-firebase';

const Banner = firebase.admob.Banner;
const AdRequest = firebase.admob.AdRequest;

const advert = firebase.admob().interstitial('ca-app-pub-3476542526287283/5336778274')
const request = new AdRequest();
request.addKeyword('foobar');
class Screen extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0,
      duration: 0,
      isFullScreen: false,
      isLoading: true,
      paused: false,

      screenType: 'content',
    };
  }
 
  componentDidMount = () => {
    advert.loadAd(request.build());
 
    advert.on('onAdLoaded', () => {
      console.log('Advert ready to show.');
    });
    
  }
  
  exitFullScreen = () => {
    alert('Exit full screen');
  };
  
  enterFullScreen = () => {};
  
  onFullScreen = () => {
    if (this.state.screenType == 'content')
      this.setState({ screenType: 'cover' });
    else this.setState({ screenType: 'content' });
  };
  renderToolbar = () => (
    <View>
      <Text> toolbar </Text>
    </View>
  );
  onSeeking = currentTime => this.setState({ currentTime });
 
  render() {
    return (
      <View style={{flex:1}}>
      <ScrollView>
      <View style={{marginTop:20}}>
      <Text style={{textAlign:'center', marginBottom : 10}}>Here Are Successful persons who have earned a lot from modicare....check videos and get the insiration(यहां वे सफल व्यक्ति हैं, जिन्होंने बहुत कम आय अर्जित की है .... वीडियो देखें और आग्रह प्राप्त करें)</Text>
    <YouTube
  videoId="S40G85NSnc0" // The YouTube video ID
  // control playback of video with true/false
   // control whether the video should play in fullscreen or inline
  loop // control whether the video should loop when ended
  onReady={e => this.setState({ isReady: true })}
  onChangeState={e => this.setState({ status: e.state })}
  onChangeQuality={e => this.setState({ quality: e.quality })}
  onError={e => this.setState({ error: e.error })}
  style={{ alignSelf: 'stretch', height: 300 }}
  apiKey="AIzaSyD0nhmGVsfQ3JwVaJeSa-yRKovdzMrEvwM"
/>
</View>
<View style={{marginTop:20}}>
<Text style={{textAlign:'center', marginBottom : 10}}>Women Purchasing Car From Modicare (मोदीकेयर से कार खरीदती महिलाएं)</Text>
 <YouTube
  videoId="RpyxKvRuFgY" // The YouTube video ID
  // control playback of video with true/false
   // control whether the video should play in fullscreen or inline
  loop // control whether the video should loop when ended
  onReady={e => this.setState({ isReady: true })}
  onChangeState={e => this.setState({ status: e.state })}
  onChangeQuality={e => this.setState({ quality: e.quality })}
  onError={e => this.setState({ error: e.error })}
  style={{ alignSelf: 'stretch', height: 300 }}
   apiKey="AIzaSyBpWd-_IPS2tgOwZ62WalkMzOeHBHK6KBk"

  
/>
</View>
<View style={{marginTop:20}}>
<Text style={{textAlign:'center', marginBottom : 10}}>Success Story Of A HouseWife(एक हाउसवाइफ की सफलता की कहानी)</Text>
 <YouTube
  videoId="j96yC4Pbf3E" // The YouTube video ID
  // control playback of video with true/false
   // control whether the video should play in fullscreen or inline
  loop // control whether the video should loop when ended
  onReady={e => this.setState({ isReady: true })}
  onChangeState={e => this.setState({ status: e.state })}
  onChangeQuality={e => this.setState({ quality: e.quality })}
  onError={e => this.setState({ error: e.error })}
  style={{ alignSelf: 'stretch', height: 300 }}
  apiKey="AIzaSyCkP5eDNuY9riT87KESPInG7VbYUSiZZV0"
  
/>
</View>


</ScrollView>
</View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toolbar: {
    marginTop: 30,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  mediaPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'black',
  },
});
export default Screen;