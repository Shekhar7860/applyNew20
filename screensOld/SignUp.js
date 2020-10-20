import React, {Component} from 'react';
import {
  Platform,
  Picker,
  Text,
  View,
  TextInput,
  Alert,
  Image,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  TouchableNativeFeedback,
} from 'react-native';
import styles from './styles.js';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import firebase from 'react-native-firebase';
const Banner = firebase.admob.Banner;
const AdRequest = firebase.admob.AdRequest;
const request = new AdRequest();
import Service from './Service';
request.addKeyword('foobar');
import Spinner from 'react-native-loading-spinner-overlay';
import {Dropdown} from 'react-native-material-dropdown';
export default class SignuUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      mobile: '',
      token: '',
      confirmPassword: '',
      visible: false,
      passwordError: '',
      emailFormatError: '',
      phone: '',
      emailFormatError: '',
      sub: '',
      loading: false,
      stname: '',
      parentname: '',
      score: '',
      value: 1,

      sub2: '',
      sub3: '',
      sub4: '',
      sub5: '',
      phy: '',
      bio: '',
      che: '',
      userId: '',
    };
    service = new Service();
  }
  componentDidMount = () => {
    const {navigation} = this.props;
    navigation.addListener('willFocus', () => this.getHomePageData());
  };

  getHomePageData = () => {
    this.setState({
      email: '',
      password: '',
      mobile: '',
      token: '',
      confirmPassword: '',
      visible: false,
      passwordError: '',
      emailFormatError: '',
      phone: '',
      emailFormatError: '',
      sub: '',
      loading: false,
      stname: '',
      parentname: '',
      score: '',
      value: 1,

      sub2: '',
      sub3: '',
      sub4: '',
      sub5: '',
      phy: '',
      bio: '',
      che: '',
    });
    service.getUserData('tokenData').then(res => {
      console.log('localData', res);
      var data = JSON.parse(res);
      console.log('parsed Data', data);
      this.setState({token: data.token});
    });
    service.getUserData('userData').then(res => {
      console.log('localData', res);
      var data = JSON.parse(res);
      console.log('parsed Data', data);
      this.setState({userId: data.id});
    });
  };

  goBack = () => {
    this.props.navigation.pop();
  };
  openMenu = () => {
    this.props.navigation.openDrawer();
  };
  submit = () => {
    if (
      this.state.stname &&
      this.state.parentname &&
      this.state.email &&
      this.state.phone &&
      this.state.score &&
      this.state.sub &&
      this.state.sub2 &&
      this.state.sub3 &&
      this.state.sub4 &&
      this.state.sub5 &&
      this.state.bio &&
      this.state.phy &&
      this.state.che &&
      this.state.picker1 &&
      this.state.picker2
    ) {
      this.setState({visible: true});
      service
        .calculator(
          this.state.userId,
          this.state.token,
          this.state.stname,
          this.state.parentname,
          this.state.email,
          this.state.phone,
          this.state.score,
          this.state.sub,
          this.state.sub2,
          this.state.sub3,
          this.state.sub4,
          this.state.sub5,
          this.state.bio,
          this.state.phy,
          this.state.che,
          this.state.value,
          this.state.picker1,
          this.state.picker2,
        )
        .then(res => {
          console.log('res', res);
          setTimeout(() => {
            this.setState({visible: false});
            if (res.data !== undefined) {
              alert(JSON.stringify(res));
              if (res.data.status !== 403) {
                console.log('reeee', res);
                this.props.navigation.navigate('Thanks', {data: res});
              } else {
                Alert.alert('Network Error');
              }
            } else {
              if (res) {
                this.props.navigation.navigate('Thanks', {data: res});
              } else {
                Alert.alert('Network Error');
              }
            }
          }, 1000);

          if (res) {
          }
        });
      console.log(
        'valuttt',
        this.state.email,
        this.state.stname,
        this.state.parentname,
        this.state.parentname,
        this.state.value,
      );
    } else {
      Alert.alert('Please enter valid details');
    }
  };

  render() {
    var radio_props = [{label: 'UR', value: 0}, {label: 'OBC/SC/ST', value: 1}];
    let data = [
      {
        value: '1995',
      },
      {
        value: '1996',
      },
      {
        value: '1997',
      },
      {
        value: '1998',
      },
      {
        value: '1999',
      },
      {
        value: '2000',
      },
      {
        value: '2001',
      },
      {
        value: '2002',
      },
      {
        value: '2003',
      },
      {
        value: '2004',
      },
      {
        value: '2005',
      },
      {
        value: '2006',
      },
      {
        value: '2007',
      },
      {
        value: '2008',
      },
      {
        value: '2009',
      },
      {
        value: '2010',
      },
      {
        value: '2011',
      },
      {
        value: '2012',
      },
      {
        value: '2013',
      },
      {
        value: '2014',
      },
      {
        value: '2015',
      },
      {
        value: '2016',
      },
      {
        value: '2017',
      },
      {
        value: '2018',
      },
      {
        value: '2019',
      },
    ];
    let data2 = [
      {
        value: '1995',
      },
      {
        value: '1996',
      },
      {
        value: '1997',
      },
      {
        value: '1998',
      },
      {
        value: '1999',
      },
      {
        value: '2000',
      },
      {
        value: '2001',
      },
      {
        value: '2002',
      },
      {
        value: '2003',
      },
      {
        value: '2004',
      },
      {
        value: '2005',
      },
      {
        value: '2006',
      },
      {
        value: '2007',
      },
      {
        value: '2008',
      },
      {
        value: '2009',
      },
      {
        value: '2010',
      },
      {
        value: '2011',
      },
      {
        value: '2012',
      },
      {
        value: '2013',
      },
      {
        value: '2014',
      },
      {
        value: '2015',
      },
      {
        value: '2016',
      },
      {
        value: '2017',
      },
      {
        value: '2018',
      },
      {
        value: '2019',
      },
    ];
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
          <TouchableOpacity>
            <Image style={{width: 30, marginLeft: 5, height: 30}} />
          </TouchableOpacity>
          <Text style={styles.toolbarTitle}>GPA Calculator</Text>
          <TouchableOpacity onPress={() => this.openMenu()}>
            <Image
              style={{width: 30, marginRight: 10, height: 30}}
              source={require('../images/menu.png')}
            />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={{alignItems: 'center', marginTop: 20}}>
            <TextInput
              style={styles.inputBox}
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholder="Student Name (required)"
              editable={false}
              placeholderTextColor="#002f6c"
              keyboardType="email-address"
            />
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
                onChangeText={stname => this.setState({stname})}
                underlineColorAndroid="rgba(0,0,0,0)"
                autoFocus={true}
                onSubmitEditing={() => {
                  this.secondTextInput.focus();
                }}
                placeholder="Student name (required)"
                placeholderTextColor="#95A5A6"
                keyboardType="email-address"
                value={this.state.stname}
              />
            </View>
            <TextInput
              style={styles.inputBox}
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholder="Parent/Guardian Name"
              editable={false}
              selectTextOnFocus={false}
              placeholderTextColor="#002f6c"
              keyboardType="email-address"
            />
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
                onChangeText={parentname => this.setState({parentname})}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="Parent/Guardian Name"
                ref={input => {
                  this.secondTextInput = input;
                }}
                underlineColorAndroid="rgba(0,0,0,0)"
                onSubmitEditing={() => {
                  this.thirdTextInput.focus();
                }}
                placeholderTextColor="#95A5A6"
                keyboardType="email-address"
                value={this.state.parentname}
              />
            </View>

            <TextInput
              style={styles.inputBox}
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholder="Your Email (required)"
              editable={false}
              selectTextOnFocus={false}
              placeholderTextColor="#002f6c"
              keyboardType="email-address"
            />
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
                source={require('../images/email1.png')}
              />
              <TextInput
                style={styles.inputBox}
                onChangeText={email => this.setState({email})}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="Your Email (required)"
                ref={input => {
                  this.thirdTextInput = input;
                }}
                placeholderTextColor="#95A5A6"
                onSubmitEditing={() => {
                  this.fourthTextInput.focus();
                }}
                keyboardType="email-address"
                value={this.state.email}
              />
            </View>

            <TextInput
              style={styles.inputBox}
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholder="Your Phone (required)"
              editable={false}
              selectTextOnFocus={false}
              placeholderTextColor="#002f6c"
            />
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
                source={require('../images/mobile.png')}
              />
              <TextInput
                style={styles.inputBox}
                onChangeText={phone => this.setState({phone})}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="Your Phone (required)"
                ref={input => {
                  this.fourthTextInput = input;
                }}
                placeholderTextColor="#95A5A6"
                onSubmitEditing={() => {
                  this.fifthTextInput.focus();
                }}
                maxLength={10}
                keyboardType="default"
                value={this.state.phone}
              />
            </View>

            <TextInput
              style={styles.inputBox}
              onChangeText={stname => this.setState({stname})}
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholder="NEET SCORE (optional)"
              editable={false}
              selectTextOnFocus={false}
              placeholderTextColor="#002f6c"
            />
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
                source={require('../images/class.png')}
              />
              <TextInput
                style={styles.inputBox}
                onChangeText={score => this.setState({score})}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder=""
                ref={input => {
                  this.fifthTextInput = input;
                }}
                placeholderTextColor="#95A5A6"
                onSubmitEditing={() => {
                  this.sixthTextInput.focus();
                }}
                keyboardType="default"
                value={this.state.score}
              />
            </View>

            <TextInput
              style={styles.inputBox}
              onChangeText={ptname => this.setState({ptname})}
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholder="Marks Obtained In Class 10/SSC/X/O Level : Put Best Five Marks Obtained"
              placeholderTextColor="#002f6c"
              editable={false}
              selectTextOnFocus={false}
              keyboardType="email-address"
            />
            <View
              style={{
                flexDirection: 'row',
                borderWidth: 1,
                width: '80%',
                backgroundColor: '#ffffff',
                borderRadius: 100,
              }}>
              <TextInput
                style={styles.inputBox}
                onChangeText={sub => this.setState({sub})}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="Subject1"
                ref={input => {
                  this.sixthTextInput = input;
                }}
                onSubmitEditing={() => {
                  this.sevnthTextInput.focus();
                }}
                placeholderTextColor="#95A5A6"
                keyboardType="default"
                value={this.state.sub}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                borderWidth: 1,
                width: '80%',
                backgroundColor: '#ffffff',
                borderRadius: 100,
                marginTop: 10,
              }}>
              <TextInput
                style={styles.inputBox}
                onChangeText={sub2 => this.setState({sub2})}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="Subject2"
                ref={input => {
                  this.sevnthTextInput = input;
                }}
                onSubmitEditing={() => {
                  this.egthTextInput.focus();
                }}
                placeholderTextColor="#95A5A6"
                keyboardType="default"
                value={this.state.sub2}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                borderWidth: 1,
                width: '80%',
                backgroundColor: '#ffffff',
                borderRadius: 100,
                marginTop: 10,
              }}>
              <TextInput
                style={styles.inputBox}
                onChangeText={sub3 => this.setState({sub3})}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="Subject3"
                ref={input => {
                  this.egthTextInput = input;
                }}
                onSubmitEditing={() => {
                  this.ninthTextInput.focus();
                }}
                placeholderTextColor="#95A5A6"
                keyboardType="default"
                value={this.state.sub3}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                borderWidth: 1,
                width: '80%',
                backgroundColor: '#ffffff',
                borderRadius: 100,
                marginTop: 10,
              }}>
              <TextInput
                style={styles.inputBox}
                onChangeText={sub4 => this.setState({sub4})}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="Subject4"
                ref={input => {
                  this.ninthTextInput = input;
                }}
                onSubmitEditing={() => {
                  this.tenthTextInput.focus();
                }}
                placeholderTextColor="#95A5A6"
                keyboardType="default"
                value={this.state.sub4}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                borderWidth: 1,
                width: '80%',
                backgroundColor: '#ffffff',
                borderRadius: 100,
                marginTop: 10,
              }}>
              <TextInput
                style={styles.inputBox}
                onChangeText={sub5 => this.setState({sub5})}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="Subject5"
                ref={input => {
                  this.tenthTextInput = input;
                }}
                onSubmitEditing={() => {
                  this.eleventhTextInput.focus();
                }}
                placeholderTextColor="#95A5A6"
                keyboardType="default"
                value={this.state.sub5}
              />
            </View>

            <TextInput
              style={styles.inputBox}
              onChangeText={twl12 => this.setState({twl12})}
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholder="Marks Obtained In Class 12/HSC/X/A Level :"
              placeholderTextColor="#002f6c"
              editable={false}
              selectTextOnFocus={false}
              keyboardType="email-address"
            />
            <View
              style={{
                flexDirection: 'row',
                borderWidth: 1,
                width: '80%',
                backgroundColor: '#ffffff',
                borderRadius: 100,
                marginTop: 10,
              }}>
              <TextInput
                style={styles.inputBox}
                onChangeText={bio => this.setState({bio})}
                underlineColorAndroid="rgba(0,0,0,0)"
                ref={input => {
                  this.eleventhTextInput = input;
                }}
                onSubmitEditing={() => {
                  this.twelthTextInput.focus();
                }}
                placeholder="Biology (Botany + Zoology)"
                placeholderTextColor="#95A5A6"
                keyboardType="default"
                value={this.state.bio}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                borderWidth: 1,
                width: '80%',
                backgroundColor: '#ffffff',
                borderRadius: 100,
                marginTop: 10,
              }}>
              <TextInput
                style={styles.inputBox}
                onChangeText={phy => this.setState({phy})}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="Physics"
                ref={input => {
                  this.twelthTextInput = input;
                }}
                onSubmitEditing={() => {
                  this.thirteenthTextInput.focus();
                }}
                placeholderTextColor="#95A5A6"
                keyboardType="default"
                value={this.state.phy}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                borderWidth: 1,
                width: '80%',
                backgroundColor: '#ffffff',
                borderRadius: 100,
                marginTop: 10,
              }}>
              <TextInput
                style={styles.inputBox}
                onChangeText={che => this.setState({che})}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="Chemistry"
                ref={input => {
                  this.thirteenthTextInput = input;
                }}
                placeholderTextColor="#95A5A6"
                keyboardType="default"
                value={this.state.che}
              />
            </View>
            <TextInput
              style={styles.inputBox}
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholder="Category (required)"
              placeholderTextColor="#002f6c"
              editable={false}
              selectTextOnFocus={false}
              keyboardType="email-address"
              value={this.state.cat}
            />
            <RadioForm
              style={{
                fontSize: 15,
                marginTop: 10,
                margin: 5,
                justifyContent: 'space-around',
                width: '50%',
              }}
              radio_props={radio_props}
              labelStyle={{fontSize: 12, marginLeft: -5}}
              initial={0}
              formHorizontal={true}
              onPress={value => {
                this.setState({value: value});
              }}
            />

            <TextInput
              style={styles.inputBox}
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholder="Year Of Passing Class 10/SSC/X/O Level (required)"
              placeholderTextColor="#002f6c"
              editable={false}
              selectTextOnFocus={false}
              keyboardType="email-address"
            />
            <Dropdown
              containerStyle={{width: '70%'}}
              label="Choose Year of Class 10"
              data={data}
              onChangeText={val => this.setState({picker1: val})}
            />

            {/* <Picker style={styles.pickerStyle}  
                        selectedValue={this.state.picker1}  
                        onValueChange={(itemValue, itemPosition) =>  
                            this.setState({picker1: itemValue, choosenIndex: itemPosition})}  
                    >  
                    <Picker.Item label="Choose Year" value="year" />  
                    <Picker.Item label="2010" value="2010" />  
                    <Picker.Item label="2011" value="2011" />  
                     <Picker.Item label="2012" value="2012" />  
                    <Picker.Item label="2013" value="2013" />  
                     <Picker.Item label="2014" value="2014" />  
                    <Picker.Item label="2015" value="2015" />  
                     <Picker.Item label="2016" value="2016" />  
                    <Picker.Item label="2017" value="2017" />  
                     <Picker.Item label="2018" value="2018" />  
                    <Picker.Item label="2019" value="2019" />  
                     <Picker.Item label="2020" value="2020" />  
                    <Picker.Item label="2021" value="2021" />  
                     <Picker.Item label="2022" value="2022" />  
                    <Picker.Item label="2023" value="2023" />  
                     <Picker.Item label="2024" value="2024" />  
                    <Picker.Item label="2025" value="2025" />  
                     <Picker.Item label="2026" value="2026" />  
                    <Picker.Item label="2027" value="2027" />  
                     <Picker.Item label="2028" value="2028" />  
                    <Picker.Item label="2029" value="2029" />  
                     <Picker.Item label="2030" value="2030" />  
                   
                </Picker>   */}

            <TextInput
              style={styles.inputBox}
              onChangeText={ptname => this.setState({ptname})}
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholder="Year Of Passing Class 12/HSC/X11/A Level (required)"
              placeholderTextColor="#002f6c"
              editable={false}
              selectTextOnFocus={false}
              keyboardType="email-address"
            />
            <Dropdown
              containerStyle={{width: '70%'}}
              label="Choose Year of Class 12"
              data={data2}
              onChangeText={val => this.setState({picker2: val})}
            />

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText} onPress={() => this.submit()}>
                Calculate
              </Text>
            </TouchableOpacity>
            <TextInput
              style={styles.inputBox}
              onChangeText={otp => this.setState({otp})}
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholder="OTP Please check your phone/Email"
              placeholderTextColor="#002f6c"
              editable={false}
              selectTextOnFocus={false}
              keyboardType="email-address"
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
