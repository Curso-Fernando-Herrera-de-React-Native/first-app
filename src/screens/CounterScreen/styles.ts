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
  },
  floatLeft: {
    position: 'absolute',
    left: 40,
    bottom: 40
  },
  floatRigth: {
    position: 'absolute',
    right: 40,
    bottom: 40
  }
})