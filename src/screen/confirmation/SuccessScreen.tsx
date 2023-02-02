import {SafeAreaView, StyleSheet, Text} from "react-native";
import React from "react";
import ProviderApiService from "../../service/ProviderApiService";
import {Button} from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";

class SuccessScreen extends React.Component<any, any> {

  private providerApiService = new ProviderApiService();

  constructor(props) {
    super(props);
  }

  render() {
    const {navigation, route} = this.props;
    const {order} = route.params;
    return <SafeAreaView style={styles.container}>
      <Icon name="check" size={50} color="#28a745" />
      <Text style={styles.orderId}>{"Order 123456 has been placed"}</Text>
      <Button style={styles.viewOrderButton} mode="contained"
              onPress={() => this.goToOrder(order)} uppercase={false}>
        View order
      </Button>
    </SafeAreaView>
  }

  goToOrder(order) {
    const { navigation } = this.props;
    navigation.navigate('Root')
  }

  componentDidMount() {
    const {route} = this.props;
    const {provider} = route.params;
    this.providerApiService.getProvider(provider.id)
      .then(provider => this.setState({provider: provider}));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  orderId: {
    fontSize: 18,
    fontWeight: "400",
    padding: 15
  },
  viewOrderButton: {
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 50,
    paddingTop: 5,
    paddingBottom: 5,
    width: "75%",
  }
});

export default SuccessScreen;