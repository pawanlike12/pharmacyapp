//import liraries
import React, { Component } from 'react';
import { View,StyleSheet, TouchableOpacity, ImageBackground,Image } from 'react-native';
import {Title,TextInput,  Button,Text,ActivityIndicator,Colors} from 'react-native-paper';
import {emailChanged,passwordChanged,loginUser} from '../actions';
import {connect} from 'react-redux';
import {  ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen'
// create a component
class LoginScreen extends Component {
  
    // componentDidMount(){
    //     SplashScreen.show();
    //     setTimeout(function () {
    //       SplashScreen.hide();
    //   }, 4000);
    // }
    
    render() {
        return (

            <ImageBackground source={require('../../assets/screen_meds.png')} style={{width: '100%', height: '100%',resizeMode: 'cover', }}>
                <ScrollView>
                <View style={styles.container}>
                {/* <Title style={styles.title}>Sign In</Title> */}
                <ImageBackground source={require('../../assets/screen-2.png')} style={{width: '100%', height: '100%',resizeMode: 'cover', }}>
                   
                    <View style={styles.logincontainer}>
                       <View style={{width:"100%", alignItems:"flex-end"}}>


                           <Image source={require('../../assets/LOFO.png')} style={{width:100, height:40, resizeMode:"contain"}} /> 


                       </View>  
                       <View style={{width:"100%", marginTop:10}}>
                           <Text style={{fontSize:38}}>Login</Text>
                           <Text>Get Access your order, 
                               <Text style={{color:"#e22034"}}> medicine</Text> & 
                               <Text style={{color:"#e22034"}}>doctor consultation</Text>
                            </Text>
                            <View style={{width:"100%", marginTop:10}}>
                            <View style={styles.inputContainer}>
                                    <TextInput style={styles.input}
                                        placeholder="Mobile Number"
                                        keyboardType="email-address"
                                        underlineColorAndroid='#fff'
                                        onChangeText={(firstName) => this.setState({firstName})}/>
                            </View>
                            </View>
                            <Text><Text style={{color:"#e22034"}}>Dont't Have An Account?</Text> Sign up now</Text>

                            <View style={{width:"100%", margin:10, justifyContent:"center", flexDirection:"row"}} >
                               <Image source={require('../../assets/facebook.png')} style={{width:40, height:40, margin:20 }} />
                               <Image source={require('../../assets/twitter.png')} style={{width:40, height:40, margin:20 }} />
                               <Image source={require('../../assets/google.png')} style={{width:40, height:40, margin:20 }} />
                            </View>

                            <TouchableOpacity
                              style={{width:"100%"}}
                              onPress={() => {
                                this.props.navigation.navigate("Home");
                              }}>
                                <Image source={require('../../assets/button.png')} style={{width:"100%", height:40, resizeMode:"contain"}} />
                            </TouchableOpacity >

                       </View>
                       

                    </View>

                </ImageBackground>
               
            </View>
 
                </ScrollView>  
            </ImageBackground>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#ffffff',
        padding:15
    },
    logincontainer:{
        
        height:"100%",
        flex:1,
        margin:25,
        marginTop:65,
        padding:15
    },
    input:{

        height:45,
        // marginLeft:16,
        backgroundColor: '#FFFFFF',
        flex:1,
        borderBottomColor:"#e22034",
        borderBottomWidth:2

    },
    inputContainer: {
        // borderBottomColor: '#F5FCFF',
        backgroundColor: '#fff',
        borderRadius:5,
        height:45,
        marginBottom:30,
        marginTop:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    title:{
        alignItems:"flex-start",
        color:"#64d",
        fontWeight:"bold",
        fontSize:30
    },
    secondContainer:{
        margin:12,
    },
    loginbutton:{
        width:"100%",
        borderRadius:10,
        borderWidth:2
    },
    facebookbutton:{
        width:350,
        borderRadius:10,
        borderWidth:2
    },
    ortext:{
        marginTop:10,
        marginBottom:10,
        fontSize:20
    },
    thridContainer:{
        justifyContent:"center",
        alignItems:"center"
    }

});

const mapStateToProps = state => {
    return{
        email:state.auth.email,
        password:state.auth.password,
        error:state.auth.error,
        loading:state.auth.loading,
        loggedIn:state.auth.loggedIn
    }
};

//make this component available to the app
export default connect(mapStateToProps,{emailChanged,passwordChanged,loginUser})(LoginScreen);
