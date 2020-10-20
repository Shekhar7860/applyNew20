import React, { Component } from 'react';
import {View,Text , TouchableOpacity, ScrollView} from 'react-native'
import YouTube from 'react-native-youtube';
export default class Joining extends Component {
	
	takeMe = () => {
		alert("hiiii")
	}
 render () {
		return (<View
			 style={{flex:1}}>
			 <ScrollView>
			 <Text style={{textAlign:"center", margin:10}}>Joining Modicare Is Absolutely Free(मोडिकेयर में शामिल होना बिल्कुल मुफ्त है) </Text>
			  <Text style={{textAlign:"center", margin:10}}>For Joining, you only need to give the pic of your adhaar card/or any other identification card (ज्वाइन करने के लिए, आपको केवल अपने एडहेर कार्ड / या किसी अन्य पहचान पत्र की तस्वीर देनी होगी)</Text>
              <Text style={{textAlign:"center", margin:10}}>Well, you can also join modicare by yourself by using Id - 71182487 through www.modicare.com (खैर, आप www.modicare.com के माध्यम से Id - 71182487 का उपयोग करके भी अपने आप को जोड़ सकते हैं)</Text>
                <Text style={{textAlign:"center", margin:10}}>If, you are not educated, you can join modicare by sending the pic of your adhaar card on +919646407363 </Text>
			 <Text style={{textAlign:"center", marginTop:20}}>If you have any problem related to modicare, call/whatsapp at -+916394043883 (यदि आपको मोडिकेयर, कॉल / व्हाट्सएप से संबंधित कोई समस्या है - + 916394043883 पर)</Text>
			 <View style={{marginTop:20}}>
      <Text style={{textAlign:'center', marginBottom : 10}}>How To Modicare Joining (कैसे जुड़ें मोडिकेयर)</Text>
    <YouTube
  videoId="hsN2UCEo2Kw" // The YouTube video ID
  // control playback of video with true/false
   // control whether the video should play in fullscreen or inline
  loop // control whether the video should loop when ended
  onReady={e => this.setState({ isReady: true })}
  onChangeState={e => this.setState({ status: e.state })}
  onChangeQuality={e => this.setState({ quality: e.quality })}
  onError={e => this.setState({ error: e.error })}
  style={{ alignSelf: 'stretch', height: 300 }}
  apiKey="AIzaSyDhLtGZ-BVdCLx222B9AAAx4hDN7dbtIic"
/>
</View>
 </ScrollView>
			 	</View>)
	}
}