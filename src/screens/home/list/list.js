import { Button, SafeAreaView, Text } from "react-native";

export default function List({ navigation }) {
  return (
    <SafeAreaView>
      <Text>hiya</Text>
      <Button title="New" onPress={() => navigation.navigate("New Entry")} />
    </SafeAreaView>
  );
}
