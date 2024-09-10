import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ShoppingListItem from "./components/ShoppingListItem";

export default function App() {
  return (
    <View style={styles.container}>
      <ShoppingListItem name="Banana" />
      <ShoppingListItem name="Apple" />
      <ShoppingListItem name="Orange" isCompleted />
      <ShoppingListItem name="Coffee" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  itemContainer: {
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: "#1a759f",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemText: { fontSize: 16 },
  button: {
    backgroundColor: "black",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  buttonText: {
    fontWeight: "600",
    color: "white",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
