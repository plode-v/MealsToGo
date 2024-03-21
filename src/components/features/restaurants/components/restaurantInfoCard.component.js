import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const Title = styled.Text`
  padding: 16px;
  background-color: red;
`;

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "test name",
    icon,
    photos = [
      "https://hips.hearstapps.com/hmg-prod/images/burger-king-cheeseburger-1666891208.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/800px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
    ],
    address = "9 Irvine Blvd Irvine, CA 92604",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;

  console.log(photos[1]);

  return (
    <Card style={styles.cardContainer} elevation={5}>
      <Card.Cover
        source={{ uri: photos[1] }}
        style={styles.cardCover}
        key={name}
      />
      <Title>{name}</Title>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#f7f7f7",
  },
  cardCover: {
    backgroundColor: "transparent",
    padding: 20,
  },
  cardTitle: {
    padding: 16,
  },
});

export default RestaurantInfoCard;
