//import liraries
import React, { Component } from "react";
import {
  Dimensions,
  Image,
  TextInput,
  PixelRatio,
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';
import { DrawerActions } from "react-navigation-drawer";
import { Text, Appbar, Title, Avatar, Card } from "react-native-paper";
import MenuImage from '../components/MenuImage/MenuImage';
import Carousel from "react-native-snap-carousel";
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import ListView from 'deprecated-react-native-listview'
import {  ScrollView, TouchableHighlight,  } from 'react-native-gesture-handler';


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

HEADER_MAX_HEIGHT = 65;
HEADER_MIN_HEIGHT = 60;
PROFILE_IMAGE_MAX_HEIGHT = 80;
PROFILE_IMAGE_MIN_HEIGHT = 40;
// create a component
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state =  {
     
    };
  }
  render() {
    
    const { onScroll = () => {} } = this.props;
    return (
      
      <ParallaxScrollView
          onScroll={onScroll}

          headerBackgroundColor="#333"
          stickyHeaderHeight={ STICKY_HEADER_HEIGHT }
          parallaxHeaderHeight={ PARALLAX_HEADER_HEIGHT }
          backgroundSpeed={10}

          renderBackground={() => ( 
            
            <View key="background">
              
              <Image source={require('../../assets/halfscreen.png')} style={{ width: window.width, height: PARALLAX_HEADER_HEIGHT}} />
              <View style={{position: 'relative',
                            top: 0,
                            width: window.width,
                            // backgroundColor: 'rgba(0,0,0,.4)',
                            height: PARALLAX_HEADER_HEIGHT}}/>
            </View>
          )}

          renderForeground={() => (
            <View key="parallax-header" style={ styles.parallaxHeader }>
               <View style={styles.headerContainer}>
                
                 <View style={styles.leftHeader}>
                    <TouchableOpacity style={{height:40, width:40, backgroundColor:"#000"}}>
                    <Image source={require("../../assets/icons/TOP-3.png")} style={styles.headericon} />
                      </TouchableOpacity> 
                   
                   
                  </View>
                  
                 
                  <View style={styles.rightHeader}>
                    <TouchableOpacity>
                    <Image source={require("../../assets/icons/TOP-1.png")} style={styles.headericon} />
                    </TouchableOpacity>
                      
                      <Image source={require("../../assets/icons/TOP-2.png")} style={[styles.headericon,{marginRight:0}]} />
                  </View>
                  
               </View>
               <View >
               <View style={styles.searchbar}>
               
               <View style={styles.inputContainer}>
                  <Image style={styles.inputIcon} source={require('../../assets/icons/search.png')}/>
                        <TextInput style={styles.inputs}
                            placeholder="Search"
                            keyboardType="email-address"
                            underlineColorAndroid='transparent'
                            onChangeText={(firstName) => this.setState({firstName})}/>
              </View>
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
               </View>
               
            </View>
          )}

          renderStickyHeader={() => (
            <View key="sticky-header" style={styles.stickySection}>
              <View style={styles.inputContainer}>
                  <Image style={styles.inputIcon} source={require('../../assets/icons/search.png')}/>
                        <TextInput style={styles.inputs}
                            placeholder="Search"
                            keyboardType="email-address"
                            underlineColorAndroid='transparent'
                            onChangeText={(firstName) => this.setState({firstName})}/>
              </View>
            </View>
          )}

          />
    );
  }
}

// define your styles
const window = Dimensions.get('window');

const AVATAR_SIZE = 120;
const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = 400;
const STICKY_HEADER_HEIGHT = 70;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: window.width,
    height: PARALLAX_HEADER_HEIGHT
  },
  stickySection: {
    height: STICKY_HEADER_HEIGHT,
    width: "100%",
    justifyContent: 'flex-end',
    paddingLeft:20,
    paddingRight:20,
    backgroundColor:"#e22034"
  },
  stickySectionText: {
    color: 'white',
    fontSize: 20,
    margin: 10
  },
  fixedSection: {
    position: 'absolute',
    bottom: 10,
    right: 10
  },
  searchbar:{
    width:"100%",
    padding:20,
    paddingTop:10,
    
  },

  bigIcons:{
    
    width:"100%",
    padding:20,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    paddingTop:0,
    

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
  fixedSectionText: {
    color: '#999',
    fontSize: 20
  },
  parallaxHeader: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 0
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
  avatar: {
    marginBottom: 10,
    borderRadius: AVATAR_SIZE / 2
  },
  sectionSpeakerText: {
    color: 'white',
    fontSize: 24,
    paddingVertical: 5
  },
  sectionTitleText: {
    color: 'white',
    fontSize: 18,
    paddingVertical: 5
  },
  row: {
    overflow: 'hidden',
    paddingHorizontal: 10,
    height: ROW_HEIGHT,
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderBottomWidth: 1,
    justifyContent: 'center'
  },
  rowText: {
    fontSize: 20
  }
});

//make this component available to the app
export default HomeScreen;
