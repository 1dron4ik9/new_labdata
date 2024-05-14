import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={{ fontSize: 12, flex: 1, fontWeight: "500" }}>
        Васільєв Андрій Костянтинович ІПЗк-22-1
      </Text>
      <Image
        source={require("../assets/university-colored.png")}
        style={{ width: 170, height: 50 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    height: 90,
    gap: 10,
    justifyContent: "space-between",
    marginHorizontal: 15,
    alignItems: "flex-end",
    paddingBottom: 15,
  },
});

export default Header;
