import React, {Component} from 'react';
import {
  Platform,
  Text,
  View,
  TextInput,
  Image,
  Alert,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  TouchableNativeFeedback,
} from 'react-native';
import styles from './styles.js';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
import Service from './Service';
import Spinner from 'react-native-loading-spinner-overlay';
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      cls: '',
      city: '',
      mobile: '',
      age: '',
      firstName: '',
      lastName: '',
      userName: '',
      props: '',
      mobileError: '',
      emailFormatError: '',
      visible: false,
      cardheight: 300,
      email: '',
    };
    service = new Service();
  }

  fbSignIn = () => {
    LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(
      result => {
        console.log(result, 'rest');
        this.props.navigation.navigate('Profile');
        //  if(result.isCancelled == false)
        //  {
        //  AccessToken.getCurrentAccessToken().then(
        //    (data) => {
        //      console.log('userDATA', data)

        //       //   this.getUserProfile(data.accessToken);
        //  });
        // }
      },
      error => {
        alert('Login fail with error: ' + error);
      },
    );
  };

  openMenu = () => {
    this.props.navigation.openDrawer();
  };

  submit = () => {
    var regexp = /^\S*$/;
    var pat = /^[a-z0-9]+$/;
    if (this.state.name && this.state.email && this.state.mobile) {
      if (
        regexp.test(this.state.name) == true &&
        pat.test(this.state.name) == true
      ) {
        if (
          !service.validateEmail(this.state.email) &&
          regexp.test(this.state.email) == true &&
          pat.test(this.state.email) == true
        ) {
          Alert.alert('Invalid Email Address');
        } else {
          this.setState({visible: true});
          var data = {
            name: this.state.name,
            username: this.state.name,
            email: this.state.email,
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            password: this.state.password,
            roles: 'author',
            mobile_no: this.state.mobile,
          };
          service
            .register(
              this.state.name,
              this.state.email,
              this.state.firstName,
              this.state.lastName,
              this.state.password,
              this.state.mobile,
            )
            .then(res => {
              // alert(this.state.mobile);
              console.log('resss0', res);
              this.setState({visible: false});

              fetch('https://www.mbbsbangladesh.com/wp-json/wp/v2/users', {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                  authorization: 'Bearer ' + res.token,
                },
                body: JSON.stringify(data),
              })
                .then(response =>
                  response.json().then(res => {
                    console.group('resssss', res);
                    if (
                      res.code !== 'existing_user_login' &&
                      res.code !== 'existing_user_email'
                    ) {
                      service.saveUserData('userData', res);
                      // console.log(res, 'resss')
                      // Alert.alert('User Created SuccessFully');
                      this.setState({visible: false});
                      this.props.navigation.navigate('Otp', {
                        number: this.state.mobile,
                      });
                    } else {
                      Alert.alert(res.message);
                      this.setState({
                        mobile: '',
                        email: '',
                        firstName: '',
                        lastName: '',
                        userName: '',
                      });
                    }
                  }),
                )
                .catch(error => {
                  this.setState({
                    mobile: '',
                    email: '',
                    firstName: '',
                    lastName: '',
                    userName: '',
                  });
                  console.log('error', error);
                });
            });
        }
      } else {
        Alert.alert('No White Space and Upper case character allowed');
      }
    } else {
      Alert.alert('Please enter all details');
    }
  };

  signUp = () => {
    this.setState(() => ({cardheight: 370}));
    if (!service.validateEmail(this.state.email)) {
      this.setState(() => ({
        emailFormatError: 'Proper Email Format is Required',
      }));
    } else {
      this.setState(() => ({emailFormatError: ''}));
    }
    if (this.state.email.trim() === '') {
      this.setState(() => ({emailError: ' Email is required.'}));
      this.setState(() => ({emailFormatError: null}));
    } else {
      this.setState(() => ({emailError: null}));
    }
    if (this.state.password.trim() === '') {
      this.setState(() => ({passwordError: ' Password is required.'}));
    } else {
      this.setState(() => ({passwordError: null}));
    }
    if (this.state.mobile.trim() === '') {
      this.setState(() => ({mobileError: ' Mobile Number is required.'}));
    } else {
      this.setState(() => ({mobileError: null}));
    }
    if (this.state.confirmPassword.trim() === '') {
      this.setState(() => ({
        confirmPasswordError: ' Confirm Password is required.',
      }));
    } else {
      this.setState(() => ({confirmPasswordError: null}));
    }
    if (
      this.state.email &&
      this.state.mobile &&
      this.state.password &&
      this.state.confirmPassword
    ) {
      this.setState(() => ({cardheight: 300}));
    }

    if (
      this.state.email &&
      this.state.password &&
      this.state.mobile &&
      this.state.confirmPassword &&
      service.validateEmail(this.state.email)
    ) {
      this.setState({loading: true});
      setTimeout(() => {
        this.setState({loading: false});
        this.refs.defaultToastBottom.ShowToastFunction('SignUp SuccessFully');
        this.props.navigation.navigate('Login');
      }, 3000);
    }

    // alert(this.state.password)
  };

  goBack = () => {
    this.props.navigation.pop();
  };
  render() {
    const NewImage = (
      <Image
        style={{
          width: 250,
          height: 150,
          marginLeft: 5,
          marginTop: 20,
          alignSelf: 'center',
        }}
        source={require('../images/splash2.png')}
      />
    );
    return (
      <View style={{flex: 1}}>
        <Spinner
          visible={this.state.visible}
          color="#00ff00"
          tintColor="#00ff00"
          animation={'fade'}
          cancelable={false}
          textStyle={{color: '#FFF'}}
        />

        <View style={styles.toolbar}>
          <TouchableOpacity onPress={() => this.goBack()}>
            <Image
              style={{width: 30, marginLeft: 5, height: 30}}
              source={require('../images/back.png')}
            />
          </TouchableOpacity>
          <Text style={styles.toolbarTitle}>Register</Text>
          <Text style={styles.toolbarButton} />
        </View>

        <ScrollView>
          <View style={{alignItems: 'center'}}>{NewImage}</View>
          <View style={{marginTop: 20, alignItems: 'center'}}>
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
                placeholderTextColor="#95A5A6"
                selectionColor="#fff"
                keyboardType="email-address"
              />
            </View>

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
              />
            </View>

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
                source={require('../images/mobile.png')}
              />
              <TextInput
                style={styles.inputBox}
                onChangeText={mobile => this.setState({mobile})}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="Phone Number"
                maxLength={10}
                placeholderTextColor="#95A5A6"
                selectionColor="#fff"
                keyboardType="number-pad"
              />
            </View>
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
                source={require('../images/identification.png')}
              />
              <TextInput
                style={styles.inputBox}
                onChangeText={firstName => this.setState({firstName})}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="First Name"
                placeholderTextColor="#95A5A6"
                selectionColor="#fff"
                keyboardType="default"
              />
            </View>

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
                source={require('../images/identification.png')}
              />
              <TextInput
                style={styles.inputBox}
                onChangeText={lastName => this.setState({lastName})}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="Last Name"
                placeholderTextColor="#95A5A6"
                selectionColor="#fff"
                keyboardType="default"
              />
            </View>
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
                source={require('../images/password.png')}
              />
              <TextInput
                style={styles.inputBox}
                onChangeText={password => this.setState({password})}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="Password"
                placeholderTextColor="#95A5A6"
                selectionColor="#fff"
                keyboardType="default"
                secureTextEntry={true}
              />
            </View>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText} onPress={() => this.submit()}>
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
