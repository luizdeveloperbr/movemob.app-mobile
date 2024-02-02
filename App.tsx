import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import InputPatrimonioId from './components/InputPatrimonioIdComponent';

export default function App() {

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>CONSULTA DE PATRIMONIO</Text>
      </View>
      <InputPatrimonioId />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center'
  },
  text: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 25,
  }
});
