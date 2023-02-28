import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Main from "./src/screens/main";

export default function App() {
  return (
    <SafeAreaView>
      <Main />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
