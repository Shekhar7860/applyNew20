/*Example of React Native Video*/
import React, { Component } from 'react';
//Import React
import { Platform, StyleSheet, Text, View, ScrollView } from 'react-native';
//Import Basic React Native Component
import {  DrawerNavigator, StackNavigator } from 'react-navigation';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
//Import React Native Video to play video

import Login from './Login'
import Joining from './Joining'
import Home from './Home'
import Benefits from './Benefits'
import Screen from './Screen'
import Sponsoring from './Sponsoring'
import Seminar from './Seminar'
import ProductDemos from './ProductDemos'
import Offers from './Offers'
import Complaints from './Complaints'




//Media Controls to control Play/Pause/Seek and full screen
const App = createStackNavigator(
  {
    Login: { screen: Login },
    Home: { screen: Home },
    Screen1: { screen: Screen},
    Joining: { screen: Joining},
    Benefits: { screen: Benefits},
    Sponsoring: { screen: Sponsoring},
    Seminar: { screen: Seminar},
    ProductDemos: { screen: ProductDemos},
    Offers: { screen: Offers},
     Complaints: { screen: Complaints}




  

}, )


 
 export default createAppContainer(App);

