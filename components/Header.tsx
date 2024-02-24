import { StyleSheet, Text } from "react-native";

const Header = () => {
  return (
    <>
      <Text style={styles.header}>Target score</Text>
      <Text style={[styles.header, styles.value]}>50</Text>
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
