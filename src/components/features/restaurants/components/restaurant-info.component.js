import React, { useState } from "react";
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Searchbar } from "react-native-paper";

const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Searchbar
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.searchBarComponent}
          iconColor="gray"
        />
      </View>
      <View style={styles.mainContainer}>
        <Text>list</Text>
      </View>
      <ExpoStatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight, // only applies to Android. Same as SafeAreaView but for Android
    backgroundColor: "#F7F7F7",
  },
  searchContainer: {
    padding: 16,
    backgroundColor: "#F7F7F7",
  },
  mainContainer: {
    backgroundColor: "darkblue",
    borderColor: "black",
    flex: 1,
    padding: 16,
    borderTopColor: "black",
    borderTopWidth: 2,
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
