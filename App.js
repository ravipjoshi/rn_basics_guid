import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function App() {
  const [enteredGoal,setEnteredGoal] = useState('');
  const [goals, setGoal ] = useState([]);
  
  const inputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }
  
  const addGoal = () => {
    console.log(enteredGoal);
    setGoal(currentGoals=>[...currentGoals,enteredGoal])
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
      <View>
            {goals.map((goal)=><View  key={goal} style={styles.listItem}><Text >{goal}</Text></View>)}
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
  },
  listItem:{
    padding: 10,
    margin : 10,
    backgroundColor: '#fcc',
    borderColor : 'black',
    borderWidth: 1

  }

});