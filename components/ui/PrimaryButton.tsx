import { View, Text, Pressable, StyleSheet } from "react-native";
import { Colors } from "../../lib/Colors";

const PrimaryButton = ({
  children,
  onPress,
  toggled = false,
}: {
  children: any;
  onPress: () => void;
  toggled?: boolean;
}) => {
  return (
    <View
      style={[
        styles.outerContainer,
        toggled && { borderWidth: 2, borderColor: "white" },
      ]}
    >
      <Pressable
        style={({ pressed }) => [
          styles.buttonContainer,
          pressed && styles.pressed,
        ]}
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={[styles.buttonText, toggled && { fontWeight: "bold" }]}>
          {children}
        </Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  outerContainer: {
    margin: 4,
    borderRadius: 10,
    overflow: "hidden",
  },
  buttonContainer: {
    backgroundColor: Colors.blue500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    backgroundColor: Colors.blue300,
  },
});
