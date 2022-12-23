import {StyleSheet, Text, View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

function ProviderDetails({ provider }) {
  return <View
    style={[styles.container]}>
    <View style={styles.ratingContainer}>
      <Text style={styles.title}>
        {provider.reviewCount + " reviews"}
      </Text>
      <Text>{provider.rating} <Icon name="thumbs-up" size={16} /></Text>
    </View>
    <View style={styles.minimumOrderContainer}>
      <Text style={styles.title}>
        Minimum order
      </Text>
      <Text>{provider.minimumOrder + " $"}</Text>
    </View>
  </View>
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 40,
    paddingRight: 40,
    display: "flex",
    flexDirection: "row"
  },
  ratingContainer: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  minimumOrderContainer: {
    position: "absolute",
    right: 40,
    top: 20,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "grey"
  },
});

export default ProviderDetails;