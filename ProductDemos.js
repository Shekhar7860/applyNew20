import React, { Component } from 'react';
import {View,Text , TouchableOpacity, ScrollView} from 'react-native'
import YouTube from 'react-native-youtube';
export default class ProductDemos extends Component {
	
	takeMe = () => {
		alert("hiiii")
	}
 render () {
		return (<View
			 style={{flex:1}}>
			 <ScrollView>
			 <Text style={{textAlign:"center", margin:10}}>Modicare Products Are of wonderful quality.They provide outsanding results (मोडिकेयर उत्पाद अद्भुत गुणवत्ता के हैं। वे बाहरी परिणाम प्रदान करते हैं)  </Text>
       <Text style={{textAlign:"center", margin:10}}>There are very easy demos of around 100 products available in the market. (बाजार में लगभग 100 उत्पादों के बहुत आसान डेमो उपलब्ध हैं।) </Text>
			  <Text style={{textAlign:"center", margin:10}}>For Joining, you only need to give the pic of your adhaar card/or any other identification card (ज्वाइन करने के लिए, आपको केवल अपने एडहेर कार्ड / या किसी अन्य पहचान पत्र की तस्वीर देनी होगी)</Text>
              <Text style={{textAlign:"center", margin:10}}>One can easily perform demo of modicare products and do his/her business(व्यक्ति आसानी से मोडिकेयर उत्पादों का डेमो कर सकता है और अपना व्यवसाय कर सकता है)</Text>
			 <Text style={{textAlign:"center", marginTop:20}}>If you have any problem related to modicare, call/whatsapp at -+916394043883 (यदि आपको मोडिकेयर, कॉल / व्हाट्सएप से संबंधित कोई समस्या है - + 916394043883 पर)</Text>
			 <View style={{marginTop:10}}><Text style={{textAlign:"center", marginTop:20}}>if you dont know, how to modicare product demos, check this video (यदि आप नहीं जानते, कि उत्पाद डेमो को कैसे मॉडिफाई किया जाए, तो इस वीडियो को देखें)</Text>
      <Text style={{textAlign:'center', marginBottom : 10, marginTop:10}}>How To Modicare Product Demos (उत्पाद प्रदर्शन कैसे करें)</Text>
    <YouTube
  videoId="UurpaG7Mk-0" // The YouTube video ID
  // control playback of video with true/false
   // control whether the video should play in fullscreen or inline
  loop // control whether the video should loop when ended
  onReady={e => this.setState({ isReady: true })}
  onChangeState={e => this.setState({ status: e.state })}
  onChangeQuality={e => this.setState({ quality: e.quality })}
  onError={e => this.setState({ error: e.error })}
  style={{ alignSelf: 'stretch', height: 300 }}
  apiKey="AIzaSyBEV-Lj5Bt6kRE9ulZLir-lm6b5vXuuxuM"
/>
</View>
<View style={{marginTop:20}}>
<Text style={{textAlign:'center', marginBottom : 10}}>Modicare New Products 2020</Text>
 <YouTube
  videoId="0vgS5WzDTY4" // The YouTube video ID
  // control playback of video with true/false
   // control whether the video should play in fullscreen or inline
  loop // control whether the video should loop when ended
  onReady={e => this.setState({ isReady: true })}
  onChangeState={e => this.setState({ status: e.state })}
  onChangeQuality={e => this.setState({ quality: e.quality })}
  onError={e => this.setState({ error: e.error })}
  style={{ alignSelf: 'stretch', height: 300 }}
  apiKey="AIzaSyByq_EaxQPVTzOBDTok_LP7MQn8OoOBf0k"
  
/>
</View>
<View style={{marginTop:20}}>
<Text style={{textAlign:'center', marginBottom : 10}}>Modicare EnviroChip Demo</Text>
 <YouTube
  videoId="EXOEs0K8-wg" // The YouTube video ID
  // control playback of video with true/false
   // control whether the video should play in fullscreen or inline
  loop // control whether the video should loop when ended
  onReady={e => this.setState({ isReady: true })}
  onChangeState={e => this.setState({ status: e.state })}
  onChangeQuality={e => this.setState({ quality: e.quality })}
  onError={e => this.setState({ error: e.error })}
  style={{ alignSelf: 'stretch', height: 300 }}
  apiKey="AIzaSyB2IGYbtz-iTLj1Q0fjGW2uYre6hdAhgmM"
  
/>
</View>
 </ScrollView>
			 	</View>)
	}
}