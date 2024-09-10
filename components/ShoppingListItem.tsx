import { StyleSheet, Text, TouchableOpacity, View, Alert } from "react-native";

export default function ShoppingListItem({ name, isCompleted }: { name: string, isCompleted?: boolean }) {
  const handleDelete = () => {
    Alert.alert("Delete", `Are you sure you want to delete ${name}?`, [
      { text: "Cancel", style: "cancel" },
      { text: "Delete", style: "destructive", onPress: () => {} },
    ]);
  };

  return (
    <View style={[styles.itemContainer, isCompleted ? styles.containerCompleted : undefined]}>
      <Text style={[styles.itemText, isCompleted ? styles.textCompleted : undefined]}>{name}</Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={handleDelete}
      >
        <Text style={[styles.buttonText]}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: "#1a759f",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerCompleted: {
    backgroundColor: "#929196",
  },
  itemText: { fontSize: 16 },
  textCompleted: {
    textDecorationLine: "line-through",
    textDecorationColor: "red",
    textDecorationStyle: "solid",
  },
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
