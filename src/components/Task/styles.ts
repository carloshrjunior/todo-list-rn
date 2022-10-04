import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  taskContainer: {
    alignItems: "center",
    alignSelf: "center",

    backgroundColor: "#262626",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#333",

    flexDirection: "row",

    marginBottom: 8,

    padding: 15,

    width: "85%",
  },

  taskDescription: {
    flex: 1,

    fontSize: 16,

    lineHeight: 21,
  },

  taskCheckIcon: {
    fontSize: 25,

    marginRight: 10,
  },

  taskDeleteIcon: {
    color: "#808080",

    fontSize: 21,
  }
})

export default styles;