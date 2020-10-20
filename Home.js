import React, { Component } from 'react';
import {View,Text , TouchableOpacity} from 'react-native'
import firebase from 'react-native-firebase';

const Banner = firebase.admob.Banner;
const AdRequest = firebase.admob.AdRequest;

const advert = firebase.admob().interstitial('ca-app-pub-3476542526287283/5336778274')
const request = new AdRequest();
request.addKeyword('foobar');
export default class Home extends Component {
	
	takeMe = () => {
		// alert("hiiii")
	}
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
  unitId={"ca-app-pub-3476542526287283/4101494326"}
  request={request.build()}
  onAdLoaded={() => {
    console.log('Advert loaded');
  }} />
			 <TouchableOpacity style={{width:"100%", flexDirection : 'row', marginTop:30}}>
			 <View style={{width:"5%"}}></View>
			 <TouchableOpacity onPress={() => this.props.navigation.navigate("Joining")} style={{width:"27%", height : 80, borderWidth:1, justifyContent :"center"}}><Text style={{fontSize : 12, textAlign:"center"}}> Modicare Joining{"\n"}मोडिकारे जुड़ना</Text></TouchableOpacity>
			 <View style={{width:"5%"}}></View>
			 <TouchableOpacity onPress={() => this.props.navigation.navigate("Benefits")} style={{width:"27%", height : 80, borderWidth:1, justifyContent :"center"}}><Text style={{fontSize : 12, textAlign:"center"}}> Modicare Benefits {"\n"}न्यूनाधिक लाभ</Text></TouchableOpacity>
			 <View style={{width:"5%"}}></View>
			 <TouchableOpacity onPress={() => this.props.navigation.navigate("Sponsoring")} style={{width:"27%", height : 80, borderWidth:1, justifyContent :"center"}}><Text style={{fontSize : 12, textAlign:"center"}}> Modicare Sponsoring{"\n"}मोडिकेयर स्पोंसरिंग</Text></TouchableOpacity>


			 </TouchableOpacity>

			 <TouchableOpacity style={{width:"100%", flexDirection : 'row', marginTop:20}}>
			 <View style={{width:"5%"}}></View>
			 <TouchableOpacity onPress={() => this.props.navigation.navigate("Seminar")} style={{width:"27%", height : 80, borderWidth:1, justifyContent :"center"}}><Text style={{fontSize : 12, textAlign:"center"}}> Modicare Seminars{"\n"}मोडिकेयर सेमिनार</Text></TouchableOpacity>
			 <View style={{width:"5%"}}></View>
			 <TouchableOpacity onPress={() => this.props.navigation.navigate("ProductDemos")} style={{width:"27%", height : 80, borderWidth:1, justifyContent :"center"}}><Text style={{fontSize : 12, textAlign:"center"}}> Modicare Product Demos{"\n"}Modicare उत्पाद प्रदर्शन</Text></TouchableOpacity>
			 <View style={{width:"5%"}}></View>
			 <TouchableOpacity style={{width:"27%", height : 80, borderWidth:1, justifyContent :"center"}}><Text style={{fontSize : 12, textAlign:"center"}}> Buying Modicare Products{"\n"}Modicare उत्पाद खरीदना</Text></TouchableOpacity>


			 </TouchableOpacity>
			  <TouchableOpacity style={{width:"100%", flexDirection : 'row', marginTop:20}}>
			 <View style={{width:"5%"}}></View>
			 <TouchableOpacity onPress={() => this.props.navigation.navigate("Offers")} style={{width:"27%", height : 80, borderWidth:1, justifyContent :"center"}}><Text style={{fontSize : 12, textAlign:"center"}}> Modicare Offers{"\n"}मोडिकेयर ऑफर</Text></TouchableOpacity>
			 <View style={{width:"5%"}}></View>
			 <TouchableOpacity style={{width:"27%", height : 80, borderWidth:1, justifyContent :"center"}}><Text style={{fontSize : 12, textAlign:"center"}}> Modicare Leaders{"\n"}मोदीकेयर नेता</Text></TouchableOpacity>
			 <View style={{width:"5%"}}></View>
			 <TouchableOpacity onPress={() => this.props.navigation.navigate("Screen1")} style={{width:"27%", height : 80, borderWidth:1, justifyContent :"center"}}><Text style={{fontSize : 12, textAlign:"center"}}> Modicare Success Stories{"\n"}मोडिकेयर सक्सेस स्टोरीज</Text></TouchableOpacity>


			 </TouchableOpacity>
			  <TouchableOpacity style={{width:"100%", flexDirection : 'row', marginTop:20}}>
			 <View style={{width:"5%"}}></View>
			 <TouchableOpacity onPress={() => this.props.navigation.navigate("Complaints")} style={{width:"27%", height : 80, borderWidth:1, justifyContent :"center"}}><Text style={{fontSize : 12, textAlign:"center"}}> Modicare Complaints{"\n"}मोडिकेयर शिकायतें</Text></TouchableOpacity>
			 <View style={{width:"5%"}}></View>
			 <TouchableOpacity style={{width:"27%", height : 80, borderWidth:1, justifyContent :"center"}}><Text style={{fontSize : 12, textAlign:"center"}}> Modicare Business Plan{"\n"}मोदीकेयर बिजनेस प्लान</Text></TouchableOpacity>
			 <View style={{width:"5%"}}></View>
			 <TouchableOpacity style={{width:"27%", height : 80, borderWidth:1, justifyContent :"center"}}><Text style={{fontSize : 12, textAlign:"center"}}> Modicare Elligibility/Termination{"\n"}मोडिकेयर पात्रता / समाप्ति</Text></TouchableOpacity>


			 </TouchableOpacity>

			 <Text style={{textAlign:"center", marginTop:20}}>If you have any problem related to modicare, call/whatsapp at -+916394043883 (यदि आपको मोडिकेयर, कॉल / व्हाट्सएप से संबंधित कोई समस्या है - + 916394043883 पर)</Text>

			 	</View>)
	}
}