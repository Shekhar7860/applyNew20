import React, {Component} from 'react';
import {
  Platform,
  Text,
  View,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  TouchableNativeFeedback,
  Alert,
} from 'react-native';
import styles from './styles.js';
import Service from './Service';
import DocumentPicker from 'react-native-document-picker';
import Spinner from 'react-native-loading-spinner-overlay';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';

export default class Apply extends Component {
  constructor(props) {
    super(props);
    this.state = {
      applicationId: '',
      userId: '',
      tenth: '',
      twelth: '',
      neet: '',
      pass: '',
      other: '',
      token: '',
      visble: false,
      resultGPA: 'Fail',
      roundGPA1: '',
      roundGPA2: '',
      totalGpa: '',
      title: 'Upload Documents',
      application: [],
      nextButton: '',
      disableButton: true,
    };
  }

  componentDidMount = () => {
    const {navigation} = this.props;
    navigation.addListener('willFocus', () => this.getHomePageData());
  };

  async selectDoc(value) {
    let v = value;
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      if (value == 'tenth') {
        v = 'Tenth Document';
        this.setState({tenth: res, nextButton: 'Next', disableButton: false});
      } else if (value == 'twelth') {
        v = 'Twelfth Document';
        this.setState({twelth: res, nextButton: 'Next', disableButton: false});
      } else if (value == 'neet') {
        v = 'Neet Score Card';
        this.setState({neet: res, nextButton: 'Next', disableButton: false});
      } else if (value == 'passing') {
        v = 'Passing Certificates';
        this.setState({pass: res, nextButton: 'Next', disableButton: false});
      } else {
        v = 'Other Documents';
        this.setState({other: res});
      }
      //  this.upload(res, v);
      console.group(
        res.uri,
        res.type, // mime type
        res.name,
        res.size,
      );
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  }

  getHomePageData = () => {
    service.getUserData('tokenData').then(res => {
      if (res == 'none') {
        Alert.alert('Session Expired !Plz Logout, Login And Try Again');
      } else {
        console.log('localData', res);
        var data = JSON.parse(res);
        console.log('parsed Data', data);
        this.setState({token: data.token});
        service.getUserData('userData').then(res => {
          console.log('localData', res);
          var data = JSON.parse(res);
          console.log('parsed Data', data);
          this.getApplicationId(data.id);
          this.setState({userData: data, userId: data.id});
        });
      }
    });
  };

  getApplicationId = id => {
    this.setState({visible: true});
    service.getApplicationId(id).then(res => {
      this.setState({visible: false});
      console.group('applicationId', res);
      var arr = [];
      for (let i in res) {
        //  console.group('id is', res[i]);
        arr.push(res[i]);
      }
      this.setState({application: arr, title: 'Application Processing'});
      console.group('ddd', arr);
      if (arr.length !== 0) {
        this.setState({
          applicationId: arr[0].ID,
          resultGPA: arr[0].result_gpa,
          roundGPA1: arr[0].round_gpa1,
          roundGPA2: arr[0].round_gpa2,
          totalGpa: arr[0].round_total_gpa,
        });
        if (arr[0].result_gpa == 'Fail') {
          this.setState({title: 'G.P.A'});
        } else if (arr[0].result_gpa == 'Pass') {
          this.setState({title: 'Eligibilty Pass'});
        }
      }
    });
  };
  openMenu = () => {
    this.props.navigation.openDrawer();
  };
  goBack = () => {
    this.props.navigation.pop();
  };

  makeNextDisable = () => {
    this.setState({disableButton: true, nextButton: ''});
  };

  submit = (document, slug) => {
    if (document !== '') {
      this.setState({visible: true});
      service
        .uploadDocuments(
          this.state.applicationId,
          document,
          this.state.token,
          slug,
        )
        .then(res => {
          console.group('res', res);
          this.setState({visible: false});
          Alert.alert('Documents Uploaded Successfully');
        });
    } else {
      Alert.alert('Please Complete GPA Calculations First');
    }
  };
  render() {
    const {resultGPA, roundGPA1, roundGPA2, totalGpa, application} = this.state;
    return (
      <View style={{flex: 1}}>
        <View style={styles.toolbar}>
          <Text style={styles.toolbarButton} />
          <Text style={styles.toolbarTitle}>{this.state.title}</Text>
          <TouchableOpacity onPress={() => this.openMenu()}>
            <Image
              style={{width: 30, marginRight: 10, height: 30}}
              source={require('../images/menu.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
          {application.length !== 0 ? (
            resultGPA == 'Pass' ? (
              <ProgressSteps>
                <ProgressStep
                  label="Tenth"
                  nextBtnText={this.state.nextButton}
                  nextBtnDisabled={this.state.disableButton}
                  onNext={() => this.makeNextDisable()}>
                  <View style={{alignItems: 'center'}}>
                    <Text style={{...styles.pdf, marginTop: 10}}>
                      {this.state.tenth.name}
                    </Text>
                    <TouchableOpacity style={styles.button}>
                      <Text
                        style={styles.buttonText}
                        onPress={() => this.selectDoc('tenth')}>
                        10th Document
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{...styles.button, marginTop: 40}}>
                      <Text
                        style={styles.buttonText}
                        onPress={() => this.submit(this.state.tenth, 'tenth')}>
                        Upload
                      </Text>
                    </TouchableOpacity>
                  </View>
                </ProgressStep>
                <ProgressStep
                  label="Twelfth"
                  nextBtnText={this.state.nextButton}
                  nextBtnDisabled={this.state.disableButton}
                  onNext={() => this.makeNextDisable()}>
                  <View style={{alignItems: 'center'}}>
                    <Text style={{...styles.pdf, marginTop: 10}}>
                      {this.state.twelth.name}
                    </Text>
                    <TouchableOpacity style={styles.button}>
                      <Text
                        style={styles.buttonText}
                        onPress={() => this.selectDoc('twelth')}>
                        12th Document
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{...styles.button, marginTop: 40}}>
                      <Text
                        style={styles.buttonText}
                        onPress={() =>
                          this.submit(this.state.twelth, 'twelth')
                        }>
                        Upload
                      </Text>
                    </TouchableOpacity>
                  </View>
                </ProgressStep>
                <ProgressStep
                  label="Neet Score Card"
                  nextBtnText={this.state.nextButton}
                  nextBtnDisabled={this.state.disableButton}
                  onNext={() => this.makeNextDisable()}>
                  <View style={{alignItems: 'center'}}>
                    <Text style={{...styles.pdf, marginTop: 10}}>
                      {this.state.neet.name}
                    </Text>
                    <TouchableOpacity style={styles.button}>
                      <Text
                        style={styles.buttonText}
                        onPress={() => this.selectDoc('neet')}>
                        Neet Score Card
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{...styles.button, marginTop: 40}}>
                      <Text
                        style={styles.buttonText}
                        onPress={() =>
                          this.submit(this.state.neet, 'Neet Score Card')
                        }>
                        Upload
                      </Text>
                    </TouchableOpacity>
                  </View>
                </ProgressStep>
                <ProgressStep
                  label="Passing Certificates"
                  nextBtnText={this.state.nextButton}
                  nextBtnDisabled={this.state.disableButton}
                  onNext={() => this.makeNextDisable()}>
                  <View style={{alignItems: 'center'}}>
                    <Text style={{...styles.pdf, marginTop: 10}}>
                      {this.state.pass.name}
                    </Text>
                    <TouchableOpacity style={styles.button}>
                      <Text
                        style={styles.buttonText}
                        onPress={() => this.selectDoc('passing')}>
                        Passing Certificates
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{...styles.button, marginTop: 40}}>
                      <Text
                        style={styles.buttonText}
                        onPress={() =>
                          this.submit(this.state.pass, 'Neet Score Card')
                        }>
                        Upload
                      </Text>
                    </TouchableOpacity>
                  </View>
                </ProgressStep>
                <ProgressStep label="Other Documents">
                  <View style={{alignItems: 'center'}}>
                    <Text style={{...styles.pdf, marginTop: 10}}>
                      {this.state.other.name}
                    </Text>
                    <TouchableOpacity style={styles.button}>
                      <Text
                        style={styles.buttonText}
                        onPress={() => this.selectDoc('other')}>
                        Other Documents
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{...styles.button, marginTop: 40}}>
                      <Text
                        style={styles.buttonText}
                        onPress={() =>
                          this.submit(this.state.other, 'Other Documents')
                        }>
                        Upload
                      </Text>
                    </TouchableOpacity>
                  </View>
                </ProgressStep>
              </ProgressSteps>
            ) : (
              <View>
                <ScrollView style={{height: 500}}>
                  <View
                    style={{
                      marginTop: 30,
                      alignSelf: 'center',
                      width: '75%',
                      flex: 1,
                    }}>
                    <Text style={{...styles.textSize}}>
                      Hello,{' '}
                      <Text style={styles.boldFont}>{this.state.name}</Text>
                    </Text>
                    <Text style={styles.textSize}>
                      Thanks For connection us for MBBS IN BANGLADESH. Please
                      see the GPA Result{' '}
                    </Text>
                    <Text style={{...styles.textSize, marginTop: 20}}>
                      <Text style={styles.boldFont}>
                        Your Class 10/SSC/X/O Level GPA
                      </Text>{' '}
                      : {roundGPA1}{' '}
                    </Text>
                    <Text style={styles.textSize}>
                      <Text style={styles.boldFont}>
                        Your Class 12/HSC/XII/A Level GPA{' '}
                      </Text>{' '}
                      : {roundGPA2}
                    </Text>
                    <Text style={styles.textSize}>
                      <Text style={styles.boldFont}>Your Total GPA</Text> :{' '}
                      {totalGpa}{' '}
                    </Text>
                    <Text style={styles.textSize}>
                      <Text style={styles.boldFont}>
                        Eligibilty criteria match
                      </Text>{' '}
                      : {resultGPA}
                    </Text>
                    <Text
                      style={{
                        ...styles.boldFont,
                        ...styles.textSize,
                        marginTop: 20,
                      }}>
                      Feel free to contact us for Admission Assistance on the
                      contact details provided below :{' '}
                    </Text>

                    <View style={styles.bottomContent}>
                      <View style={{width: '97%', alignSelf: 'center'}}>
                        <Text style={styles.thanksTextColor}>Contact Us</Text>
                        <Text style={styles.thanksTextColor}>
                          Smile Education Consultancy
                        </Text>
                        <Text style={styles.thanksTextColor}>
                          Address : 4, Santoshpur Lake West Road Arambagh
                        </Text>
                        <Text style={styles.thanksTextColor}>
                          Food Mart Building (3rd Floor)
                        </Text>
                        <Text style={styles.thanksTextColor}>
                          (Near Santoshpur Lake Shiv Mandir) Jadavpur, Kolkata,
                        </Text>
                        <Text style={styles.thanksTextColor}>
                          West Bengal 700075{' '}
                        </Text>
                        <Text style={styles.thanksTextColor}>
                          Landline : (033) 4062 8147{' '}
                        </Text>
                        <Text style={styles.thanksTextColor}>
                          Call: 091633-22-22{' '}
                        </Text>
                        <Text style={styles.thanksTextColor}>
                          Mobile : 903864-3838, 983126-3838, 988312-3838{' '}
                        </Text>
                      </View>
                    </View>
                  </View>
                </ScrollView>
              </View>
            )
          ) : (
            <View style={{marginTop: 30}}>
              <Text
                style={{
                  marginHorizontal: 25,
                  fontSize: 30,
                  textAlign: 'center',
                }}>
                Your Application Is In Process
              </Text>
              <Text
                style={{
                  marginTop: 20,
                  marginHorizontal: 25,
                  fontSize: 30,
                  textAlign: 'center',
                }}>
                Please Wait for Smile Education Consultancy to process your
                result
              </Text>
            </View>
          )}
        </View>
        <Spinner
          visible={this.state.visible}
          color="#00ff00"
          tintColor="#00ff00"
          cancelable={false}
          textStyle={{color: '#FFF'}}
        />
      </View>
    );
  }
}
