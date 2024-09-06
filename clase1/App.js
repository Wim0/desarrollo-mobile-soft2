import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, FlatList } from "react-native";
import TaskItem from "./components/taskItem";
import TaskHeader from "./components/taskHeader";

export default function App() {
  // Estados
  const [taskList, setTaskList] = useState([]); // Crear un estado para almacenar la lista de tareas

  // Funciones
  function addTaskHandler(task) {
    setTaskList([...taskList, { text: task, id: Date.now() }]);
  }

  function taskDeleteHandler(id) {
    setTaskList(taskList.filter((task) => task.id !== id));
  }

  // Renderizado
  return (
    <View style={styles.appContainer}>
      <TaskHeader onAddTask={addTaskHandler} />
      <View style={styles.bodyContainer}>
        <Text>Lista de Tareas...</Text>
        <FlatList
          data={taskList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskItem id={item.id} text={item.text} onDeleteTask={taskDeleteHandler} />
          )}
        />
      </View>
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bodyContainer: {
    flex: 3,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
});
