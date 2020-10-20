// global styles 
import {colors, fonts, padding, dimensions, align} from './base.js'
import {StyleSheet, Platform} from 'react-native';
export default styles = StyleSheet.create({
  container: {
    width: dimensions.fullWidth
  },
  header: {
    fontSize: fonts.lg,
    fontFamily: fonts.primary
  },
  section: {
    paddingVertical: padding.lg,
    paddingHorizontal: padding.xl
  },
  signUpFont: {
    color:colors.red,
    fontSize:padding.ms
  },
  container: {
    flex: 1,
    resizeMode: 'cover'
  },
  loginText: {
    color:colors.red,
    padding:padding.sm,
    width:42
    },
    alignrow:{
      flexDirection:'row',
      flex:1,  
    },
     textStyle:{  
        margin: 24,  
        fontSize: 25,  
        fontWeight: 'bold',  
        textAlign: 'center',  
    },  
    pickerStyle:{  
        height: 50,  
        width: "80%",  
        color: '#344953',  
        justifyContent: 'center',  
    }  ,
    col:{
      flexDirection:'row',
       flexWrap:'wrap'
    },
    cardContainer:{
     width:'80%',
     backgroundColor:"#f8f8f8",
     padding:padding.sm,
     height:225,
     borderColor: colors.transparent,
     borderWidth: 1,
     marginTop:-padding.sm,
     borderRadius:10
    }, 
    messageBox:{
      width:'90%',
      paddingTop:5,
      alignItems:align.center,
      height:240
  },
  messageBoxTitleText:{
      fontWeight:'bold',
      color:colors.white,
      textAlign:align.center,
      fontSize:20,
      marginBottom:padding.sm
  },
  toolbar:{
    backgroundColor:'#588029',
    paddingTop:20,
    paddingBottom:10,
    flexDirection:'row'    //Step 1
},
toolbarButton:{
    width: 50,            //Step 2
    color:'#fff',
    textAlign:'center'
},
toolbarTitle:{
    color:'#fff',
    textAlign:'center',
    fontWeight:'bold',
    flex:1,
    fontSize:20                //Step 3
},
  messageBoxBodyText:{
      color:colors.white,
      fontSize:16
  },
  textContainer:{
    paddingTop:15,
    width:'95%',
    alignItems:'flex-end',
  },
  imgContainer:{
    padding:padding.sm,
    width:'90%',
    alignItems:'flex-start',
  },
  topText:{
    color:colors.white,
    textAlign:'left',
    fontSize:20,
    fontWeight:'bold'
  },
  splashLoading:{
    flex:1,
  justifyContent:align.center
  },
  imageContainer:{
    paddingTop:5,
    alignItems:align.center,
  },
  imageWidth:{
  },
  centerAlign :{
   alignItems:align.center,
   paddingTop:70,
  },
  loginText:{
    color:colors.red,
  },
  textBorder:{
    borderBottomColor: colors.red,
    borderBottomWidth: 1
  },
  borderWidth : {
    paddingTop:2,
    width:42
  },
  borderWidthSignUp : {
    paddingTop:2,
    width:50
  },
  borderWidthForgot : {
    paddingTop:2,
    width:127
  },
  textInputContainer:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.white,
  },
  textInputContainer2:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.white,
    paddingTop:padding.sm
  },
  iconWidth:{
    width:30,
    height:30
  },
  float:{
    flex: 1, 
    backgroundColor: '#f5fcff'
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: align.center,
    alignItems: align.center,
    backgroundColor: colors.white,
},
searchIcon: {
    padding: padding.sm,
},
otpButton:{
  marginTop:25,
  backgroundColor:colors.themeColor,
  width:"70%",
  borderRadius:25,
  height:40,
  alignItems:align.center,
  justifyContent:align.center,
  borderWidth:1
},
accountButtonText:{
  fontSize:15,
  color:colors.white,
  fontFamily: fonts.themeFont,
},
boldFont : {
  fontWeight : "bold"
},
textSize : {
  fontSize : 12,
  marginTop : 5
},
lookingButtonBackground:{
  marginTop:25,
  backgroundColor:colors.themeColor,
  width:"70%",
  borderWidth :1,
  borderRadius:25,
  height:40,
  justifyContent:align.center,
  alignItems : 'center'
},
bottomContent : {
  backgroundColor : '#00684D',
  marginTop : 20
},
thanksTextColor : {
  marginTop : 2,
  marginLeft : 2,
  color : 'white',
  fontSize : 12
},
input: {
    flex: 1,
    paddingTop: padding.sm,
    paddingRight: padding.sm,
    paddingBottom: padding.sm,
    paddingLeft: 0,
    backgroundColor: colors.white,
   borderWidth :1
},
icon:{
  width:20,
  height:20,
  marginTop:12
},
socialIcon:{
  width:40,
  height:40,
  marginTop:12
},
border:{
  borderBottomColor: colors.black,
  borderBottomWidth: 1,
  flex:1
},
rowAlign:{
  flexDirection:'row',
  borderBottomColor: colors.black,
  borderBottomWidth: 1
},
loginContainer:{
  alignItems:align.center
},
buttonWidth:{
  width:300,
  alignItems:align.center
},
loginbutton:{
backgroundColor:colors.red,
color:colors.white,
width:70,
textAlign:align.center,
height:30,
borderRadius:padding.sm,
position:'relative',
bottom:14,
paddingTop:4,
 },
 center:{
   paddingTop:20,
   alignItems:align.center
 },
 connect:{
  paddingTop:20,
  alignItems:align.center,
  width:'40%'
},
 borderWidth2 : {
  paddingTop:2,
  width:128
},
textBorder2:{
  borderBottomColor: colors.black,
  borderBottomWidth: 1
},
rowAlign2:{
  flexDirection:'row',
  alignItems:align.center
},
rowAlign3:{
  flexDirection:'row',
  alignItems:align.center,
  paddingTop:5
},
container1: {
  justifyContent: 'center',
  alignItems: 'center',
},
inputBox: {
  width: 300,
 
  borderRadius: 25,
  paddingHorizontal: 16,
  fontSize: 16,
  color: '#95a5a6',
  marginVertical: 5
},
button: {
  width: 300,
  backgroundColor: '#588029',
  borderRadius: 25,
  marginVertical: 10,
  paddingVertical: 12,
  marginTop:20,
  height:50
},
buttonText: {
  fontSize: 16,
  fontWeight: '500',
  color: '#ffffff',
  textAlign: 'center'
},
textCenter:{
  textAlign:align.center
},
borderWidth3 : {
  paddingTop:18,
  width:'20%'
},
bottomText:{
  alignItems:align.center,
  paddingTop:padding.sm
},
cardContainerSignUp:{
  width:'80%',
  padding:padding.sm,
  borderColor: colors.black,
  borderWidth: 1,
  marginTop:-30,
  backgroundColor:colors.white,
 },
 cardContainerForgot:{
  width:'80%',
  padding:padding.sm,
  height:220,
  borderColor: colors.black,
  borderWidth: 1,
  marginTop:-40,
  backgroundColor:colors.white,
 },
 topSpace:{
   marginTop:0
 },
 signUpButton:{
  backgroundColor:colors.red,
  color:colors.white,
  width:83,
  textAlign:align.center,
  height:30,
  borderRadius:padding.sm,
  position:'relative',
  bottom:13,
  paddingTop:5,
   },
   forgotText:{
     paddingTop:padding.md,
     width:'100%'
   },
   hamburgerIcon:{
     width:30,
     height:30,
    marginLeft:25},
    searchIcon:{
      width:30,
      height:30,
     marginRight:25},
     homeContent:{
       alignItems:align.center,
       width:'100%'
     },
     cardImage:{
       width:'90%',
       height:220,
       borderRadius:25,
     },
     sideMenu:{
     alignItems:align.center,
     },
    profilePic:{
      marginTop:20,
      borderRadius:100,
      width:120,
     height:120,
     alignSelf : 'center'
    },
    userName:{
      paddingTop:padding.sm,
      color:colors.white
    },
    error:{
      color:colors.red,
      paddingTop:5
    },
    MainContainer :{
    
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: (Platform.OS == 'ios') ? 20 : 0,
      margin:10
       
      },
       
      animatedToastView:
      {
         marginHorizontal: 30,
         paddingHorizontal: 25,
         paddingVertical: 10,
         borderRadius: 25,
         zIndex: 9999,
         position: 'absolute',
         justifyContent: 'center'
      },
      
      ToastBoxInsideText:
      {
         fontSize: 15,
         alignSelf: 'stretch',
         textAlign: 'center'
      },
      toast:{
        alignItems:align.center,
        marginTop:-40
      },
      modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#00000040'
      },
      activityIndicatorWrapper: {
        backgroundColor: '#FFFFFF',
        height: 100,
        width: 100,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
      },
      footer:{
        position:'absolute',
        top:560
      },
      staticIcon:{
        width:25,
        height:20
      },
      forgotText:{
       paddingTop:padding.sm
      },
      textWidth:{
        width:'100%'
      },
      iconsAlign:{
      flexDirection:'row'
      
      },
      shareIcon:{
        width:25,
        height:25
      },
      viewWidth:{
        width:'42%'
      },
      viewWidthEmpty:{
        width:'16%'
      },
      rightAlign:{
        textAlign:'right'
      },
      white:{
        color:colors.white
      },
      topPadding:{
        paddingTop:padding.md
      },
      topMargin:{
        paddingTop:padding.sm
      },
      list:{
       
        flexDirection:'row',
        marginTop:20,
        flexWrap:'nowrap'
      },
      listIconsWidth:{
      width:'25%'
    },
    listItemsBlank:{
      width:10
    },
    listTextWidth:{
      width:230
    },
    listIconsWidth2:{
      width:60
    },
    listTextWidth2:{
      width:'60%'
    },
    listToggleIconWidth2:{
      width:'10%'
    },
    toggleIcon:{
      width:100,
      height:50
    },
    listTextFontSize:{
      fontSize:20,
      textAlign: "left",
      display:'flex'
    },
    switch:{
      width:70
    },
    cameraIcon:{
      position:'absolute', 
      bottom:20,
      width:35,
      top:62,
      left:164,
      height:35,
      overflow:'hidden'
    },
    footer:{
      position:'absolute',
      bottom : 5,
      width : '100%'
    }
    
    
      

})