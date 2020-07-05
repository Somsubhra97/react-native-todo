import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import GoalInput from './components/GoalInput';
import GoalItems from './components/GoalItems';
import Header from './components/Header';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (    
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}}>
     <View style={styles.screen}>

        <Header />

        <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      
        <GoalInput  visible={isAddMode}  onAddGoal={addGoalHandler}  onCancel={cancelGoalAdditionHandler}/>

        <GoalItems data={courseGoals} onDelete={removeGoalHandler} />

     </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
