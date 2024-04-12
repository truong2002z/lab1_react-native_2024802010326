import {Text, View,TouchableOpacity,  } from 'react-native'
import React from 'react'
const  Project_3 = () => ( 
  <View style={{flex:1, justifyContent:'center'}}>
  <Button text='Say hello' onPress={() => alert('hello!')}/>
    <Button 
      text='Say goodbye' 
      onPress={() => alert('goodbye')}
      buttonStyle={{backgroundColor:'#4dc2c2'}}>
    </Button>
  </View>
);

export default Project_3;
const Button = (props) => (
  <TouchableOpacity onPress={props.onPress}
    style={{
      backgroundColor:'#ff637c',
      alignSelf:'center',
      padding:10,
      margin:10,
      ...props.buttonStyle,
    }}
  >
  <Text style={{color:'#fff'}}> {props.text}</Text>
</TouchableOpacity>
);

