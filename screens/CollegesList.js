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
  FlatList,
  Dimensions,
} from 'react-native';
import styles from './styles.js';
import Service from './Service';
import Spinner from 'react-native-loading-spinner-overlay';
export default class CollegesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collegesList: [],
    };
    service = new Service();
  }

  componentDidMount = () => {
    const {navigation} = this.props;
    navigation.addListener('willFocus', () => this.getCollegesList());
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  };

  getCollegesList = () => {
    this.setState({visible: true});
    service.getCollegesList().then(res => {
      this.setState({visible: false});
      console.group('res is', res);
      let list = [];
      for (let arr in res) {
        list.push(res[arr]);
      }
      // console.group('d', list);
      this.setState({collegesList: list});
    });
  };
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }
  openMenu = () => {
    this.props.navigation.openDrawer();
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
        <Spinner
          visible={this.state.visible}
          color="#00ff00"
          tintColor="#00ff00"
          animation={'fade'}
          cancelable={false}
          textStyle={{color: '#FFF'}}
        />
        <View style={styles.toolbar}>
          <Text style={styles.toolbarButton} />
          <Text style={styles.toolbarTitle}>Colleges List</Text>
          <TouchableOpacity onPress={() => this.openMenu()}>
            <Image
              style={{width: 30, marginRight: 10, height: 30}}
              source={require('../images/menu.png')}
            />
          </TouchableOpacity>
        </View>

        <ScrollView>
          <View style={{marginTop: 20, marginHorizontal: 20}}>
            <FlatList
              data={this.state.collegesList}
              renderItem={({item, index}) => (
                <View style={{marginTop: 20}}>
                  <Text style={styles.item}>
                    {index + parseInt(1)}. {item.title}
                  </Text>
                  <Image
                    source={{uri: item.featured_img}}
                    style={{
                      alignSelf: 'center',
                      width: 300,
                      height: 300,
                      marginTop: 20,
                    }}
                  />
                </View>
              )}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
