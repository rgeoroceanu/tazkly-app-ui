import {StyleSheet, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";

function HelpScreen() {
  return  <View style={styles.container}>
    <Text>Help</Text>
    <StatusBar style="auto" />
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HelpScreen;