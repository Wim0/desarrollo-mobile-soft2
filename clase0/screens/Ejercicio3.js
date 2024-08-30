import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Ejercicio3() {
  return (
    <View style={styles.container}>
      <Button title="Clickeame!" onPress={() => alert("Hola!")} />
      {/* TouchableOpacity es como un boton, pero puede tener un estilo personalizado */}
      <TouchableOpacity
        style={styles.btnPersonalizado}
        onPress={() => alert("Hola personalizado!")}>
        <Text style={{ color: "white" }}>Clickeame!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  btnPersonalizado: {
    backgroundColor: "green",
    width: 81,
    height: 30,
    borderRadius: 10,
    alignContent: "center",
    justifyContent: "center",
    padding: 5,
    //Solo para separar con el boton de arriba
    marginTop: 10,
  },
});
