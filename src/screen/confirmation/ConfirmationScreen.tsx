import {SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import React from "react";
import ProviderApiService from "../../service/ProviderApiService";
import ProviderHeader from "../../component/provider/ProviderHeader";
import {Button} from "react-native-paper";
import {Picker} from "@react-native-picker/picker";
import MapView, {Marker} from "react-native-maps";
import { PROVIDER_GOOGLE } from "react-native-maps";

const AREA = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

class ConfirmationScreen extends React.Component<any, any> {

  private providerApiService = new ProviderApiService();

  constructor(props) {
    super(props);
  }

  render() {
    const { navigation, route } = this.props;
    const {provider, orderItems, timeslot} = route.params;
    return <SafeAreaView style={styles.container}>
      <ProviderHeader provider={provider}></ProviderHeader>
      <ScrollView contentContainerStyle={styles.details}>
        <Text style={styles.subtitle}>Address</Text>
        <MapView
          style={styles.addressMap}
          provider={PROVIDER_GOOGLE}
          initialRegion={AREA}
          pitchEnabled={false}
          rotateEnabled={false}
          scrollEnabled={false}
          zoomEnabled={false}>
          <Marker coordinate={AREA}></Marker>
        </MapView>
        <View style={styles.editable}>
          <Text style={styles.info}>Hero Street 4, Timisoara</Text>
          <Button style={styles.editButton} mode="text"
                  onPress={() => this.handleChangeAddress()} uppercase={false}>
            Change
          </Button>
        </View>
        <Text style={styles.subtitle}>Date</Text>
        <View style={styles.editable}>
          <Text style={styles.info}>{"July 1, " + timeslot.hour + ":" + timeslot.minute}</Text>
          <Button style={styles.editButton} mode="text"
                  onPress={() => this.handleChangeAddress()} uppercase={false}>
            Change
          </Button>
        </View>
        <Text style={styles.subtitle}>Payment method</Text>
        <Picker
          mode={"dropdown"}
          style={styles.paymentMethodSelect}
          selectedValue={"1"}
          onValueChange={(value) => {}}>
          <Picker.Item style={styles.info} label={"Visa ending in 4321"} value={"1"}/>
        </Picker>
        <Text style={styles.subtitle}>Summary</Text>
        {this.getOrderSummary(orderItems)}
        <View style={styles.summaryItem}>
          <Text style={[styles.info, styles.summaryTotal]}>Total</Text>
          <Text style={[styles.info, styles.summaryTotal]}>{orderItems.reduce((a, b) => a + b.price, 0) + " $"}</Text>
        </View>
      </ScrollView>
      <Button style={styles.confirmButton} mode="contained"
              onPress={() => this.handleSubmitOrder(provider, orderItems)} uppercase={false}>
        Confirm order
      </Button>
    </SafeAreaView>
  }

  componentDidMount() {
    const { route } = this.props;
    const {provider} = route.params;
    this.providerApiService.getProvider(provider.id)
      .then(provider => this.setState({provider: provider}));
  }

  private handleChangeAddress() {

  }

  private getOrderSummary(orderItems: Service[]) {
    const items = [];
    for (let i = 0; i < orderItems.length; i++) {
      const service = orderItems[i];
      const item =  <View key={"item" + i} style={styles.summaryItem}>
        <Text style={styles.info}>{"1 x " + service.name}</Text>
        <Text style={styles.info}>{service.price + " $"}</Text>
      </View>;

      items.push(item);
    }

    return <View style={styles.summary}>
      {items}
    </View>
  }

  private handleSubmitOrder(provider, orderItems) {
    const { navigation } = this.props;
    navigation.navigate('Success', { provider: provider, order: null })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height: "100%",
  },
  details: {
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "400",
    marginTop: 15
  },
  info: {
    color: "grey",
    fontSize: 16,
    marginBottom: 10,
  },
  editable: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between"
  },
  editButton: {
    padding: 0,
  },
  paymentMethodSelect: {
    marginLeft: -7,
  },
  confirmButton: {
    position: "relative",
    bottom: 20,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
    borderRadius: 50,
    paddingTop: 10,
    paddingBottom: 10,
    width: "95%"
  },
  summaryItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  summary: {
    marginTop: 15
  },
  summaryTotal: {
    fontWeight: "bold"
  },
  addressMap: {
    width: "100%",
    height: 150
  }
});

export default ConfirmationScreen;