import {SafeAreaView, StyleSheet, Text} from "react-native";
import {StatusBar} from "expo-status-bar";

function ProfileScreen() {
  return  <SafeAreaView style={styles.container}>
    <Text>Profile</Text>
    <StatusBar style="auto" />
  </SafeAreaView>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProfileScreen;