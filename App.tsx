import {Provider as PaperProvider} from 'react-native-paper';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from "@react-navigation/native";
import HeaderBar from "./src/component/header/HeaderBar";
import FooterBar from "./src/component/footer/FooterBar";
import Theme from "./Theme";
import CategoryScreen from "./src/screen/category/CategoryScreen";
import ProvidersScreen from "./src/screen/provider/ProvidersScreen";
import ServiceSelectScreen from "./src/screen/service-select/ServiceSelectScreen";
import TimeslotScreen from "./src/screen/timeslot/TimeslotScreen";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import ConfirmationScreen from "./src/screen/confirmation/ConfirmationScreen";
import SuccessScreen from "./src/screen/confirmation/SuccessScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider theme={Theme}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{header: (props) => <HeaderBar navigation={props.navigation} back={props.back} />}}
            initialRouteName="Root">
            <Stack.Screen name="Root" component={FooterBar} options={{ headerShown: false }}/>
            <Stack.Screen name="Category" component={CategoryScreen} />
            <Stack.Screen name="Providers" component={ProvidersScreen} />
            <Stack.Screen name="ServiceSelect" component={ServiceSelectScreen} />
            <Stack.Screen name="Timeslot" component={TimeslotScreen} />
            <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
            <Stack.Screen name="Success" component={SuccessScreen} options={{ headerShown: false, gestureEnabled: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </GestureHandlerRootView>

  );
}