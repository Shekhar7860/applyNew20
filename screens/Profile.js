import React, {Component} from 'react';
import {
  Platform,
  Text,
  View,
  BackHandler,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  TouchableNativeFeedback,
} from 'react-native';
import styles from './styles.js';
import Service from './Service';
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {},
      cardheight: 300,
    };
    service = new Service();
  }

  componentDidMount = () => {
    const {navigation} = this.props;
    navigation.addListener('willFocus', () => this.getHomePageData());
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  };

  getHomePageData = () => {
    service.getUserData('userData').then(res => {
      //console.group('localData', res);
      var data = JSON.parse(res);
      console.group('parsed Data', data);
      this.setState({userData: data});
      this.setState({token: data.token});
      //  Alert.alert("loggin successfully")
      // this.props.navigation.navigate('Profile')
    });
  };
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }
  openMenu = () => {
    this.props.navigation.openDrawer();
  };

  submit = () => {
    if (this.state.name && this.state.email && this.state.mobile) {
      alert('profile updated successfully');
      // this.props.navigation.navigate('Profile')
    } else {
      alert('please enter all details both');
    }
  };

  goBack = () => {
    this.props.navigation.pop();
  };
  render() {
    const NewImage = (
      <Image source={require('../images/78.png')} style={styles.profilePic} />
    );
    return (
      <View style={{flex: 1}}>
        <View style={styles.toolbar}>
          <Text style={styles.toolbarButton} />
          <Text style={styles.toolbarTitle}>Profile</Text>
          <TouchableOpacity onPress={() => this.openMenu()}>
            <Image
              style={{width: 30, marginRight: 10, height: 30}}
              source={require('../images/menu.png')}
            />
          </TouchableOpacity>
        </View>

        <ScrollView>
          <View style={{alignItems: 'center'}}>{NewImage}</View>
          <View style={{marginTop: 0, marginHorizontal: 30}}>
            {/* 
            <View
              style={{
                flexDirection: 'row',
                borderWidth: 1,
                width: '80%',
                backgroundColor: '#ffffff',
                borderRadius: 100,
              }}>
              <Image
                style={{width: 25, marginLeft: 20, marginTop: 15, height: 25}}
                source={require('../images/name.png')}
              />
              <TextInput
                style={styles.inputBox}
                onChangeText={name => this.setState({name})}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="Name"
                value={this.state.userData ? this.state.userData.name : ''}
                placeholderTextColor="#95A5A6"
                selectionColor="#fff"
                keyboardType="email-address"
                onSubmitEditing={() => this.password.focus()}
              />
            </View>
            */}

            <Text
              style={{
                marginTop: 20,
                fontSize: 18,
                textTransform: 'capitalize',
              }}>
              First Name -{' '}
              {this.state.userData ? this.state.userData.first_name : ''}{' '}
            </Text>
            {/* 
            <View
              style={{
                flexDirection: 'row',
                borderWidth: 1,
                width: '80%',
                backgroundColor: '#ffffff',
                borderRadius: 100,
                marginTop: 20,
              }}>
              <Image
                style={{width: 25, marginLeft: 20, marginTop: 15, height: 25}}
                source={require('../images/email1.png')}
              />
              <TextInput
                style={styles.inputBox}
                onChangeText={email => this.setState({email})}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="Email Address"
                placeholderTextColor="#95A5A6"
                selectionColor="#fff"
                keyboardType="email-address"
                value={this.state.userData ? this.state.userData.email : ''}
                onSubmitEditing={() => this.password.focus()}
              />
            </View>
             */}
            <Text
              style={{
                marginTop: 20,
                fontSize: 18,
                textTransform: 'capitalize',
              }}>
              Last Name -{' '}
              {this.state.userData ? this.state.userData.last_name : ''}{' '}
            </Text>
            <Text
              style={{
                marginTop: 20,
                fontSize: 18,
                textTransform: 'capitalize',
              }}>
              Email - {this.state.userData ? this.state.userData.email : ''}
            </Text>

            {/* 
            <View
              style={{
                flexDirection: 'row',
                borderWidth: 1,
                width: '80%',
                backgroundColor: '#ffffff',
                borderRadius: 100,
                marginTop: 20,
              }}>
              <Image
                style={{width: 25, marginLeft: 20, marginTop: 15, height: 25}}
                source={require('../images/email1.png')}
              />
              <TextInput
                style={styles.inputBox}
                onChangeText={mobile => this.setState({mobile})}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="Phone Number"
                placeholderTextColor="#95A5A6"
                selectionColor="#fff"
                keyboardType="number-pad"
              />
            </View>
            

            <Text
              style={{
                marginTop: 20,
                fontSize: 18,
              }}>
              Phone - {this.state.userData ? this.state.userData.phone : ''}
            </Text>
            */}
          </View>
        </ScrollView>
      </View>
    );
  }
}
