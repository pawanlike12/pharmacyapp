//import liraries
import React, { Component } from "react";
import {
  Dimensions,
  Image,
  TextInput,
  PixelRatio,
  StyleSheet,
  View,
  Animated,
  TouchableOpacity,
  StatusBar,
  ImageBackground
} from 'react-native';
import tvShowContent from '../../assets/tvShowContent';
import { Header } from 'react-navigation-stack';
import * as Animatable from 'react-native-animatable';
import { DrawerActions } from "react-navigation-drawer";
import { Text, Appbar, Title, Avatar, Card } from "react-native-paper";
import MenuImage from '../components/MenuImage/MenuImage';
import Carousel from "react-native-snap-carousel";
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import ListView from 'deprecated-react-native-listview'
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
// import {  ScrollView, TouchableHighlight,  } from 'react-native-gesture-handler';

const MIN_HEIGHT = Header.HEIGHT;
const MAX_HEIGHT = 60;

const dummyData = [
  {
    imageUrl: "http://lorempixel.com/400/200/food",
    title: "Burgers"
  },
  {
    imageUrl: "http://lorempixel.com/400/200/food",
    title: "Shakes"
  },
  {
    imageUrl: "http://lorempixel.com/400/200/food",
    title: "Sandwhichs"
  },
  {
    imageUrl: "http://lorempixel.com/400/200/food",
    title: "Continetial"
  },
  {
    imageUrl: "http://lorempixel.com/400/200/food",
    title: "chinees"
  },
  {
    imageUrl: "http://lorempixel.com/400/200/food",
    title: "Local Food"
  }
];

const dummyRestaurant = [
  {
    imageUrl: "http://lorempixel.com/400/200/nightlife",
    title: "Ten Dowing Street",
    place: "Vijay Nagar"
  },
  {
    imageUrl: "http://lorempixel.com/400/200/nightlife",
    title: "Boozer's Bar & Restaurant",
    place: "Vijay Nagar"
  },
  {
    imageUrl: "http://lorempixel.com/400/200/nightlife",
    title: "Calypso Club & Lounge",
    place: "Vijay Nagar"
  },
  {
    imageUrl: "http://lorempixel.com/400/200/nightlife",
    title: "Trance Pub",
    place: "Vijay Nagar"
  },
  {
    imageUrl: "http://lorempixel.com/400/200/nightlife",
    title: "Vidoora",
    place: "Vijay Nagar"
  },
  {
    imageUrl: "http://lorempixel.com/400/200/nightlife",
    title: "Mustang Lounge",
    place: "Vijay Nagar"
  },
  {
    imageUrl: "http://lorempixel.com/400/200/nightlife",
    title: "Quaram Lounge",
    place: "Vijay Nagar"
  },
  {
    imageUrl: "http://lorempixel.com/400/200/nightlife",
    title: "Bottom Sip & Bar",
    place: "Vijay Nagar"
  },
  {
    imageUrl: "http://lorempixel.com/400/200/nightlife",
    title: "Tabrena The Cafe Bar",
    place: "Vijay Nagar"
  },
  {
    imageUrl: "http://lorempixel.com/400/200/nightlife",
    title: "Pitchers Cafe and Bar",
    place: "Vijay Nagar"
  }
];

const HEADER_MAX_HEIGHT = 300;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 73;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
class HomeScreen extends Component {
  constructor() {
    super();
    this.state = { showNavTitle: false };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <HeaderImageScrollView
          maxHeight={MAX_HEIGHT}
          minHeight={MIN_HEIGHT}
          maxOverlayOpacity={0.6}
          minOverlayOpacity={0.3}
          fadeOutForeground
          renderHeader={() => <Image source={tvShowContent.image} style={styles.image} />}
          renderFixedForeground={() => (
            <Animatable.View
              style={styles.navTitleView}
              ref={navTitleView => {
                this.navTitleView = navTitleView;
              }}
            >
              <View style={styles.inputContainer}>
                  <Image style={styles.inputIcon} source={require('../../assets/icons/search.png')}/>
                        <TextInput style={styles.inputs}
                            placeholder="Search"
                            keyboardType="email-address"
                            underlineColorAndroid='transparent'
                            onChangeText={(firstName) => this.setState({firstName})}/>
              </View>
            </Animatable.View>
          )}
          renderForeground={() => (
            <View style={styles.headerContainer}>
                
            <View style={styles.leftHeader}>
               <TouchableOpacity
                onPress={() =>
                  this.props.navigation.dispatch(DrawerActions.toggleDrawer({
                    
                  }))
                  
                }>
               <Image source={require("../../assets/icons/TOP-3.png")} style={styles.headericon} />
                 </TouchableOpacity> 
              
              
             </View>
             
            
             <View style={styles.rightHeader}>
               <TouchableOpacity
                >
               <Image source={require("../../assets/icons/TOP-1.png")} style={styles.headericon} />
               </TouchableOpacity>
                 
                 <Image source={require("../../assets/icons/TOP-2.png")} style={[styles.headericon,{marginRight:0}]} />
             </View>
             
          </View>
          )}
        >
          <TriggeringView
            
            onHide={() => this.navTitleView.fadeInUp(200)}
            onDisplay={() => this.navTitleView.fadeOut(100)}
          >
            <ImageBackground source={require('../../assets/halfscreen.png')} style={[styles.section ,{width: '100%',resizeMode: 'cover', }]}>
            <View style={styles.inputContainer}>
                  <Image style={styles.inputIcon} source={require('../../assets/icons/search.png')}/>
                        <TextInput style={styles.inputs}
                            placeholder="Search"
                            keyboardType="email-address"
                            underlineColorAndroid='transparent'
                            onChangeText={(firstName) => this.setState({firstName})}/>
              </View>
              <View style={styles.bigIcons}>
                   <View >
                      <TouchableOpacity>
                      <Image source={require("../../assets/icons/75-1.png")} style={styles.Viewicon} />
                      <Text style={{color:"#fff"}}>Personal Care</Text>
                      </TouchableOpacity>
                      
                   </View>
                   <View >
                      <Image source={require("../../assets/icons/75-3.png")} style={styles.Viewicon} />
          <Text style={{color:"#fff",textAlign:"center"}}>{"Doctor \n Consultation"}</Text>
                   </View>
                   <View >
                      <Image source={require("../../assets/icons/75-4.png")} style={styles.Viewicon} />
                      <Text style={{color:"#fff",textAlign:"center"}}>{"Health \n Condition"}</Text>
                   </View>
               </View>
               <View style={[styles.bigIcons,{justifyContent:"space-evenly"}]}>
                   <View >
                      <Image source={require("../../assets/icons/75-5.png")} style={styles.Viewicon} />
                      <Text style={{color:"#fff",textAlign:"center"}}>{"Fitness \n & Suppliments"}</Text>
                   </View>
                   <View >
                      <Image source={require("../../assets/icons/75-6.png")} style={styles.Viewicon} />
                      <Text style={{color:"#fff",textAlign:"center"}}>{"Offer Zone"}</Text>
                   </View>
                   
                   
               </View>
            </ImageBackground>
            
          </TriggeringView>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Overview</Text>
            <Text style={styles.sectionContent}>{tvShowContent.overview}</Text>
          </View>
          <View style={[styles.section, styles.sectionLarge]}>
            <Text style={styles.sectionTitle}>Keywords</Text>
            <View style={styles.keywords}>
              {tvShowContent.keywords.map(keyword => (
                <View style={styles.keywordContainer} key={keyword}>
                  <Text style={styles.keyword}>{keyword}</Text>
                </View>
              ))}
            </View>
          </View>
        </HeaderImageScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: MAX_HEIGHT,
    width: Dimensions.get('window').width,
    alignSelf: 'stretch',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 20,
  },
  name: {
    fontWeight: 'bold',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionContent: {
    fontSize: 16,
    textAlign: 'justify',
  },
  keywords: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  keywordContainer: {
    backgroundColor: '#999999',
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
  keyword: {
    fontSize: 16,
    color: 'white',
  },
  titleContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageTitle: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 24,
  },
  navTitleView: {
    height: MIN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 16,
    opacity: 0,
  },
  navTitle: {
    color: 'white',
    fontSize: 18,
    backgroundColor: 'transparent',
  },
  sectionLarge: {
    height: 600,
  },
  headericon:{
    width:32,
    height:32,
    marginRight:20,
    resizeMode:"contain",
    
    
  },
  headerContainer:{
      width:"100%",
      height:60,
      paddingLeft:20,
      paddingRight:20,
      paddingTop:12,
      // position:"absolute",
      // top:0,
      flexDirection:"row",
      justifyContent:"space-between",
      backgroundColor:"#e22034",
      zIndex:11
  },
  leftHeader:{
      width:"50%",
      flexDirection:'row',
      alignItems:"flex-start"
      
  },
  rightHeader:{
    width:"50%",
    flexDirection:"row",
    justifyContent:"flex-end"
    // alignItems:"flex-start"
},
inputIcon:{
  width:22,
  height:22,
  // marginLeft:1,
  // resizeMode:"contain",
  marginLeft:10,
  marginRight:10

},

Viewicon:{
  width:80,
  height:80,
  resizeMode:"contain",
},

inputContainer: {
  // borderBottomColor: '#F5FCFF',
  backgroundColor: '#fff',
  borderRadius:5,
  borderColor:'#02a8ee',
  // margin: 20,
  fontFamily:"roboto",
  borderWidth: 1,
  height:45,
  marginBottom:10,
  // marginTop:10,
  flexDirection: 'row',
  alignItems:'center',
  width:"100%"
},
bigIcons:{
    
  width:"100%",
  // padding:20,
  flexDirection:"row",
  alignItems:"center",
  justifyContent:"space-between",
  paddingTop:0,
  

},
});
//make this component available to the app
export default HomeScreen;
