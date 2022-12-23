import {Card} from 'react-native-paper';
import {Image, StyleSheet, TouchableOpacity} from "react-native";

function ProviderCard({ navigation, provider }) {
  return <TouchableOpacity
      onPress={() => handlePress(navigation, provider)}>
      <Card.Title
        style={[styles.card]}
        title={ provider.firstName + ' ' + provider.lastName }
        titleStyle={styles.title}
        subtitle={provider.shortDescription}
        subtitleStyle={styles.title}
        left={(props) => <Image {...props} style={styles.image} source={{uri: provider.photoUrl}} />}>
      </Card.Title>
    </TouchableOpacity>
}

function handlePress(navigation, provider: Provider) {
  navigation.navigate('ServiceSelect', { provider: provider, title: "Services" })
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 150,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginBottom: 25,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
  image: {
    borderRadius: 15,
    width: 90,
    height: 90,
    resizeMode: "contain",
  },
  title: {
    marginLeft: 55,
  }
});

export default ProviderCard;