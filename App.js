/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import SplashScreen from 'react-native-splash-screen';
import Service from './screens/Service';
import Register from './screens/Register';
import SignUp from './screens/SignUp';
import Login from './screens/Login';
import Otp from './screens/Otp';
import ViewGPA from './screens/ViewGPA';
import Confirm from './screens/Confirm';
import Apply from './screens/Apply';
import CollegeFees from './screens/CollegeFees';
import CollegesList from './screens/CollegesList';
import Slider from './screens/Slider';
import Welcome from './screens/Welcome';
import DrawerContent from './screens/DrawerContent';
import Splash from './screens/Splash';
import Profile from './screens/Profile';
import Thanks from './screens/Thanks';
const HomeScreenRouter = createDrawerNavigator(
  {
    Profile: {screen: Profile},
    SignUp: {screen: SignUp},
    viewGPA: {screen: ViewGPA},
    Apply: {screen: Apply},
    CollegeFees: {screen: CollegeFees},
    CollegesList: {screen: CollegesList},
    Thanks: {screen: Thanks},
  },
  {
    contentComponent: DrawerContent,
    drawerPosition: 'right',
    drawerOpenRoute: 'DrawerRightOpen',
    drawerCloseRoute: 'DrawerRightClose',
    drawerToggleRoute: 'DrawerRightToggle',
  },
);
const LoggedInUser = createDrawerNavigator(
  {
    Profile: {screen: HomeScreenRouter},
    CollegesList: {screen: CollegesList},
    // customerHome: {screen: SignUp},
    viewGPA: {screen: ViewGPA},
    Login: {screen: Login},
    Register: {screen: Register},
    Slider: {screen: Slider},
    SignUp: {screen: SignUp},
    Welcome: {screen: Welcome},
    Login: {screen: Login},
    Otp: {screen: Otp},
    Apply: {screen: Apply},
    CollegeFees: {screen: CollegeFees},
    Thanks: {screen: Thanks},
  },
  {
    contentComponent: DrawerContent,
    drawerPosition: 'right',
    drawerOpenRoute: 'DrawerRightOpen',
    drawerCloseRoute: 'DrawerRightClose',
    drawerToggleRoute: 'DrawerRightToggle',
  },
);
const AppNavigator = createStackNavigator(
  {
    Splash: {screen: Splash},
    Register: {screen: Register},
    viewGPA: {screen: ViewGPA},
    Profile: {screen: HomeScreenRouter},
    Slider: {screen: Slider},
    SignUp: {screen: SignUp},
    Welcome: {screen: Welcome},
    Apply: {screen: Apply},
    CollegeFees: {screen: CollegeFees},
    CollegesList: {screen: CollegesList},
    Thanks: {screen: Thanks},
    Login: {screen: Login},
    Otp: {screen: Otp},
  },
  {headerMode: 'none'},
);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
    };
    service = new Service();
  }
  componentDidMount() {
    service.getUserData('userData').then(res => {
      console.log('localData', res);
      var data = JSON.parse(res);
      console.log('parsed Data', data);
      this.setState({userId: data.id});
      //  Alert.alert("loggin successfully")
      // this.props.navigation.navigate('Profile')
    });
  }
  render() {
    const AppRouter = createAppContainer(
      this.state.userId !== '' ? LoggedInUser : AppNavigator,
    );
    return <AppRouter />;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
