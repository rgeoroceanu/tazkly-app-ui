import {SafeAreaView, ScrollView, StyleSheet} from "react-native";
import React, {Component} from "react";
import {Text, Title} from "react-native-paper";
import ProviderApiService from "../../service/ProviderApiService";
import ProviderCard from "../../component/card/ProviderCard";

class ProvidersScreen extends Component<any, any> {

  private providerApiService = new ProviderApiService();

  constructor(props) {
    super(props);
    this.state = {
      providers: []
    }
  }

  render() {
    const { navigation } = this.props;
    const providers = this.getProviderCards(navigation);
    return  <SafeAreaView style={styles.container}>
      <Title style={styles.title}><Text>Select Provider</Text></Title>
      <ScrollView contentContainerStyle={styles.cards}>
        { providers }
      </ScrollView>
    </SafeAreaView>
  }

  componentDidMount() {
    const { route } = this.props;
    const { subcategory } = route.params;
    this.providerApiService.searchProviders(subcategory.id)
      .then(providers => this.setState({providers: providers}));
  }

  private getProviderCards(navigation) {
    const providers = this.state.providers;
    const cards = [];
    for (let i = 0; i < providers.length; i++) {
      const provider = providers[i];
      const card = <ProviderCard
        key={"provider-" + provider.id}
        navigation={navigation}
        provider={provider}
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
  search: {
    borderRadius: 50,
    height: 40
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

export default ProvidersScreen;