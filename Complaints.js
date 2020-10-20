import React, { Component } from 'react';
import {View,Text , TouchableOpacity, ScrollView} from 'react-native'
import firebase from 'react-native-firebase';
const advert2 = firebase.admob().rewarded('ca-app-pub-3476542526287283/2361230769')
const advert = firebase.admob().interstitial('ca-app-pub-3476542526287283/2361230769')
const Banner = firebase.admob.Banner;
const AdRequest = firebase.admob.AdRequest;
const request = new AdRequest();
request.addKeyword('foiii');
export default class Complaints extends Component {
	
	componentDidMount = () => {
    advert.loadAd(request.build());
    advert2.loadAd(request.build())

    advert2.on('onAdLoaded', () => {
       console.log('Advert2 ready to show.')
    })
    
    advert2.show()

advert.on('onAdLoaded', () => {
  console.log('Advert ready to show.');
});

setTimeout(() => {
  if (advert.isLoaded()) {
    console.log('working')
    advert.show();
  } else {
    console.log('error occured')
  }
}, 1000);
  }
 render () {
		return (<View
			 style={{flex:1}}>
			   <Banner
       style={{alignSelf:'center',marginLeft:0, marginTop:20}}
    size={"SMALL_BANNER"}
  unitId={"ca-app-pub-3476542526287283/3606562507"}
  request={request.build()}
  onAdLoaded={() => {
    console.log('Advert loaded');
  }} /><Text style={{marginTop:0, textAlign:"center", margin:5 }}>If you have any Problem/complaint related to modicare, you can call on azaadi call center - 180030012999 or send email on support-modicare@modi.com.{"\n"}(यदि आपको मोडिकारे से संबंधित कोई समस्या / शिकायत है, तो आप अजादी कॉल सेंटर पर कॉल कर सकते हैं - 180030012999 oe पर ईमेल भेजें- support-modicare@modi.com) </Text>
               <ScrollView>
       <Text style={{textAlign:"center", margin:10}}>Joining Modicare Is Absolutely Free(मोडिकेयर में शामिल होना बिल्कुल मुफ्त है) </Text>
        <Text style={{textAlign:"center", margin:10}}>For Joining, you only need to give the pic of your adhaar card/or any other identification card (ज्वाइन करने के लिए, आपको केवल अपने एडहेर कार्ड / या किसी अन्य पहचान पत्र की तस्वीर देनी होगी)</Text>
              <Text style={{textAlign:"center", margin:10}}>Well, you can also join modicare by yourself by using Id - 71182487 through www.modicare.com (खैर, आप www.modicare.com के माध्यम से Id - 71182487 का उपयोग करके भी अपने आप को जोड़ सकते हैं)</Text>
                <Text style={{textAlign:"center", margin:10}}>If, you are not educated, you can join modicare by sending the pic of your adhaar card on +919646407363 </Text>
       <Text style={{textAlign:"center", marginTop:20}}>If you have any problem related to modicare, call/whatsapp at -+916394043883 (यदि आपको मोडिकेयर, कॉल / व्हाट्सएप से संबंधित कोई समस्या है - + 916394043883 पर)</Text>
       <View style={{marginTop:20}}>
      
   </View>
 </ScrollView>

			 	</View>)
	}
}