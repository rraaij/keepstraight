import { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../lib/Colors";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useGameStore } from "../lib/game.store";

const ScoreUpdate = ({ navigation }: { navigation: any }) => {
  const { updateScore, possibleRun } = useGameStore((state) => ({
    updateScore: state.updateScore,
    possibleRun: state.possibleRun,
  }));
  const [ballsOnTable, setBallsOnTable] = useState<number>(2);
  const [endedInFoul, setEndedInFoul] = useState<boolean>(false);

  const onAddScore = (ballsOnTable: number, endedInFoul: boolean) => {
    updateScore({ ballsOnTable, endedInFoul });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Balls left on table</Text>
      <View style={styles.controlsContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <PrimaryButton
            onPress={() =>
              ballsOnTable - 1 >= 2 && setBallsOnTable(ballsOnTable - 1)
            }
          >
            <Ionicons name={"remove"} size={24} color={"white"} />
          </PrimaryButton>
          <TextInput
            placeholder="100"
            style={[
              styles.inputControl,
              { width: 80, textAlign: "center", marginHorizontal: 10 },
            ]}
            inputMode={"numeric"}
            keyboardType="numeric"
            value={ballsOnTable.toString()}
          />
          <PrimaryButton
            onPress={() => {
              // max validation
              const maxValue = possibleRun < 15 ? possibleRun : 15;
              ballsOnTable + 1 <= maxValue && setBallsOnTable(ballsOnTable + 1);
            }}
          >
            <Ionicons name={"add"} size={24} color={"white"} />
          </PrimaryButton>
        </View>
      </View>

      <Text style={styles.label}>Did it end in a foul?</Text>
      <View style={styles.controlsContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <PrimaryButton
            toggled={endedInFoul}
            onPress={() => setEndedInFoul(true)}
          >
            <Text>Yes</Text>
          </PrimaryButton>
          <PrimaryButton
            toggled={!endedInFoul}
            onPress={() => setEndedInFoul(false)}
          >
            <Text>No</Text>
          </PrimaryButton>
        </View>
      </View>

      <View style={styles.buttons}>
        <PrimaryButton onPress={() => navigation.goBack()}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Cancel</Text>
        </PrimaryButton>
        <PrimaryButton onPress={() => onAddScore(ballsOnTable, endedInFoul)}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Okay</Text>
        </PrimaryButton>
      </View>
    </View>
  );
};

export default ScoreUpdate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: Colors.blue600,
  },
  controlsContainer: {
    justifyContent: "space-between",
    paddingBottom: 30,
  },
  label: { fontWeight: "bold", fontSize: 20, marginBottom: 10 },
  controls: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  inputControl: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    fontSize: 20,
    width: 230,
  },
  button: {
    borderWidth: 1,
    borderColor: Colors.blue900,
    width: "30%",
    paddingVertical: 16,
    borderRadius: 6,
    fontWeight: "bold",
    marginHorizontal: 8,
  },
  selectedButton: {
    backgroundColor: Colors.blue900,
    color: "white",
  },
  buttons: {
    borderTopWidth: 1,
    borderTopColor: "white",
    paddingTop: 16,
    paddingHorizontal: 3,
    flexDirection: "row",
  },
});
