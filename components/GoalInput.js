import React,{useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button, Modal} from 'react-native';

const GoalInput = props => {
    const [enteredGoal,setEnteredGoal] = useState('');
    const inputHandler = enteredText => {
        setEnteredGoal(enteredText)
      }
    return (
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.InputContainer}>
          <TextInput 
            placeholder="Enter Your Goals"
            style={styles.InputText}
            onChangeText = {inputHandler}
            value={enteredGoal}
          />
          <Button title="+"  onPress={props.onAddGoal.bind(this,enteredGoal)}/>
           
        </View>
      </Modal>
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
//<Button title="+"  onPress={()=>props.onAddGoal(enteredGoal)}/>

export default GoalInput;