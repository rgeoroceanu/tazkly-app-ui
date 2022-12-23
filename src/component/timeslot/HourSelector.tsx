import {ScrollView, StyleSheet, TouchableOpacity} from "react-native";
import React, {Component} from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {Card} from "react-native-paper";

class HourSelector extends Component<any, any> {

  constructor(props) {
    super(props);
    this.state = {
      timeslots: []
    }
  }

  render() {
    const { selectHandler } = this.props;
    const cards = this.getHourCards(selectHandler);
    return <ScrollView style={[styles.container]}>
      { cards }
    </ScrollView>
  }

  componentDidMount() {
    const { timeslotsPromise } = this.props;
    timeslotsPromise.then(t => this.setState({timeslots: t}));
  }

  private getHourCards(selectHandler) {
    const timeslots = this.state.timeslots;
    const cards = [];
    for (let i = 0; i < timeslots.length; i++) {
      const timeslot = timeslots[i];
      const box = <TouchableOpacity
        key={"hour-touchable-" + i}
        onPress={() => selectHandler(timeslot)}>
        <Card.Title
          key={"hour-" + i}
          style={[styles.card]}
          title={timeslot.hour}
          titleStyle={styles.title}
          right={(props) => <Icon style={styles.arrow} name="angle-right" size={22} /> }>
        </Card.Title>
      </TouchableOpacity>;
      cards.push(box);
    }
    return cards;
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 15
  },
  card: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.2)",
  },
  title: {

  },
  arrow: {
    marginRight: 10
  }
});

export default HourSelector;