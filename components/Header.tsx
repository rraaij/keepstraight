import { View, StyleSheet, Text } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text>To Setup</Text>
      <View>
        <Text>Target score: 50</Text>
        <Text>Starting player: PLAYER_ONE</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 3,
    paddingVertical: 4,
  },
});
