import {Card, IconButton} from 'react-native-paper';
import {StyleSheet} from "react-native";

function ServiceCard({ navigation, service, onAddPress }) {
  return <Card.Title
        style={[styles.card]}
        title={service.name}
        titleStyle={styles.title}
        right={(props) => <IconButton icon={"plus"} {...props} style={styles.addButton}
                                      onPress={() => handleAdd(navigation, service, onAddPress)} />}>
      </Card.Title>
}

function handleAdd(navigation, service: Service, onAddPress) {
  onAddPress(service)
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginBottom: 25,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
  addButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  title: {
    marginLeft: 15,
    fontSize: 16,
    fontWeight: "normal"
  }
});

export default ServiceCard;