import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const MyButton = ({ btnTitle }) => {
  return (
    <TouchableOpacity style={styles.submitBtn}>
      <Text style={styles.btnText}>{btnTitle}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  submitBtn: {
    backgroundColor: "#0042b2",
    height: 50,
    marginHorizontal: 30,
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 10,
  },
  btnText: {
    fontSize: 20,
    color: "#ffff",
    textAlign: "center",
  },
});

export default MyButton;
