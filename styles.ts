import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#191919",
    flex: 1,
  },

  emptyListContainer: {
    alignItems: "center",
    alignSelf: "center",

    borderTopWidth: 2,
    borderTopColor: "#333",

    width: "85%",
  },

  emptyListIcon: {
    color: "#3D3D3D",

    fontSize: 100,

    marginTop: 50,
  },

  emptyListText: {
    color: "#808080",

    fontSize: 15,

    marginTop: 5,
  }
});

export default styles;