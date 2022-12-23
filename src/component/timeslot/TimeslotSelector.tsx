import {Dimensions, SafeAreaView, StyleSheet, Text} from "react-native";
import {TimeslotDay} from "../../model/TimeslotDay";
import React, {Component} from "react";
import Carousel from 'react-native-reanimated-carousel';
import DaySelector from "./DaySelector";
import HourSelector from "./HourSelector";

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

export class TimeslotSelector extends Component<any, any> {

  constructor(props) {
    super(props);
    this.state = {
      selectedDay: null
    }
  }

  render () {
    const { timeslotsProvider, timeslotSelectHandler } = this.props;

    return <SafeAreaView style={[styles.container]}>
      <Carousel
        width={Dimensions.get('window').width - 40}
        loop={false}
        autoPlay={false}
        data={[...new Array(4).keys()]}
        pagingEnabled={false}
        scrollAnimationDuration={1000}
        onSnapToItem={index => this.onWeekChanged()}
        renderItem={({ index }) => this.renderWeek(index, timeslotsProvider, timeslotSelectHandler)}
      />
    </SafeAreaView>
  }

  private renderWeek(index, timeslotsProvider, timeslotSelectHandler) {
    const weekTimeslots = this.getWeekTimeslots(index);
    const selected = this.state.selectedDay !== null ? this.state.selectedDay : weekTimeslots[0];
    return <>
      <Text style={styles.month}>{ months[selected.date.getMonth()] }</Text>
      <DaySelector timeslots={weekTimeslots} value={selected}
                   valueChangeHandler={this.onDaySelected.bind(this)}>
      </DaySelector>
      <HourSelector timeslotsPromise={timeslotsProvider(selected)}
                    selectHandler={timeslotSelectHandler}></HourSelector></>
  }

  private onWeekChanged() {
    this.setState({ selectedDay: null});
  }

  private onDaySelected(timeslot: TimeslotDay) {
    this.setState({ selectedDay: timeslot});
  }

  private getWeekTimeslots(weekIndex) {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 7 * weekIndex)
    const slots = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(currentDate);
      date.setDate(date.getDate() + i);
      const slot = new TimeslotDay();
      slot.date = date;
      slot.active = true;
      slots.push(slot);
    }
    return slots;
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  month: {
    marginBottom: 10,
    marginLeft: 5,
    fontSize: 18,
    fontWeight: "400"
  }
});

export default TimeslotSelector;