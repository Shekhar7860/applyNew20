import React, {Component} from 'react';
import {Platform, Text, View, TextInput, Alert, Image,KeyboardAvoidingView,  ImageBackground, TouchableOpacity, StatusBar, ScrollView, TouchableNativeFeedback} from 'react-native';
import styles from './styles.js';
import firebase from 'react-native-firebase';
import Spinner from 'react-native-loading-spinner-overlay';
const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0

import Icon from 'react-native-vector-icons/FontAwesome';
const Banner = firebase.admob.Banner;
const AdRequest = firebase.admob.AdRequest;
const request = new AdRequest();
request.addKeyword('foobar');
import Service from './Service';

export default class ViewGPA extends Component {

  constructor(props){
    super(props);
    this.state = { 
      username:'',
      password:'',
      mobile:'',
      userData : {},
      visble: false,
      cardheight:300
    }
       service = new Service();

  }

  componentDidMount = () => {
   if(this.props.navigation.state.params)
    {
     console.log(this.props.navigation.state.params, 'sfsfsffs')
     this.setState({userData : this.props.navigation.state.params.userData})
    }
     service.getUserData('userData').then((res) => {
      console.log('localData', res)
      var data = JSON.parse(res);
      console.log('parsed Data', data)
      this.setState({ name:data.name})
     
      })
  }
 
  goBack = () =>{
    this.props.navigation.navigate('Thanks')
   }

   signUp = () => 
   {
    this.props.navigation.navigate('Register')
   }
  
  render() {
    return (
    
    
      <KeyboardAvoidingView style={{flex : 1}} behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>
     <Spinner visible={this.state.visible} color='#00ff00' tintColor='#00ff00' animation={'fade'} cancelable={false} textStyle={{ color: '#FFF' }} />
              <TouchableOpacity onPress={ () =>  this.goBack()}>
                <Image  style={{tintColor : 'black', marginLeft : 20, marginTop : 20}} source={require('../images/back.png')}/>
              </TouchableOpacity>
                
                
                <ScrollView style={{height :500}}>
                <View style={{ marginTop:30, alignSelf:'center', width : '75%', flex :1 }}>
                <Text style={{...styles.textSize}}>Hello, <Text style={styles.boldFont}>{this.state.name}</Text></Text>
                <Text style={styles.textSize}>Thanks For connection us for MBBS IN BANGLADESH. Please see the GPA Result </Text>
                 <Text style={{...styles.textSize, marginTop:20}}><Text style={styles.boldFont}>Your Class 10/SSC/X/O Level GPA</Text> : {this.state.userData.round_gpa1} </Text>
                 <Text style={styles.textSize}><Text style={styles.boldFont}>Your Class 12/HSC/XII/A Level GPA </Text> : {this.state.userData.round_gpa2}</Text>
                 <Text style={styles.textSize}><Text style={styles.boldFont}>Your Total GPA</Text> : {this.state.userData.round_total_gpa} </Text>
                 <Text style={styles.textSize}><Text style={styles.boldFont}>Eligibilty criteria match</Text> : {this.state.userData.result_gpa}</Text>
                 <Text style={{...styles.boldFont, ...styles.textSize, marginTop:20}}>Feel free to contact us for Admission Assistance on the contact details provided below :  </Text>

                 <View style={styles.bottomContent}>
                 <View style={{width : '97%', alignSelf : 'center'}}>
                 <Text style={styles.thanksTextColor}>Contact Us</Text>
                 <Text style={styles.thanksTextColor}>Smile Education Consultancy</Text>
                  <Text style={styles.thanksTextColor}>Address : 4, Santoshpur Lake West Road Arambagh</Text>
                  <Text style={styles.thanksTextColor}>Food Mart Building (3rd Floor)</Text>
                  <Text style={styles.thanksTextColor}>(Near Santoshpur Lake Shiv Mandir) Jadavpur, Kolkata,</Text>
                  <Text style={styles.thanksTextColor}>West Bengal 700075 </Text>
                  <Text style={styles.thanksTextColor}>Landline : (033) 4062 8147 </Text>
                  <Text style={styles.thanksTextColor}>Call: 091633-22-22 </Text>
                  <Text style={styles.thanksTextColor}>Mobile : 903864-3838, 983126-3838, 988312-3838 </Text>
                  </View>
                 </View>
               
                </View>
                </ScrollView>
                
         </KeyboardAvoidingView>
      
    );
}


}