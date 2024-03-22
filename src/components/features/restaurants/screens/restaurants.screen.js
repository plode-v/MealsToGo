import React, { useState } from "react";
import { StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfoCard from "../components/restaurantInfoCard.component";
import styled from "styled-components";

const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const SearchbarComponent = styled(Searchbar)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  border-radius: 5px;
  box-shadow: 0 0 7px lightgray;
`;

const RestaurantInfoSection = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
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
      <RestaurantInfoSection>
        <RestaurantInfoCard />
      </RestaurantInfoSection>
    </Container>
  );
};

export default RestaurantsScreen;
