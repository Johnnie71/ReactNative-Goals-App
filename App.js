import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
  }

  return (
    <View style={styles.screen}>
      <StatusBar style="auto" />
      <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal" 
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={enteredGoal}/>
        <Button title="ADD" onPress={addGoalHandler}/>
      </View>
      <ScrollView>
        {courseGoals.map(goal => (
        <View key={goal} style={styles.listItem}>
          <Text>{goal}</Text>
        </View>))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    width: "75%", 
    borderColor: "black", 
    borderWidth: 1,
  },
  listItem: {
    padding: 10,
    margin: 10,
    backgroundColor: "blue",
    borderColor: "green",
    borderWidth: 1,
  }
});
