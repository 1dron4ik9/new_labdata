import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const NewsBlock = ({ imageUrl, title, description }) => {
  return (
    <TouchableOpacity>
      <View style={styles.newsBlock}>
        <Image source={{ uri: imageUrl }} style={styles.newsImage} />
        <View style={styles.newsContent}>
          <View style={styles.newsContent}>
            <Text style={styles.newsTitle} numberOfLines={3}>
              {title}
            </Text>
          </View>
          <View style={styles.newsContent}>
            <Text
              style={styles.newsDescription}
              numberOfLines={3}
              ellipsizeMode={"tail"}
            >
              {description}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  newsBlock: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    backgroundColor: "#cfd0cf",
  },
  touchable: {
    flex: 1,
  },
  newsImage: {
    width: 120,
    height: 120,
    marginRight: 5,
    backgroundColor: "#cfd0cf",
  },
  newsContent: {
    flex: 1,
  },
  newsTitle: {
    fontSize: 14,
    marginTop: 5,
    alignItems: "flex-start",
    textAlign: "center",
    fontWeight: "bold",
  },
  newsDescription: {
    fontSize: 11,
  },
});

export default NewsBlock;
