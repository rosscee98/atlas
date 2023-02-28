import { StyleSheet } from "react-native";
import HomeScreen from "./src/screens/home/home";

export default function App() {
  return <HomeScreen />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
