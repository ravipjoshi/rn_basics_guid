import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
export default function App() {
 
  const [goals, setGoal ] = useState([]);
  
  
  
  const addGoalHandler = goalTitle => {
       setGoal(currentGoals=>[...currentGoals,
      {id: Math.random().toString(), value: goalTitle}])
  }
  
  const removeGoalHandler =goalId => {
    setGoals(currentGoals =>{
      return currentGoals.filter((goal)=> goal.id !== goalId); 
      });
  }
  
  
  return (
    
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />    
      <FlatList
        keyExtractor={(item,index)=> item.id}
        data={goals}
        renderItem={itemData => (
          <GoalItem 
            id={itemData.item.id} 
            onDelete={removeGoalHandler}
            title={itemData.item.value}
            />
            )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
      padding: 40,
      
  }
  
  

});