import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../../assets/star";
import open from "../../../../../assets/open";
import { Spacer } from "../../../spacer/spacer.component";
import { Text } from "react-native";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Title = styled.Text`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const MiddleRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${(props) => props.theme.space[2]};
`;

const Rating = styled.View`
  display: flex;
  flex-direction: row;
`;

const RestaurantStatus = styled.View`
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.theme.space[1]};
  align-items: center;
`;

const RestaurantStatusText = styled.Text`
  color: red;
`;

const BottomRow = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.button};
  padding: ${(props) => props.theme.space[1]} ${(props) => props.theme.space[0]};
  width: 60%;
`;

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Big Boy Burger",
    icon,
    photos = [
      "https://hips.hearstapps.com/hmg-prod/images/burger-king-cheeseburger-1666891208.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/800px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
    ],
    address = "9 Irvine Blvd Irvine, CA 92604",
    isOpenNow = true,
    rating = 3.4,
    isClosedTemporarily = false,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.round(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover source={{ uri: photos[0] }} key={name} />
      <Info>
        <Title>{name}</Title>
        <MiddleRow>
          <Rating>
            {ratingArray.map((val, idx) => (
              <SvgXml xml={star} width={20} height={20} key={idx} />
            ))}
          </Rating>
          <RestaurantStatus>
            {!isClosedTemporarily && (
              <RestaurantStatusText variant="label">
                CLOSED TEMPORARILY
              </RestaurantStatusText>
            )}
            {isOpenNow && <SvgXml xml={open} height={20} width={20} />}
          </RestaurantStatus>
        </MiddleRow>
        <BottomRow>
          <Address>{address}</Address>
        </BottomRow>
      </Info>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;
