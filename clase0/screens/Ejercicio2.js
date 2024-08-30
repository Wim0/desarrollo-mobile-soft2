import { StatusBar } from "expo-status-bar";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import birthday from "../assets/birthday.png";

export default function Ejercicio1() {
  return (
    <View style={styles.container}>
      <ImageBackground source={birthday} style={{ width: 600, height: 600 }}>
        <Text style={styles.absoluteTextTop}>Happy Birthday, Ben!</Text>
        <Text style={styles.absoluteTextBottom}>From, Lya!</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  absoluteTextTop: {
    fontSize: 65,
    color: "white",
    backgroundColor: "transparent",
    position: "absolute",
  },
  absoluteTextBottom: {
    fontSize: 65,
    color: "white",
    backgroundColor: "transparent",
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});
