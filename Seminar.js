import React, { Component } from 'react';
import {View,Text , TouchableOpacity, ScrollView} from 'react-native'
import YouTube from 'react-native-youtube';
import firebase from 'react-native-firebase';

const Banner = firebase.admob.Banner;
const AdRequest = firebase.admob.AdRequest;

const advert = firebase.admob().interstitial('ca-app-pub-3476542526287283/9084451590')
const request = new AdRequest();
request.addKeyword('foobar');

export default class Seminar extends Component {
	
  componentDidMount = () => {
    advert.loadAd(request.build());
 
    advert.on('onAdLoaded', () => {
      console.log('Advert ready to show.');
    });
    
  }
 render () {
		return (<View
			 style={{flex:1}}>
			 <ScrollView>
			 <Text style={{textAlign:"center", margin:10}}>Modicare Seminars/Meetings are organised in all parts of india(Modicare सेमिनार / बैठकें भारत के सभी हिस्सों में आयोजित की जाती हैं)</Text>
              <Text style={{textAlign:"center", margin:10}}>Well, you can also join modicare by yourself by using Id - 71182487 through www.modicare.com (खैर, आप www.modicare.com के माध्यम से Id - 71182487 का उपयोग करके भी अपने आप को जोड़ सकते हैं)</Text>
              <Text style={{textAlign:"center", margin:10}}>For checking modicare meetings/seminars, you can check modicare app or watch this video(मोडिकेयर मीटिंग / सेमिनार की जाँच के लिए, आप मोडिकेयर ऐप की जाँच कर सकते हैं या इस वीडियो को देख सकते हैं)</Text>
                <Text style={{textAlign:"center", margin:10}}>If, you are not educated, you can join modicare by sending the pic of your adhaar card on +919646407363 </Text>
              
			 <Text style={{textAlign:"center", marginTop:20}}>If you have any problem related to modicare, call/whatsapp at -+916394043883 (यदि आपको मोडिकेयर, कॉल / व्हाट्सएप से संबंधित कोई समस्या है - + 916394043883 पर)</Text>
			 <View style={{marginTop:20}}>
      <Text style={{textAlign:'center', marginBottom : 10}}>Check Modicare Meetings from app (ऐप से मोडिकेयर मीटिंग्स की जाँच करें)</Text>
    <YouTube
  videoId="77IJ1apC0sw" // The YouTube video ID
  // control playback of video with true/false
   // control whether the video should play in fullscreen or inline
  loop // control whether the video should loop when ended
  onReady={e => this.setState({ isReady: true })}
  onChangeState={e => this.setState({ status: e.state })}
  onChangeQuality={e => this.setState({ quality: e.quality })}
  onError={e => this.setState({ error: e.error })}
  style={{ alignSelf: 'stretch', height: 300 }}
  apiKey="AIzaSyDluHy8vwk34XL1wKQK9_J4X6cT-DOERTE"
/>
</View>
 </ScrollView>
			 	</View>)
	}
}