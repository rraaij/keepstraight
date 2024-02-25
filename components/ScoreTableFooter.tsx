import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../lib/Colors";
import PrimaryButton from "./ui/PrimaryButton";
import { useGameStore } from "../lib/game.store";
import { PlayerEnum } from "../lib/game.model";
import { useNavigation } from "@react-navigation/native";

const ScoreTableFooter = () => {
  const navigation = useNavigation();
  const { possibleRun, rerack, scoreTable } = useGameStore((state) => ({
    possibleRun: state.possibleRun,
    rerack: state.rerack,
    scoreTable: state.scoreTable,
  }));

  return (
    <View style={styles.container}>
      <View style={styles.currentScores}>
        <View style={styles.column}>
          <Text style={styles.score}>
            {scoreTable.getCurrentScore(PlayerEnum.PLAYER_ONE)}
          </Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.score}>
            {scoreTable.getCurrentScore(PlayerEnum.PLAYER_TWO)}
          </Text>
        </View>
      </View>
      <Text style={styles.possibleRun}>Possible Run: {possibleRun}</Text>
      <View style={styles.actions}>
        <View style={styles.actionColumn}>
          <PrimaryButton onPress={() => rerack()}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Rerack</Text>
          </PrimaryButton>
        </View>
        <View style={styles.actionColumn}>
          {/*// @ts-ignore*/}
          <PrimaryButton onPress={() => navigation.navigate("ScoreUpdate")}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Update Score
            </Text>
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default ScoreTableFooter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blue600,
    paddingVertical: 2,
  },
  currentScores: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "stretch",
    flexGrow: 1,
  },
  column: {
    width: "50%",
    padding: 2,
    borderWidth: 1,
    borderColor: Colors.blue600,
  },
  score: {
    textAlign: "right",
    paddingRight: 3,
    fontWeight: "bold",
    fontSize: 30,
  },
  possibleRun: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  actions: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "stretch",
    flexGrow: 1,
    marginBottom: 40,
  },
  actionColumn: {
    width: "50%",
    padding: 3,
  },
});
