import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function App() {
  return (
    <View style={{padding:40}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'center'}}>
          <TextInput 
            placeholder="Enter Your Goals"
            style={{width: '80%', padding:10}}
          />
          <Button title="+" />
      </View>
      <View 
        style={{
          padding: 10, 
          flexDirection:'column', 
          width: '80%', 
          height: 300, 
          alignItems:"center", 
          justifyContent:"space-around"
          }}>
        <View 
          style={{
            backgroundColor : 'red',
            width: 100,
            flex:1,
            //height: 100,
            justifyContent: 'center',
            alignItems:'center'

        }}>
           <Text> 1 </Text>
        </View>
        <View style={{
            backgroundColor : 'yellow',
            //width: 100,
            height: 100,
            flex:1,
            justifyContent: 'center',
            alignItems:'center'

        }}>
            <Text> 2 </Text>
        </View>
        <View style={{
            backgroundColor : 'blue',
            width: 100,
            height: 100,
            justifyContent: 'center',
            alignItems:'center'

        }}>
            <Text> 3 </Text>
        </View>
      </View>
    </View>
  );
}