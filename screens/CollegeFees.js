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
} from 'react-native';
import styles from './styles.js';
import Spinner from 'react-native-loading-spinner-overlay';
import Service from './Service';

export default class CollegeFees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collegesFeeList: [],
    };
  }

  componentDidMount = () => {
    this.getCollegesFees();
  };

  getCollegesFees = () => {
    this.setState({visible: true});
    service.getCollegesFees().then(res => {
      this.setState({visible: false});
      let list = [];
      for (let arr in res) {
        list.push(res[arr]);
      }
      console.group('res is', list);
      this.setState({collegesFeeList: list});
    });
  };
  goBack = () => {
    this.props.navigation.pop();
  };
  openMenu = () => {
    this.props.navigation.openDrawer();
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
          <Text style={styles.toolbarTitle}>CollegeFees</Text>
          <TouchableOpacity onPress={() => this.openMenu()}>
            <Image
              style={{width: 30, marginRight: 10, height: 30}}
              source={require('../images/menu.png')}
            />
          </TouchableOpacity>
        </View>

        <ScrollView>
          <View style={{marginTop: 0}}>
            <FlatList
              data={this.state.collegesFeeList}
              renderItem={({item, index}) => (
                <>
                  <View style={{marginHorizontal: 20, marginTop: 20}}>
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
                  <View style={{marginHorizontal: 30}}>
                    <Text>
                      {'\n'}
                      Fees- {item.fees[0]}
                      {'\n'}
                      {'\n'}First Year Payment - {item.first_year_payment[0]}
                      {'\n'}
                      {'\n'}Hostel Fees - {item.hostel_fees[0]}
                    </Text>
                  </View>
                </>
              )}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
