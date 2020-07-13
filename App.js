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
      <View>

      </View>
    </View>
  );
}
