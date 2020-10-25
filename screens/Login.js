import React, {Component} from 'react';
import {
  Platform,
  Text,
  View,
  TextInput,
  Alert,
  Image,
  KeyboardAvoidingView,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  TouchableNativeFeedback,
} from 'react-native';
import styles from './styles.js';
import firebase from 'react-native-firebase';
import Spinner from 'react-native-loading-spinner-overlay';
const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;
import Icon from 'react-native-vector-icons/FontAwesome';
const Banner = firebase.admob.Banner;
const AdRequest = firebase.admob.AdRequest;
const request = new AdRequest();
request.addKeyword('foobar');
import Service from './Service';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      mobile: '',
      confirmPassword: '',
      confirmPasswordError: '',
      passwordError: '',
      emailFormatError: '',
      mobileError: '',
      emailFormatError: '',
      visble: false,
      cardheight: 300,
    };
    service = new Service();
  }

  componentDidMount = () => {};
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

  signUp = () => {
    this.props.navigation.navigate('Register');
  };
  submit = () => {
    var regexp = /^\S*$/;
    var pat = /^[a-z]+$/;

    if (this.state.username && this.state.password) {
      if (
        regexp.test(this.state.username) == true &&
        pat.test(this.state.username) == true
      ) {
        this.setState({visible: true});
        service.login(this.state.username, this.state.password).then(res => {
          if (res.data !== undefined) {
            if (
              res.message !==
                'Unknown username. Check again or try your email address.' &&
              res.data.status !== 403
            ) {
              var data = {
                username: this.state.username,
                password: this.state.password,
              };
              fetch('https://www.mbbsbangladesh.com/wp-json/wp/v2/users/me', {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                  authorization: 'Bearer ' + res.token,
                },
                body: JSON.stringify(data),
              })
                .then(response =>
                  response.json().then(userRes => {
                    console.group('resssss2', userRes);
                    if (
                      res.message !== 'Invalid parameter(s): username, password'
                    ) {
                      service.saveUserData('tokenData', res);
                      service.saveUserData('userData', userRes);
                      this.setState({visible: false});
                      this.props.navigation.navigate('Profile');
                    } else {
                      this.setState({username: '', password: ''});
                      Alert.alert('Wrong Username or Password');
                    }
                  }),
                )
                .catch(error => {
                  this.setState({username: '', password: ''});
                  this.setState({visible: false});
                  Alert.alert('NetWork Error');
                });
            } else {
              this.setState({visible: false});
              Alert.alert('Wrong Userame or Password');
            }
          } else {
            if (
              res.message !==
              'Unknown username. Check again or try your email address.'
            ) {
              service.saveUserData('tokenData', res);
              var data = {
                username: this.state.username,
                password: this.state.password,
              };
              fetch('https://www.mbbsbangladesh.com/wp-json/wp/v2/users/me', {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                  authorization: 'Bearer ' + res.token,
                },
                body: JSON.stringify(data),
              })
                .then(response =>
                  response.json().then(userRes => {
                    console.group('resssss', userRes, res);
                    if (
                      res.message !== 'Invalid parameter(s): username, password'
                    ) {
                      service.saveUserData('tokenData', res);
                      service.saveUserData('userData', userRes);
                      this.setState({visible: false});
                      this.props.navigation.navigate('Profile');
                    } else {
                      this.setState({username: '', password: ''});
                      Alert.alert('Wrong Username or Password');
                    }
                  }),
                )
                .catch(error => {
                  this.setState({username: '', password: ''});
                  this.setState({visible: false});
                  Alert.alert('NetWork Error');
                });
            } else {
              this.setState({visible: false});
              Alert.alert('Wrong Userame or Password');
            }
          }
        });
      } else {
        Alert.alert('No White Space and Upper case character allowed');
      }
    } else {
      Alert.alert('please enter username and password both');
    }
  };
  render() {
    return (
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={keyboardVerticalOffset}>
        <Spinner
          visible={this.state.visible}
          color="#00ff00"
          tintColor="#00ff00"
          animation={'fade'}
          cancelable={false}
          textStyle={{color: '#FFF'}}
        />
        <View style={styles.toolbar}>
          <TouchableOpacity>
            <Image style={{width: 30, marginLeft: 5, height: 30}} />
          </TouchableOpacity>
          <Text style={styles.toolbarTitle}>Login</Text>
          <Text style={styles.toolbarButton} />
        </View>

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

        <View style={{marginTop: 20, alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              borderWidth: 1,
              width: '85%',
              backgroundColor: '#ffffff',
              borderRadius: 100,
            }}>
            <Image
              style={{width: 25, marginLeft: 20, marginTop: 15, height: 25}}
              source={require('../images/name.png')}
            />
            <TextInput
              style={styles.inputBox}
              onChangeText={username => this.setState({username})}
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholder="UserName"
              placeholderTextColor="#95A5A6"
              autoCapitalize="none"
              keyboardType="default"
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              borderWidth: 1,
              width: '85%',
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
              autoCapitalize="none"
              placeholderTextColor="#95A5A6"
              keyboardType="default"
              secureTextEntry={true}
            />
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={() => this.submit()}>
              Submit
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.signUp()}>
            <Text style={{fontSize: 20, color: '#588029'}}>
              New User ? Sign Up Here{' '}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer} />
      </KeyboardAvoidingView>
    );
  }
}
