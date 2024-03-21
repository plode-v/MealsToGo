import React, { useState } from "react";
import { StatusBar, StyleSheet, View, SafeAreaView } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Searchbar } from "react-native-paper";
import RestaurantInfoCard from "../components/restaurantInfoCard.component";
import styled from "styled-components";

const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}; /* only applies to Android. Same as SafeAreaView but for Android */
  background-color: #f7f7f7;
`;

const SearchContainer = styled.View`
  padding: 16px;
  background-color: transparent;
`;

const SearchbarComponent = styled(Searchbar)`
  background-color: #f7f7f7;
  border-radius: 5px;
  box-shadow: 0 0 7px lightgray;
`;

const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Container>
      <SearchContainer>
        <SearchbarComponent
          onChangeText={setSearchQuery}
          value={searchQuery}
          iconColor="gray"
        />
      </SearchContainer>
      <View style={styles.Container}>
        <RestaurantInfoCard />
      </View>
      <ExpoStatusBar style="auto" />
    </Container>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 16,
  },
  searchBarComponent: {
    backgroundColor: "#F7F7F7",
    borderRadius: "5",
    shadowOpacity: "100",
    shadowColor: "lightgray",
    shadowOffset: {
      height: "0",
      width: "0",
    },
    shadowRadius: "5",
  },
});

export default RestaurantsScreen;
