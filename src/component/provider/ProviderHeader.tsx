import {Image, StyleSheet} from "react-native";
import {Card} from "react-native-paper";

function ProviderHeader({ provider }) {
  return <Card.Title
    style={[styles.card]}
    title={ provider.firstName + ' ' + provider.lastName }
    titleStyle={styles.title}
    subtitle={provider.shortDescription}
    subtitleStyle={styles.title}
    left={(props) => <Image {...props} style={styles.image} source={{uri: provider.photoUrl}} />}>
  </Card.Title>
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 120,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
  title: {
    marginLeft: 50,
    fontSize: 16,
    fontWeight: "normal"
  },
  image: {
    borderRadius: 15,
    width: 90,
    height: 90,
    resizeMode: "contain",
  }
});

export default ProviderHeader;