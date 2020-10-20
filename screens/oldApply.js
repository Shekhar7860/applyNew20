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

export default class Apply extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setApplicationId: '',
      userId: '',
      tenth: '',
      twelth: '',
      neet: '',
      pass: '',
      other: '',
      token: '',
      visble: false,
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
        this.setState({tenth: res});
      } else if (value == 'twelth') {
        v = 'Twelfth Document';
        this.setState({twelth: res});
      } else if (value == 'neet') {
        v = 'Neet Score Card';
        this.setState({neet: res});
      } else if (value == 'passing') {
        v = 'Passing Certificates';
        this.setState({pass: res});
      } else {
        v = 'Other Documents';
        this.setState({other: res});
      }
      this.upload(res, v);
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

  upload = (res, v) => {
    service
      .uploadDocuments(this.state.applicationId, res, this.state.token, v)
      .then(res => {
        console.group('res', res);
      });
  };

  getHomePageData = () => {
    service.getUserData('userData').then(res => {
      console.log('localData', res);
      var data = JSON.parse(res);
      console.log('parsed Data', data);
      this.getApplicationId(data.id);
      this.setState({userData: data, userId: data.id});
    });
    service.getUserData('tokenData').then(res => {
      console.log('localData', res);
      var data = JSON.parse(res);
      console.log('parsed Data', data);
      this.setState({token: data.token});
    });
  };

  getApplicationId = id => {
    service.getApplicationId(id).then(res => {
      console.group('applicationId', res);
      var arr = [];
      for (let i in res) {
        //  console.group('id is', res[i]);
        arr.push(res[i]);
      }
      console.group('ddd', arr);
      if (arr.length !== 0) {
        this.setState({applicationId: arr[0].ID});
      }
    });
  };
  openMenu = () => {
    this.props.navigation.openDrawer();
  };
  goBack = () => {
    this.props.navigation.pop();
  };

  submit = () => {
    if (
      this.state.tenth &&
      this.state.twelth &&
      this.state.neet &&
      this.state.pass &&
      this.state.other
    ) {
      this.setState({visible: true});
      setTimeout(() => {
        this.setState({visible: false});
        Alert.alert('Documents Uploaded Successfully');
      }, 3000);
    } else {
      Alert.alert('Please Select All Documents');
    }
  };
  render() {
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
          <Text style={styles.toolbarTitle}>Apply</Text>
          <TouchableOpacity onPress={() => this.openMenu()}>
            <Image
              style={{width: 30, marginRight: 10, height: 30}}
              source={require('../images/menu.png')}
            />
          </TouchableOpacity>
        </View>

        <ScrollView>
          <View style={{alignItems: 'center', marginTop: 20}}>
            <Text style={{fontSize: 18}}>Upload Documents</Text>
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

            <Text style={styles.pdf}>{this.state.twelth.name}</Text>
            <TouchableOpacity style={styles.button}>
              <Text
                style={styles.buttonText}
                onPress={() => this.selectDoc('twelth')}>
                12th Document
              </Text>
            </TouchableOpacity>

            <Text style={styles.pdf}>{this.state.neet.name}</Text>
            <TouchableOpacity style={styles.button}>
              <Text
                style={styles.buttonText}
                onPress={() => this.selectDoc('neet')}>
                Neet Score Card
              </Text>
            </TouchableOpacity>

            <Text style={styles.pdf}>{this.state.pass.name}</Text>
            <TouchableOpacity style={styles.button}>
              <Text
                style={styles.buttonText}
                onPress={() => this.selectDoc('passing')}>
                Passing Certificates
              </Text>
            </TouchableOpacity>

            <Text style={styles.pdf}>{this.state.other.name}</Text>
            <TouchableOpacity style={styles.button}>
              <Text
                style={styles.buttonText}
                onPress={() => this.selectDoc('other')}>
                Other Documents
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{...styles.button, marginTop: 10}}>
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
