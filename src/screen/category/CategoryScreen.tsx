import {SafeAreaView, ScrollView, StyleSheet} from "react-native";
import React, {Component} from "react";
import CategoryCard from "../../component/card/CategoryCard";
import CategoryApiService from "../../service/CategoryApiService";
import {Text, Title} from "react-native-paper";

class CategoryScreen extends Component<any, any> {

  private categoryApiService = new CategoryApiService();

  constructor(props) {
    super(props);
    this.state = {
      subcategories: []
    }
  }

  render() {
    const { navigation } = this.props;
    const cards = this.getSubcategoryCards(navigation);
    return  <SafeAreaView style={styles.container}>
      <Title style={styles.title}><Text>Select Subcategory</Text></Title>
      <ScrollView contentContainerStyle={styles.cards}>
        { cards }
      </ScrollView>
    </SafeAreaView>
  }

  componentDidMount() {
    const { route } = this.props;
    const { category } = route.params;
    this.categoryApiService.getSubcategories(category.id)
      .then(subcategories => this.setState({subcategories: subcategories}));
  }

  private getSubcategoryCards(navigation) {
    const subcategories = this.state.subcategories;
    const cards = [];
    for (let i = 0; i < subcategories.length; i++) {
      const subcategory = subcategories[i];
      const card = <CategoryCard
        key={"subcategory-" + subcategory.id}
        navigation={navigation}
        category={subcategory}
        isSubcategory={true}
      />;

      cards.push(card);
    }
    return cards;
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    marginTop: 5,
    marginBottom: 25
  },
  cards: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5
  }
});

export default CategoryScreen;