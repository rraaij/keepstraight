import { StyleSheet, Text } from "react-native";
import { SetupInfo } from "../lib/game.model";
import { useGameStore } from "../lib/game.store";

const Header = () => {
  const { setupInfo } = useGameStore<{ setupInfo: SetupInfo }>((state) => ({
    setupInfo: state.setup,
  }));
  return (
    <>
      <Text style={styles.header}>Target score</Text>
      <Text style={[styles.header, styles.value]}>{setupInfo.targetScore}</Text>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    fontSize: 18,
  },
  value: {
    fontSize: 36,
    fontWeight: "bold",
  },
});
