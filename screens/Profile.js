import { View, Text, StyleSheet } from "react-native";
import React from "react";
import InputBox from "../components/InputBox";
import MyButton from "../components/MyButton";
const Profile = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 15,
        }}
      >
        <Text
          style={{
            fontSize: 30,
          }}
        >
          Реєстрація
        </Text>
      </View>
      <View style={{ marginHorizontal: 30 }}>
        <InputBox inpTitle={"Ім'я"} />
        <InputBox inpTitle={"Прізвище"} />
        <InputBox inpTitle={"Email"} />
        <InputBox inpTitle={"Пароль"} />
      </View>
      <MyButton btnTitle="Вхід"></MyButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {},
});

export default Profile;
