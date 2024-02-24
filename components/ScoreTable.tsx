import { View, StyleSheet, FlatList } from "react-native";
import { PlayerEnum } from "../lib/game.model";
import { Colors } from "../lib/Colors";

const ScoreTable = ({ player }: { player: PlayerEnum }) => {
  return (
    <View style={styles.container}>
      {/*<FlatList data={} renderItem={} />*/}
    </View>
  );
};

export default ScoreTable;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    borderWidth: 1,
    borderColor: Colors.blue600,
    width: "100%",
    backgroundColor: "white",
  },
});
