import { StyleSheet, View, Text, Modal, Button, TextInput } from "react-native";
import { useState } from "react";
import { Colors } from "../lib/Colors";

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
        <View style={styles.controlsContainer}>
          <Text style={{ textAlign: "center", fontWeight: "bold" }}>
            Balls left on table
          </Text>
          <View style={styles.controls}>
            <View style={styles.button}>
              <Button title={"+"} />
            </View>
            <TextInput
              textAlign={"center"}
              style={styles.inputControl}
              inputMode={"numeric"}
              keyboardType={"numeric"}
            />
            <View style={styles.button}>
              <Button title={"-"} />
            </View>
          </View>
        </View>

        <View style={styles.controlsContainer}>
          <Text style={{ textAlign: "center", fontWeight: "bold" }}>
            Did it end in a foul?
          </Text>
          <View style={styles.controls}>
            <View style={[styles.button, endedInFoul && styles.selectedButton]}>
              <Button title={"Yes"} onPress={() => setEndedInFoul(true)} />
            </View>
            <View
              style={[styles.button, !endedInFoul && styles.selectedButton]}
            >
              <Button title={"No"} onPress={() => setEndedInFoul(false)} />
            </View>
          </View>
        </View>

        <View style={styles.buttons}>
          <Button title={"Cancel"} onPress={onCancel} />
          <Button title={"Okay"} onPress={onAddScore} />
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
    borderBottomColor: "#ccc",
    backgroundColor: "#a0d2fa",
  },
  controlsContainer: {
    justifyContent: "space-between",
    paddingBottom: 16,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  inputControl: {
    borderWidth: 1,
    borderColor: Colors.blue600,
    width: "30%",
    padding: 16,
    borderRadius: 6,
    backgroundColor: "white",
    fontSize: 40,
  },
  button: {
    borderWidth: 1,
    borderColor: Colors.blue600,
    width: "30%",
    paddingVertical: 16,
    borderRadius: 6,
    fontWeight: "bold",
    marginHorizontal: 8,
  },
  selectedButton: {
    backgroundColor: Colors.blue600,
    color: "white",
  },
  buttons: {
    borderTopWidth: 1,
    borderTopColor: Colors.blue600,
    paddingTop: 16,
    paddingHorizontal: 3,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
