import {Card} from 'react-native-paper';
import {Image, StyleSheet, TouchableOpacity} from "react-native";

function CategoryCard({ navigation, category, isSubcategory }) {
  return <TouchableOpacity
      onPress={() => handlePress(navigation, category, isSubcategory)}>
      <Card.Title
        style={[styles.card]}
        title={category.name}
        titleStyle={styles.title}
        left={(props) => <Image {...props} style={styles.image} source={{uri: category.imageUrl}} />}>
      </Card.Title>
    </TouchableOpacity>
}

function handlePress(navigation, category: Category | Subcategory, isSubcategory: boolean) {
  if (isSubcategory) {
    navigation.navigate('Providers', { subcategory: category, title: category.name })
  } else {
    navigation.navigate('Category', { category: category, title: category.name })
  }
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 90,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginBottom: 25,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
  image: {
    borderRadius: 15,
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  title: {
    marginLeft: 25,
  }
});

export default CategoryCard;