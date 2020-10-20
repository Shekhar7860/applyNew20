import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {
  ScrollView,
  TouchableOpacity,
  Text,
  View,
  Alert,
  Linking,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import Service from './Service';

class DrawerContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: [
        {screen: 'Profile Screen', title: 'Profile', icon: 'person'},
        {
          screen: 'GPA Calculator Screen',
          title: 'GPA Calculator',
          icon: 'checklist',
        },
        {
          screen: 'College Fees Screen',
          title: 'College Fees Screen',
          icon: 'file-submodule',
        },
        {
          screen: 'Colleges List Screen',
          title: 'Colleges List Screen',
          icon: 'list-ordered',
        },
        {screen: 'Apply Screen', title: 'Apply Screen', icon: 'broadcast'},
        {screen: 'Log Out Screen', title: 'Log Out', icon: 'home'},
      ],
    };
    service = new Service();
  }

  navigateToScreen = route => () => {
    console.log(route);
    if (route == 'Log Out Screen') {
      Alert.alert(
        'Log Out',
        'Are you Sure? You want to Log Out',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => this.exit(),
          },
        ],
        {
          cancelable: false,
        },
      );
    } else if (route == 'GPA Calculator Screen') {
      this.props.navigation.navigate('SignUp');
    } else if (route == 'College Fees Screen') {
      this.props.navigation.navigate('CollegeFees');
    } else if (route == 'Colleges List Screen') {
      this.props.navigation.navigate('CollegesList');

      //  Linking.openURL(
      //    'https://www.mbbsbangladesh.com/list-of-medical-colleges',
      //  );
      // this.props.navigation.navigate('Apply');
    } else if (route == 'Apply Screen') {
      this.props.navigation.navigate('Apply');
    } else if (route == 'Profile Screen') {
      this.props.navigation.navigate('Profile');
    }
  };

  exit = () => {
    this.props.navigation.navigate('Login');
    service.clearLocalStorage();
  };
  renderChannelButtons() {
    return this.state.channels.map(({screen, title, icon}) => (
      <TouchableOpacity
        key={screen + title}
        onPress={this.navigateToScreen(screen)}>
        <View style={{flexDirection: 'row'}}>
          <Icon
            name={icon}
            size={20}
            color="white"
            style={{margin: 15, width: 20}}
          />
          <Text style={{color: 'white', marginTop: 17}}>{title}</Text>
        </View>
      </TouchableOpacity>
    ));
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <TouchableOpacity
          style={{alignSelf: 'flex-end', marginRight: 20}}
          onPress={() => this.props.navigation.closeDrawer()}>
          <Image
            style={{
              width: 25,
              marginLeft: 20,
              marginTop: 15,
              height: 25,
              tintColor: '#ffffff',
            }}
            source={require('../images/cancel.png')}
          />
        </TouchableOpacity>
        <ScrollView>{this.renderChannelButtons()}</ScrollView>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#444',
  },
};

export default DrawerContent;
