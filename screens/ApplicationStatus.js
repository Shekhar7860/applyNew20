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
  FlatList,
  Button,
} from 'react-native';
import styles from './styles.js';
import Spinner from 'react-native-loading-spinner-overlay';
import Service from './Service';
import RNFetchBlob from 'rn-fetch-blob';
import {PermissionsAndroid, Alert} from 'react-native';

export default class ApplicationStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      documentation: false,
      resultGPA: false,
      invitationLetter: false,
      invitationLetterUrl: '',
      feesSubmitted: false,
      gpaMessage: 'Pending',
      docMessage: 'Pending',
      letterMessage: 'Pending',
      collegeFeeSubmissionMessage: 'Pending',
    };
    this.actualDownload = this.actualDownload.bind(this);
  }

  componentDidMount = () => {
    const {navigation} = this.props;
    navigation.addListener('willFocus', () => this.getData());
  };

  getData = () => {
    // this.setState({visible: true});
    service.getUserData('userData').then(res => {
      // console.log('localData', res);
      //  this.setState({visible: false});
      var data = JSON.parse(res);
      //  console.group('parsed Data', data);
      this.getApplicationStatus(data.id);
      this.setState({userId: data.id});
    });
  };
  getApplicationStatus = id => {
    console.log('data', id);
    this.setState({visible: true});
    service.getApplicationStatus(id).then(res => {
      this.setState({visible: false});
      var arr = [];
      for (let i in res) {
        arr.push(res[i]);
      }
      console.group('response', arr);
      if (arr.length !== 0) {
        if (arr[0].result_gpa == 'Complete') {
          this.setState({resultGPA: true});
        }
        if (arr[0].gpa_result_message.length !== 0) {
          this.setState({
            gpaMessage: arr[0].gpa_result_message[0],
          });
        }
        if (arr[0].document_uploaded_message.length !== 0) {
          this.setState({
            docMessage: arr[0].document_uploaded_message[0],
          });
        }
        if (arr[0].fees_submission_message.length !== 0) {
          this.setState({
            collegeFeeSubmissionMessage: arr[0].fees_submission_message[0],
          });
        }
        if (arr[0].invitation_letter_message.length !== 0) {
          this.setState({
            letterMessage: arr[0].invitation_letter_message[0],
          });
        }
        if (arr[0].college_fees_Submission == 'Complete') {
          this.setState({
            feesSubmitted: true,
          });
        }
        if (arr[0].invitation_letter == 'Complete') {
          this.setState({
            invitationLetter: true,
          });
        }

        if (arr[0].Documentation == 'Complete') {
          this.setState({documentation: true});
        }
        if (arr[0].invitation_letter !== 'Pending') {
          this.setState({
            invitationLetter: true,
            invitationLetterUrl: arr[0].invitation_letter_url,
          });
        }
      }

      //   this.setState({application: arr, title: 'Application Processing'});
      // console.group('ddd', arr);

      //   }
    });
  };

  downloadFile = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        this.actualDownload();
      } else {
        Alert.alert(
          'Permission Denied!',
          'You need to give storage permission to download the file',
        );
      }
    } catch (err) {
      console.warn(err);
    }
  };

  actualDownload = () => {
    const {dirs} = RNFetchBlob.fs;
    RNFetchBlob.config({
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        mediaScannable: true,
        title: `Mbbs-Invitation-Letter.pdf`,
        path: `${dirs.DownloadDir}/Mbbs-Invitation-Letter.pdf`,
      },
    })
      .fetch('GET', this.state.invitationLetterUrl, {})
      .then(res => {
        console.log('The file saved to ', res.path());
        Alert.alert('Letter Saved in Downloads');
      })
      .catch(e => {
        console.log(e);
      });
  };

  goToPage = screen => {
    this.props.navigation.navigate(screen);
  };

  goBack = () => {
    this.props.navigation.pop();
  };
  openMenu = () => {
    this.props.navigation.openDrawer();
  };
  render() {
    const {
      documentation,
      resultGPA,
      invitationLetter,
      invitationLetterUrl,
      feesSubmitted,
      collegeFeeSubmissionMessage,
      college_fees_Submission,
    } = this.state;
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
          <Text style={styles.toolbarTitle}>Application Status</Text>
          <TouchableOpacity onPress={() => this.openMenu()}>
            <Image
              style={{width: 30, marginRight: 10, height: 30}}
              source={require('../images/menu.png')}
            />
          </TouchableOpacity>
        </View>

        <ScrollView>
          <View style={{marginTop: 0}} />
          <View style={styles.commonRow}>
            <View style={styles.firstWidth} />
            <View style={styles.textWidth2}>
              <TouchableOpacity onPress={() => this.goToPage('SignUp')}>
                <Text style={styles.commonText}>GPA</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.secondWidth} />
            <View style={{flexDirection: 'row'}}>
              {resultGPA ? (
                <Image
                  style={{width: 30, marginRight: 10, height: 30}}
                  source={require('../images/check.png')}
                />
              ) : null}
              <Text style={styles.commonText}>{this.state.gpaMessage}</Text>
            </View>
          </View>
          <View style={styles.commonRow}>
            <View style={styles.firstWidth} />
            <View style={styles.textWidth2}>
              <TouchableOpacity onPress={() => this.goToPage('Apply')}>
                <Text style={styles.commonText}>Documents</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.secondWidth} />
            <View style={{flexDirection: 'row'}}>
              {documentation ? (
                <Image
                  style={{width: 30, marginRight: 10, height: 30}}
                  source={require('../images/check.png')}
                />
              ) : null}
              <Text style={styles.commonText}>{this.state.docMessage}</Text>
            </View>
          </View>

          <View style={styles.commonRow}>
            <View style={styles.firstWidth} />
            <View style={styles.textWidth2}>
              <Text style={styles.commonText}>Offer Letter</Text>
            </View>
            <View style={styles.secondWidth} />
            <View style={{flexDirection: 'column'}}>
              <View style={{flexDirection: 'row'}}>
                {invitationLetter ? (
                  <Image
                    style={{width: 30, marginRight: 10, height: 30}}
                    source={require('../images/check.png')}
                  />
                ) : null}
                <Text style={styles.commonText}>
                  {this.state.letterMessage}
                </Text>
              </View>
              <View style={{marginTop: 10, width: '50%', alignSelf: 'center'}}>
                {invitationLetter ? (
                  <Button onPress={this.downloadFile} title="Download" />
                ) : null}
              </View>
            </View>
          </View>
          <View style={styles.commonRow}>
            <View style={styles.firstWidth} />
            <View style={styles.textWidth2}>
              <Text style={styles.commonText}>College Fees</Text>
            </View>
            <View style={styles.secondWidth} />
            <View style={{flexDirection: 'row'}}>
              {feesSubmitted ? (
                <Image
                  style={{width: 30, marginRight: 10, height: 30}}
                  source={require('../images/check.png')}
                />
              ) : null}
              <Text style={styles.commonText}>
                {this.state.collegeFeeSubmissionMessage}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
