import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.screenView}>
      <Header />
      <StatusBar style='light' />
    </View>
  );
}

const styles = StyleSheet.create({
  screenView: {
    flex: 1,
  },
});
