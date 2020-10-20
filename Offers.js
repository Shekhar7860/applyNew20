import React, { Component } from 'react';
import {View,Text , TouchableOpacity, ScrollView} from 'react-native'
import YouTube from 'react-native-youtube';
import firebase from 'react-native-firebase';

const Banner = firebase.admob.Banner;
const AdRequest = firebase.admob.AdRequest;

const advert = firebase.admob().interstitial('ca-app-pub-3476542526287283/1938257612')
const request = new AdRequest();
request.addKeyword('foobar');

export default class Offers extends Component {
	
	  componentDidMount = () => {
    advert.loadAd(request.build());
        
  
advert.on('onAdLoaded', () => {
  console.log('Advert ready to show.');
});

setTimeout(() => {
  if (advert.isLoaded()) {
    advert.show();
  } else {
  console.log('error occured')
  }
}, 1000)
  }
 render () {
		return (<View
			 style={{flex:1}}>
       <Banner
       style={{alignSelf:'center',marginLeft:0, marginTop:20}}
    size={"SMALL_BANNER"}
  unitId={"ca-app-pub-3476542526287283/9242032563"}
  request={request.build()}
  onAdLoaded={() => {
    console.log('Advert loaded');
  }} />      
			 <ScrollView>
        			 <Text style={{textAlign:"center", margin:10}}>Every month person gets repurchase offer from modicare till 23rd (हर महीने व्यक्ति को 23 तारीख तक मोडिकेयर से पुनर्खरीद का प्रस्ताव मिलता है) </Text>
        <Text style={{textAlign:"center", margin:10}}>In That He/she can get free products,loyalty products and other company features(उस में वह / वह नि: शुल्क उत्पादों, वफादारी उत्पादों और अन्य कंपनी सुविधाओं को प्राप्त कर सकते हैं)</Text>
			  <Text style={{textAlign:"center", margin:10}}>For Joining, you only need to give the pic of your adhaar card/or any other identification card (ज्वाइन करने के लिए, आपको केवल अपने एडहेर कार्ड / या किसी अन्य पहचान पत्र की तस्वीर देनी होगी)</Text>
              <Text style={{textAlign:"center", margin:10}}>Every Month, you can also get a washing machine, if you became out of 10 lucky contendors for DUS KA DUM(हर महीने, आप वॉशिंग मशीन भी प्राप्त कर सकते हैं, यदि आप DUS KA DUM के लिए 10 भाग्यशाली दावेदारों में से बने)</Text>
   			 <View style={{marginTop:20}}>
      <Text style={{textAlign:'center', marginBottom : 10}}>How To Modicare Joining (कैसे जुड़ें मोडिकेयर)</Text>
    <YouTube
  videoId="mEjfjJKESos" // The YouTube video ID
  // control playback of video with true/false
   // control whether the video should play in fullscreen or inline
  loop // control whether the video should loop when ended
  onReady={e => this.setState({ isReady: true })}
  onChangeState={e => this.setState({ status: e.state })}
  onChangeQuality={e => this.setState({ quality: e.quality })}
  onError={e => this.setState({ error: e.error })}
  style={{ alignSelf: 'stretch', height: 300 }}
  apiKey="AIzaSyBg2DcCsjVMKpyXSRfFcC6RNCJp3iNeqwQ"
/>
</View>
 </ScrollView>
			 	</View>)
	}
}