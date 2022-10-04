import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  formContainer: {
    alignItems: "center",
    
    flexDirection: "row",

    padding: 24,

    position: "absolute",
    top: 120,
  },

  input: {
    backgroundColor: "#262626",
    borderColor: "#0D0D0D",
    borderRadius: 6,
    borderWidth: 2,

    color: "#F2F2F2", 

    flex: 1,

    fontSize: 18,

    marginRight: 5,

    padding: 16,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#1E6F9F",
    borderRadius: 6,

    width: 52,
    height: 52,
  },

  buttonIcon: {
    color: "#fff",

    fontSize: 20,
  },
})

export default styles;