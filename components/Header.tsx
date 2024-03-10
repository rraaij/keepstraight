import { StyleSheet, Text, View } from "react-native";
import { SetupInfo } from "../lib/game.model";
import { useGameStore } from "../lib/game.store";

const Header = () => {
  const { setupInfo } = useGameStore<{ setupInfo: SetupInfo }>((state) => ({
    setupInfo: state.setup,
  }));
  return (
    <View>
      <Text style={styles.header}>Target score</Text>
      <Text style={styles.value}>{setupInfo.targetScore}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    fontFamily: "ArimoBold",
    textAlign: "center",
    fontSize: 16,
  },
  value: {
    fontFamily: "LondonHeavy",
    textAlign: "center",
    fontSize: 50,
  },
});
