import { View, Text, StyleSheet, Button } from "react-native";
import { useState } from "react";
import ScoreUpdater from "./ScoreUpdater";
import { Colors } from "../lib/Colors";
import PrimaryButton from "./ui/PrimaryButton";

const ScoreTableFooter = () => {
  const [scoreUpdaterVisible, setScoreUpdaterVisible] =
    useState<boolean>(false);

  const addScoreHandler = () => {
    // handle updated score
    setScoreUpdaterVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.currentScores}>
        <View style={styles.column}>
          <Text style={styles.score}>
            {/*getCurrentScore*/}
            34
          </Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.score}>
            {/*getCurrentScore*/}
            67
          </Text>
        </View>
      </View>

      <Text style={styles.possibleRun}>Possible Run: 90</Text>

      <View style={styles.actions}>
        <View style={styles.actionColumn}>
          <PrimaryButton onPress={() => console.log("RERACK")}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Rerack</Text>
          </PrimaryButton>
        </View>
        <View style={styles.actionColumn}>
          <PrimaryButton onPress={() => setScoreUpdaterVisible(true)}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Update Score
            </Text>
          </PrimaryButton>
        </View>
        {scoreUpdaterVisible && (
          <ScoreUpdater
            visible={scoreUpdaterVisible}
            onAddScore={addScoreHandler}
            onCancel={() => setScoreUpdaterVisible(false)}
          />
        )}
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
