import {StyleSheet, Text, TouchableOpacity} from "react-native";
import Theme from "../../../Theme";
import React from "react";

const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

function DayBox({ timeslot, selectedValue, selectedHandler }) {
  const inactiveClass = timeslot.active === false ? styles.inactive : null;
  const selectedClass = selectedValue ? styles.current : null;
  return <TouchableOpacity style={[styles.container, inactiveClass, selectedClass]} onPress={() => {
    if (timeslot.active) {
      selectedHandler(timeslot);
    }
  }}>
      <Text style={[styles.day, selectedClass]}>
        { timeslot.date.getDate() }
      </Text>
      <Text style={[styles.month, selectedClass]}>
        { days[timeslot.date.getDay()] }
      </Text>
  </TouchableOpacity>

}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    color: Theme.colors.primary,
    borderRadius: 5,
    borderWidth: 3,
    borderColor: Theme.colors.primary,
    width: 50,
    height: 50
  },
  inactive: {
    color: "grey",
    borderColor: "grey"
  },
  current: {
    color: "white",
    backgroundColor: Theme.colors.primary
  },
  day: {
    fontSize: 16,
    color: Theme.colors.primary,
  },
  month: {
    fontSize: 12,
    marginTop: -5,
    color: Theme.colors.primary,
  },
});

export default DayBox;