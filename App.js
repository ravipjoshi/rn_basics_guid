import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.InputContainer}>
          <TextInput 
            placeholder="Enter Your Goals"
            style={styles.InputText}
          />
          <Button title="+" />
      </View>
      <View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
      padding: 40,
      
  },
  InputContainer:{
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems:'center'
  },
  InputText:{
    width: '80%', padding:10
  }

});