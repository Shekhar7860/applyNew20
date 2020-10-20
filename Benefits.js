import React, { Component } from 'react';
import {View,Text , TouchableOpacity, ScrollView} from 'react-native'
import YouTube from 'react-native-youtube';
export default class Benefits extends Component {
	
	takeMe = () => {
		alert("hiiii")
	}
 render () {
		return (<View
			 style={{flex:1}}>
			 <ScrollView>
			 <Text style={{textAlign:"center", margin:10}}>After Joining Modicare, you can get </Text>
			  <Text style={{textAlign:"center", margin:10}}>1. 10-20% of Discount On Every Product</Text>
            <Text style={{textAlign:"center", margin:10}}>2. For Every 1000 purchase, you can 10% of products free. e.g On 1000, you will get 100rs of product free from company, on 2000, worth 200rs product and on 3000 rupees 300 product.</Text>

                <Text style={{textAlign:"center", margin:10}}>3. On Every Modicare product, you will get 25 days of money back guarantee</Text>
                 <Text style={{textAlign:"center", margin:10}}>4. After Joining, you can do your business and earn car fund, travel fund, house fund and unlimited income from modicare</Text>
			  <Text style={{textAlign:"center", margin:10}}>5. If you purchase modicare minimum of 2500rs continuously for 6 months, you will free products of approx 2500rs for 7th month</Text>
            <Text style={{textAlign:"center", margin:10}}>6. If you purchase modicare minimum of 2500rs continuously for 12 months, you will free products of approx 5000rs for 13th month</Text>


			 <View style={{marginTop:20}}>
      <Text style={{textAlign:'center', marginBottom : 10}}>How To Modicare Joining (कैसे जुड़ें मोडिकेयर)</Text>
    <YouTube
  videoId="aw-Vk6drbig" // The YouTube video ID
  // control playback of video with true/false
   // control whether the video should play in fullscreen or inline
  loop // control whether the video should loop when ended
  onReady={e => this.setState({ isReady: true })}
  onChangeState={e => this.setState({ status: e.state })}
  onChangeQuality={e => this.setState({ quality: e.quality })}
  onError={e => this.setState({ error: e.error })}
  style={{ alignSelf: 'stretch', height: 300 }}
  apiKey="AIzaSyB1c4c48HCSU_tMN81WDvlw1CJtKnel7xQ"
/>
</View>
 </ScrollView>
			 	</View>)
	}
}