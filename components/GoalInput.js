import React,{useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button, Modal} from 'react-native';

const GoalInput = props => {
    const [enteredGoal,setEnteredGoal] = useState('');
    const inputHandler = enteredText => {
        setEnteredGoal(enteredText)
      }

    const addGoalHandler =() => {
      props.onAddGoal(enteredGoal);
      setEnteredGoal('');

    }  
    return (
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.InputContainer} >
          <TextInput 
            placeholder="Enter Your Goals"
            style={styles.InputText}
            onChangeText = {inputHandler}
            value={enteredGoal}
          />
        <View style={styles.buttonContainer}>  
          <Button title="-"  color="red" onPress={props.onCancel} />
          <Button title="+"  onPress={addGoalHandler}/>
        </View>   
        </View>
      </Modal>
    );
};

const styles = StyleSheet.create({
    InputContainer:{
        flex: 1, 
        justifyContent: 'center', 
        alignItems:'center'
      },
      InputText:{
        width: '80%', padding:10
      },
      buttonContainer: {
        flexDirection : 'row',
        justifyContent: 'space-between', 
        width : '60%'      
      }
})
//<Button title="+"  onPress={()=>props.onAddGoal(enteredGoal)}/>

export default GoalInput;