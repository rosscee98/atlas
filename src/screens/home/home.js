import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import List from "./list/list";
import NewEntry from "./new-entry/new-entry";

const { Navigator, Screen } = createNativeStackNavigator();

const HomeScreen = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="List" component={List} />
        <Screen name="New Entry" component={NewEntry} />
      </Navigator>
    </NavigationContainer>
  );
};

export default HomeScreen;
