import React, {Component} from 'react';
import {Platform, Text, View, TextInput, Image, ImageBackground, TouchableOpacity, StatusBar, ScrollView, TouchableNativeFeedback} from 'react-native';
import styles from './styles.js';

export default class Apply extends Component {

  constructor(props){
    super(props);
    this.state = { 
      email:'',
      password:'',
      mobile:'',
      confirmPassword:'',
      confirmPasswordError:'',
      passwordError:'',
      emailFormatError:'',
      mobileError:'',
      emailFormatError:'',
      loading: false,
      cardheight:300
    }
    
  }

  openMenu = () => {
    this.props.navigation.openDrawer()
  }
   goBack = () =>{
    this.props.navigation.pop()
   }
  render() {
    return (
    
      <View style={{flex:1}}>
         <View style={styles.toolbar}>
         <TouchableOpacity >
                    <Image style={{width:30,marginLeft:5,  height:30}}></Image>
                    </TouchableOpacity>
                    <Text style={styles.toolbarTitle}>Apply</Text>
                    <TouchableOpacity onPress={() => this.openMenu()}>
                    <Image style={{width:30,marginRight:10,  height:30}} source={require('../images/menu.png')}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems:'center', marginTop:20}}>

                </View>

      
      
      </View>
      
    );
}


}