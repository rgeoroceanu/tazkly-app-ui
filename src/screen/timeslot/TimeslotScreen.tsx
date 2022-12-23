import {SafeAreaView, StyleSheet} from "react-native";
import React from "react";
import ProviderHeader from "../../component/provider/ProviderHeader";
import TimeslotSelector from "../../component/timeslot/TimeslotSelector";
import TimeslotApiService from "../../service/TimeslotApiService";
import {Timeslot} from "../../model/Timeslot";

class TimeslotScreen extends React.Component<any, any> {

  private timeslotApiService = new TimeslotApiService();

  constructor(props) {
    super(props);
  }

  render() {
    const { route } = this.props;
    const {provider, orderItems} = route.params;
    return <SafeAreaView style={styles.container}>
      <ProviderHeader provider={provider}></ProviderHeader>
      <TimeslotSelector provider={provider}
                        timeslotsProvider={selectedDate => this.getHourTimeslots(provider.id, selectedDate, orderItems)}
                        timeslotSelectHandler={timeslot => this.onTimeslotSelect(timeslot, provider, orderItems)}>
      </TimeslotSelector>
    </SafeAreaView>
  }

  private getHourTimeslots(providerId: string, date: Date, orderItems): Promise<Timeslot[]> {
    const totalDuration = orderItems.reduce((a, b) => a + b.durationMinutes, 0);
    return this.timeslotApiService.getAvailableTimeslots(providerId, date, totalDuration);
  }

  private onTimeslotSelect(timeslot: Timeslot, provider: Provider, orderItems) {
    console.log(timeslot);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    height: "100%"
  },
});

export default TimeslotScreen;