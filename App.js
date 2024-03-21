import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import React, { useState } from "react";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchContainer}>
          <Searchbar
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
            mode="view"
          />
        </View>
        <View style={styles.mainContainer}>
          <Text>list</Text>
        </View>
        <ExpoStatusBar style="auto" />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight, // only applies to Android. Same as SafeAreaView but for Android
  },
  searchContainer: {
    backgroundColor: "green",
    padding: 16,
  },
  mainContainer: {
    backgroundColor: "darkblue",
    borderColor: "black",
    flex: 1,
    padding: 16,
    borderTopColor: "black",
    borderTopWidth: 2,
  },
});
