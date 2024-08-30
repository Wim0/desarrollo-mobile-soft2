import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import paisaje from "../assets/paisaje.jpg";

export default function Ejercicio1() {
  return (
    <View style={styles.container}>
      <Image source={paisaje} style={{ width: 400, height: 400 }} />
      <Text style={styles.greenStyleExtraBig}>You're invited!</Text>
      <Text style={styles.greenStyle}>Bonfire at the beach</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Flex 1 hace que el componente se expanda y ocupe toda la pantalla
    backgroundColor: "#fff",
    // Cuando flexDirection="column":
    alignItems: "center",
    justifyContent: "flex-start",
    // justifyContent: "flex-start" hace que el componente se centre en el eje horizontal
    // Si flexDirection="row" entonces el componente se centra en el eje vertical
  },
  greenStyle: {
    backgroundColor: "green",
    color: "white",
    width: 400,
    fontSize: 20,
  },
  greenStyleExtraBig: {
    backgroundColor: "green",
    color: "white",
    width: 400,
    fontSize: 40,
    fontWeight: "bold",
  },
});
