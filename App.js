
import { useState } from 'react';
import { Button, StyleSheet, TextInput, View, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import enteredGoalText from './components/GoalInput'
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [istrue, setIstrue] = useState(true)
  const [goals, setGoals] = useState([])

  function startAddGoalHandler() {
    setIstrue(!istrue)
  }

  const addGoalHandler = (enteredGoalText) => {
    setGoals(currentGoals => [...currentGoals, {text: enteredGoalText, id: Math.random().toString()}]);
    setIstrue(!istrue)
  };

  function deleteHandler (id) {
    setGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
    <StatusBar style="light"/>
    <View style = {styles.appContainer} >

      <Button title='Add a new Goal' color="blue" onPress={startAddGoalHandler}/>

      <GoalInput addGoal = {addGoalHandler} visible = {istrue}/> 

      

      <View style = {styles.goalsContainer}>
        <FlatList data={goals} renderItem={(itemData) => {
          return (
            <GoalItem 
              text = {itemData.item.text}
              delete = {deleteHandler}
              id = {itemData.item.id}
            />
          );
        }}/>
        
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },
 

  goalsContainer: {
    flex: 5,
  },
  
});
