import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Focus from "./src/features/focus/Focus";
export default function App() {
  const [focusSubject, setFocusSubject] = useState("eyob");
  return (
    <View style={styles.container}>
      {focusSubject ? <Focus/> : <Text>no!</Text>}
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252250",
    alignItems: "center",
    justifyContent: "center",
  },
});
