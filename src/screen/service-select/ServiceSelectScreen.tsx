import {SafeAreaView, ScrollView, StyleSheet} from "react-native";
import React from "react";
import ProviderApiService from "../../service/ProviderApiService";
import ServiceCard from "../../component/card/ServiceCard";
import ProviderHeader from "../../component/provider/ProviderHeader";
import ProviderDetails from "../../component/provider/ProviderDetails";
import {Button} from "react-native-paper";

class ServiceSelectScreen extends React.Component<any, any> {

  private providerApiService = new ProviderApiService();

  constructor(props) {
    super(props);
    this.state = {
      orderItems: [],
      provider: null
    }
  }

  render() {
    const { navigation, route } = this.props;
    const {provider} = route.params;
    const cards = this.getServiceCards(navigation);
    const orderItems = this.state.orderItems;
    const showOrderButton = orderItems.length > 0 ? "flex" : "none";
    return <SafeAreaView style={styles.container}>
      <ProviderHeader provider={provider}></ProviderHeader>
      <ProviderDetails provider={provider}></ProviderDetails>
      <ScrollView contentContainerStyle={styles.cards}>
        {cards}
      </ScrollView>
      <Button style={[styles.orderButton, {display: showOrderButton}]} mode="contained"
              onPress={() => this.handleSubmitOrder(provider, orderItems)} uppercase={false}>
        {this.getOrderButtonLabel()}
      </Button>
    </SafeAreaView>
  }

  componentDidMount() {
    const { route } = this.props;
    const {provider} = route.params;
    this.providerApiService.getProvider(provider.id)
      .then(provider => this.setState({provider: provider}));
  }

  private handleSubmitOrder(provider, orderItems) {
    const { navigation } = this.props;
    navigation.navigate('Timeslot', { provider: provider, orderItems: orderItems, title: "Timeslot" })
  }

  private getOrderButtonLabel(): string {
    const orderItems = this.state.orderItems;
    const totalDuration = orderItems.reduce((a, b) => a + b.durationMinutes, 0);
    const totalPrice = orderItems.reduce((a, b) => a + b.price, 0);
    return "Total order " + totalDuration + "m " + totalPrice + "$";
  }

  private getServiceCards(navigation) {
    const provider = this.state.provider;
    if (provider === null) {
      return [];
    }
    const services = provider.services;
    const cards = [];
    for (let i = 0; i < services.length; i++) {
      const service = services[i];
      const card = <ServiceCard
        key={"service-" + service.id}
        navigation={navigation}
        service={service}
        onAddPress={service => this.handleAddService(service)}
      />;

      cards.push(card);
    }
    return cards;
  }

  private handleAddService(service: Service) {
    const currentOrderItems = this.state.orderItems;
    currentOrderItems.push(service);
    this.setState({orderItems: currentOrderItems});
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    height: "100%"
  },
  details: {
    display: "flex"
  },
  cards: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
  },
  orderButton: {
    position: "relative",
    bottom: 20,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 50,
    paddingTop: 10,
    paddingBottom: 10,
    width: "85%"
  }
});

export default ServiceSelectScreen;