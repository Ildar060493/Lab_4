import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Card = () => {
  return (
    <View style={styles.card}>
      <Image 
        source={{ uri: "https://your-profile-image-url.com" }} 
        style={styles.image} 
      />
      <Text style={styles.name}>Rich Rich</Text>
      <Text style={styles.group}>Группа: CS-204(c)</Text>
      <Text style={styles.email}>Email: Rich@gmail.com</Text>
      <Text style={styles.info}>1, 3, 7</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    margin: 20
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10
  },
  name: {
    fontSize: 20,
    fontWeight: "bold"
  },
  group: {
    fontSize: 16,
    color: "gray"
  },
  email: {
    fontSize: 16,
    color: "blue"
  },
  info: {
    fontSize: 16,
    marginTop: 10
  }
});

export default Card;
