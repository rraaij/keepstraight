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
    textAlign: "center",
    fontSize: 18,
  },
  value: {
    textAlign: "center",
    fontSize: 36,
    fontWeight: "bold",
  },
});
