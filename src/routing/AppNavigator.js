import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {ScrollView,SafeAreaView} from 'react-native';
import {Drawer} from 'react-native-paper';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import HomeScreen from '../screens/HomeScreen';
import RestaurantScreen from '../screens/RestaurantScreen';
import MenuScreen from '../screens/MenuScreen';
import OrderScreen from '../screens/OrderScreen';
import CartScreen from '../screens/CartScreen';
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';



const MainNavigator = createStackNavigator(
  {
    Login:{
      screen:LoginScreen,
      navigationOptions: { 
        header: null,
        gesturesEnabled: true,
      },
    },
    Signup:{
      screen:SignupScreen,
      navigationOptions: { 
        header: null,
        gesturesEnabled: true,
      },
    },
    Home:{
      screen:HomeScreen,
      navigationOptions: { 
        header: null,
        gesturesEnabled: true,
      },
    },
    Restaurants:{
      screen:RestaurantScreen,
      navigationOptions: { 
        header: null,
        gesturesEnabled: true,
      },
    },
    Menus:{screen:MenuScreen,
      navigationOptions: { 
        header: null,
        gesturesEnabled: true,
      },
    },
    Orders:{
      screen:OrderScreen,
      navigationOptions: { 
        header: null,
        gesturesEnabled: true,
      },
    },
    Cart:{
      screen:CartScreen,
      navigationOptions: { 
        header: null,
        gesturesEnabled: true,
      },
    }
  },
  {
    initialRouteName: 'Login',
    // headerMode: 'float',
    defaulfNavigationOptions: ({ navigation }) => ({
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        flex: 1,
        fontFamily: 'FallingSkyCond'
      }
    })
  }
);



const DrawerStack = createDrawerNavigator(
  {
    Main: MainNavigator
  },
  {
    drawerPosition: 'left',
    drawerType: "slide",
    initialRouteName: 'Main',
    drawerWidth: 250,
    contentComponent: DrawerContainer
  }
);

export default AppContainer = createAppContainer(DrawerStack);