import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
 
} from 'react-native';
export default class TestComponent extends Component{
	render(){
		
		return(
		<View style={{backgroundColor:'grey' ,flex:1,justifyConten:'center',alignItems:'center'}}>
		 <Text style={{fontSize:30}}>{this.props.name}</Text>
		
		</View>
		);
	}
}
module.exports =TestComponent;
 
  

