import {SafeAreaView, ScrollView, StyleSheet} from "react-native";
import {Searchbar, Text, Title} from "react-native-paper";
import React, {Component} from "react";
import CategoryCard from "../../component/card/CategoryCard";
import CategoryApiService from "../../service/CategoryApiService";

class HomeScreen extends Component<any, any> {

  private categoryApiService = new CategoryApiService();

  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      categories: []
    }
  }

  render() {
    const { navigation } = this.props;
    const cards = this.getCategoryCards(navigation);
    return <SafeAreaView style={styles.container}>
      <Searchbar
        style={styles.search}
        placeholder="Search"
        onChangeText={text => this.onChangeSearch(text)}
        value={this.state.searchQuery}
      />
      <Title style={styles.title}><Text>Select Category</Text></Title>
      <ScrollView contentContainerStyle={styles.cards}>
        {cards}
      </ScrollView>
    </SafeAreaView>
  }

  componentDidMount() {
    this.categoryApiService.getAllCategories()
      .then(categories => this.setState({categories: categories}));
  }

  private onChangeSearch(query) {
    this.setState({searchQuery: query});
  }

  private getCategoryCards(navigation) {
    const categories = this.state.categories;
    const cards = [];
    for (let i = 0; i < categories.length; i++) {
      const category = categories[i];
      const card = <CategoryCard
        key={"category-" + category.id}
        navigation={navigation}
        category={category}
        isSubcategory={false}
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
    paddingTop: 60,
    paddingLeft: 20,
    paddingRight: 20
  },
  title: {
    marginTop: 25,
    marginBottom: 25
  },
  search: {
    borderRadius: 50,
    height: 40,
    elevation: 3
  },
  cards: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    width: "100%"
  }
});

export default HomeScreen;