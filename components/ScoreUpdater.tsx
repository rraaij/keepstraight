import { StyleSheet, View, Text, Modal, Button, TextInput } from "react-native";
import { useState } from "react";
import { Colors } from "../lib/Colors";
import PrimaryButton from "./ui/PrimaryButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import { PlayerEnum } from "../lib/game.model";

const ScoreUpdater = ({
  visible,
  onAddScore,
  onCancel,
}: {
  visible: boolean;
  onAddScore: () => void;
  onCancel: () => void;
}) => {
  const [endedInFoul, setEndedInFoul] = useState<boolean>(false);

  return (
    <Modal visible={visible} animationType={"slide"}>
      <View style={styles.container}>
        <Text style={styles.label}>Balls left on table</Text>
        <View style={styles.controlsContainer}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <PrimaryButton onPress={() => {}}>
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
            />
            <PrimaryButton onPress={() => {}}>
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
          <PrimaryButton onPress={onCancel}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Cancel</Text>
          </PrimaryButton>
          <PrimaryButton onPress={onAddScore}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Okay</Text>
          </PrimaryButton>
        </View>
      </View>
    </Modal>
  );
};

export default ScoreUpdater;

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
