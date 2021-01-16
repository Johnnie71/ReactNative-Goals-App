import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, {
      id: Math.random().toString(), value: enteredGoal
    }]);
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
      <FlatList 
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
        <View style={styles.listItem}>
          <Text>{itemData.item.value}</Text>
        </View>
        )}
      />
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
