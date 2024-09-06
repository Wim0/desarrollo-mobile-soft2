import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

function TaskHeader(props) {
  // Estados
  const [task, setTask] = useState(""); // Crear un estado para almacenar el texto introducido

  // Funciones
  function taskTextHandler(text) {
    setTask(text);
  }

  function addTask() {
    props.onAddTask(task);
  }
  return (
    <View style={styles.headerContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Ingrese una tarea"
        onChangeText={taskTextHandler}
      />
      <Button title="Agregar" onPress={addTask} />
    </View>
  );
}

export default TaskHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    backgroundColor: "yellow",
    flexDirection: "row", // Cambiar el orden de los elementos de manera horizontal
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  textInput: {
    width: 200,
    height: 50,
    borderColor: "black",
    borderWidth: 1,
    padding: 8,
    backgroundColor: "white",
  },
});
