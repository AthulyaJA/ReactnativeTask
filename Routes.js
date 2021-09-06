
import { StyleSheet, Text, View,Button,FlatList,Image,TouchableOpacity, ScrollView} from "react-native";
import React,{useState} from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Router,Stack,Scene} from 'react-native-router-flux'
import Register  from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Moving from "./components/Moving";
const Routes = () => {

  return(

    <>
<Router>
<Stack key="root"  hideNavBar={true}>
  <Scene key="login" component={Login} initial={true} />
  <Scene key="registerUp" component={Register} />
  <Scene key="dash" component={Dashboard} />
  <Scene key="move" component={Moving}  />
</Stack>

  </Router>
    </>
  )
    
};

const Style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    marginTop:20,
    backgroundColor:'#000000',
    alignItems: "center"
  },
  
});





export default Routes;