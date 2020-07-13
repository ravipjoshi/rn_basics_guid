import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList} from 'react-native';

export default function App() {
  const [enteredGoal,setEnteredGoal] = useState('');
  const [goals, setGoal ] = useState([]);
  
  const inputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }
  
  const addGoal = () => {
    console.log(enteredGoal);
    setGoal(currentGoals=>[...currentGoals,{key: Math.random().toString(),value:enteredGoal}])
  }
  
  
  
  return (
    
    <View style={styles.screen}>
      <View style={styles.InputContainer}>
          <TextInput 
            placeholder="Enter Your Goals"
            style={styles.InputText}
            onChangeText = {inputHandler}
            value={enteredGoal}
          />
          <Button title="+"  onPress={addGoal}/>
      </View>
      <FlatList
        data={goals}
        renderItem={itemData =>(
      
            <View style={styles.listItem}>
              <Text >{itemData.item.value}</Text>
            </View>)}
      />
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
  },
  listItem:{
    padding: 10,
    margin : 10,
    backgroundColor: '#fcc',
    borderColor : 'black',
    borderWidth: 1

  }

});