import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchContainer}>
          <Text>search</Text>
        </View>
        <View style={styles.mainContainer}>
          <Text>list</Text>
        </View>
        <StatusBar style='auto' />
      </SafeAreaView>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" && 20,
  },
  searchContainer: {
    backgroundColor: 'green',
    padding: 16,
  },
  mainContainer: {
    backgroundColor: "navy",
    borderColor: 'black',
    flex: 1,
    padding: 16,
    borderTopColor: 'black',
    borderTopWidth: 2
  }
});
