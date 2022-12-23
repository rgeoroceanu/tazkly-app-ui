import {Appbar} from "react-native-paper";
import {StyleSheet} from "react-native";
import {useRoute} from "@react-navigation/native";

function HeaderBar({ navigation, back }) {
    const route = useRoute();
    return (
        <Appbar.Header style={styles.header}>
          {back ? <Appbar.BackAction style={styles.back} onPress={navigation.goBack} size={26}/> : null }
            {back ? <Appbar.Content titleStyle={styles.title} title={getTitle(route) } /> : null }
        </Appbar.Header>
    );
}

function getTitle(route) {
    const {title} = route.params;
    return title;
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'transparent',
        borderWidth: 0,
    },
    title: {
    },
    back: {
        alignItems: "center",
        alignSelf: "center"
    }

});

export default HeaderBar;