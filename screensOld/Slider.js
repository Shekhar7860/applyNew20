import React from 'react';
//import react in project
import { StyleSheet, View, Text, Image } from 'react-native';
//import all the required component
import AppIntroSlider from 'react-native-app-intro-slider';
//import AppIntroSlider to use it
import Service from './Service';
const slides = [
  {
    key: 's1',
    text: ` 1. Monno Medical College${"\n"} 2. Dhaka National Medical College${"\n"} 3. Barind Medical College (BMC)${"\n"} 4. Bangladesh Medical College ${"\n"} 5. Eastern Medical College`,
    title: 'Top 5 Medical Colleges in Bangladesh',
    image: {
      uri:
        'https://www.mbbsbangladesh.com/wp-content/uploads/2019/06/doctor-2-1-1.jpg',
    },
    backgroundColor: '#00684D',
  },
  {
    key: 's2',
    title: 'Top 3 Women Medical colleges in Bangladesh',
    text: ` 1. Medical College for Women and Hospital ${"\n"} 2. Kumudini Women’s Medical College ${"\n"} 3. Sylhet Women’s Medical College Hospital`,
    image: {
      uri:
        'https://www.mbbsbangladesh.com/wp-content/uploads/2019/06/doctor-2-1-1.jpg',
    },
    backgroundColor: '#00684D',
  },
  {
    key: 's3',
    title: 'MBBS Admission Process',
    text: 'Low Cost MBBS admission in Bangladesh No Donation Direct admission, MBBS admission in Bangladesh is best option for Indian Students. Smile Education Consultancy only SAARC authorized admission consultant in India. We provides Medical admission in UG and PG level. Official website contain all the necessary admission related information for MBBS M.D/M.S PG Medical PhD program in Bangladesh.',
    image: {
      uri: 'https://www.mbbsbangladesh.com/wp-content/uploads/2019/06/doctor-2-1-1.jpg',
    },
    backgroundColor: '#00684D',
  },
 
  
];
export default class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
      data : []
      //To show the main page of the app
    };
    service = new Service();
  }

  getList = () => {
    service.sliderData().then((res) => {
      console.log(res);
      console.log(res);
      const regex = /(<([^>]+)>)/ig;
      for(i=0; i< res.length ; i++) {
        console.log(res[i].title.rendered, 'sjjsj')
        console.log(res[i].content.rendered, 'sjjsj')
       
        this.state.data.push({title : res[i].title.rendered, text : res[i].content.rendered.replace(regex, ''), image: {
          uri: "https://www.mbbsbangladesh.com/wp-content/uploads/2019/06/doctor-2-1-1.jpg"},  backgroundColor: '#22bcb5'})
      }

      console.log(this.state.data, 'arra')
      // if(res.status_code)
      // {
      //     if(res.status == "success")
      //     {
      //       this.refs.defaultToastBottom.ShowToastFunction('Login Successfully');
      //       // service.saveUserData('user', res.user-details);
      //       this.goToHome();
      //     }
      //     else
      //     {
      //       this.refs.defaultToastBottom.ShowToastFunction('Wrong Mobile Or Password');
      //     }
      // }
      // else 
      // {
      //   this.refs.defaultToastBottom.ShowToastFunction('Network Error');
      // }

      })
  }
  componentDidMount = () => {
    this.getList();
  }
  _onDone = () => {
    this.props.navigation.navigate('Welcome')
  };
  _onSkip = () => {
    this.props.navigation.navigate('Welcome')
  };
  _renderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 10
        }}>
        <Text style={styles.title}>{item.title}</Text>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  render() {
    //If false show the Intro Slides
    if (this.state.showRealApp) {
      //Real Application
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 50,
          }}>
          <Text>
            This will be your screen when you click Skip from any slide or Done
            button at last
          </Text>
        </View>
      );
    } else {
      //Intro slides
      return (
        <AppIntroSlider
          slides={slides}
          renderItem={this._renderItem}
          onDone={this._onDone}
          showSkipButton={true}
          onSkip={this._onSkip}
        />
      );
    }
  }
}
const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 16,
    color: 'white',
    paddingVertical: 30,
    width:"70%", 
    alignSelf : 'center'
  },
  title: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
  },
});
 
