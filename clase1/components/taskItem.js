import { useState } from "react";

import { StyleSheet, View, Text, Pressable } from "react-native";

function TaskItem(props) {
  // Funciones
  function deleteTask() {
    props.onDeleteTask(props.id);
  }

  return (
    <View style={styles.itemTask}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={deleteTask}
        style={({ pressed }) => pressed && styles.pressedItem}
      />

      <Text>
        {props.id} - {props.text}
      </Text>
    </View>
  );
}

export default TaskItem;

const styles = StyleSheet.create({
  pressedItem: {
    opacity: 0.5,
  },
  itemTask: {
    width: 200,
    height: 50,
    borderColor: "black",
    borderWidth: 1,
    margin: 8,
    backgroundColor: "white",
    padding: 16,
  },
});
