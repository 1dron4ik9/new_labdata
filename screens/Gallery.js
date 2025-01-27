import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Item = ({ url }) => <Image source={{ uri: url }} style={styles.item} />;

const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://1dron4ik9.github.io/labdata/data.json"
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const Gallery = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataAndSetData = async () => {
      const fetchedData = await fetchData();
      setData(JSON.parse(JSON.stringify(fetchedData))["data"]);
    };

    fetchDataAndSetData();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item url={item.url} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    height: 150,
  },
  item: {
    backgroundColor: "#cfd0cf",
    flex: 1,
    margin: 16,
    height: 125,
  },
  title: {
    fontSize: 12,
  },
});

export default Gallery;
