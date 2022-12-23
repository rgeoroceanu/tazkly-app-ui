import {SafeAreaView, StyleSheet} from "react-native";
import DayBox from "./DayBox";
import React, {Component} from "react";

class DaySelector extends Component<any, any> {

  constructor(props) {
    super(props);
  }

  render() {
    const { timeslots, value, valueChangeHandler } = this.props;
    const boxes = this.getDayBoxes(timeslots, value, val => {
      valueChangeHandler(val);
    });
    return <SafeAreaView style={[styles.container]}>
      { boxes }
    </SafeAreaView>
  }

  private getDayBoxes(timeslots, currentValue, valueChangeHandler) {
    const boxes = [];
    for (let i = 0; i < timeslots.length; i++) {
      const timeslot = timeslots[i];
      const selected = currentValue.date.toDateString() === timeslot.date.toDateString();
      const box = <DayBox
        key={"day-" + i}
        timeslot={timeslot}
        selectedValue={selected}
        selectedHandler={valueChangeHandler}
      />;
      boxes.push(box);
    }
    return boxes;
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
});

export default DaySelector;