import React,{useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

const GoalInput = props => {
    const [enteredGoal,setEnteredGoal] = useState('');
    const inputHandler = enteredText => {
        setEnteredGoal(enteredText)
      }
    return (
        <View style={styles.InputContainer}>
          <TextInput 
            placeholder="Enter Your Goals"
            style={styles.InputText}
            onChangeText = {inputHandler}
            value={enteredGoal}
          />
          <Button title="+"  onPress={props.onAddGoal.bind(this, enteredGoal)}/>
      </View>
    );
};

const styles = StyleSheet.create({
    InputContainer:{
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems:'center'
      },
      InputText:{
        width: '80%', padding:10
      },
})

export default GoalInput;