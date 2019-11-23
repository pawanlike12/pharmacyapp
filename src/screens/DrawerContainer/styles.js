import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'row',
    // alignItems: 'center',
    marginTop:20
    // justifyContent: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: 10
  },
  drawerHeader:{
    width:"100%",
    height:60,
    backgroundColor:"#e22034"
    
  },
  DrawerContainer:{
    flex: 1,
  }
});

export default styles;
