import React,{useState} from 'react';
import {View, Text, Stylesheets, TextInput, Button} from 'react-native';

const GoalInput = () => {
    const [enteredGoal,setEnteredGoal] = useState('');
    const inputHandler = (enteredText) => {
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
          <Button title="+"  onPress={()=>props.onAddGoal(enteredGoal)}/>
      </View>
    );
};

const styles = Stylesheets.create({
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