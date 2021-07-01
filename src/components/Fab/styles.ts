import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    color: '#161616',
    fontSize: 40,
    borderRadius: 50,
    width: 60,
    height: 60,
    shadowOffset:{  width: 20,  height: 20,  },
    shadowColor: '#cccccc',
    borderColor: '#cccccc',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  floatButton: {
    position: 'absolute',
    bottom: 40
  },
  left: {
    left: 40
  },
  right: {
    right: 40
  }
})