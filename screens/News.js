import { View, FlatList, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import NewsBlock from "../components/NewsBlock";
import axios from "axios";

const fetchData = async () => {
  try {
    const response = await axios
      .get("https://1dron4ik9.github.io/labdata/data.json")
      .then((res) => res["data"]);
    return response;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const News = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataAndSetData = async () => {
      const fetchedData = await fetchData();
      setData(fetchedData["data"]);
    };

    fetchDataAndSetData();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <NewsBlock
            imageUrl={item.url}
            title={item.title}
            description={item.description}
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={1}
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
  touchable: {
    flex: 1,
  },
});

export default News;
